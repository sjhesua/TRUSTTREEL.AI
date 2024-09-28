# Usar una imagen base de Python para el backend
FROM python:3.9-slim AS backend

# Establecer el directorio de trabajo para el backend
WORKDIR /app

# Instalar herramientas de construcción
RUN apt-get update && apt-get install -y build-essential

# Copiar y instalar dependencias del backend
COPY core/requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Copiar el código del backend
COPY core /app

# Construir la aplicación frontend (React)
FROM node:14 AS frontend

# Establecer el directorio de trabajo para el frontend
WORKDIR /my-frontend

# Copiar y instalar dependencias del frontend
COPY my-frontend/package.json my-frontend/package-lock.json ./
RUN npm install

# Copiar el código del frontend
COPY my-frontend ./

# Construir la aplicación frontend
RUN npm run build

# Usar una imagen base de Python para el contenedor final
FROM python:3.9-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar Node.js para ejecutar el servidor de desarrollo de React
RUN apt-get update && apt-get install -y nodejs npm

# Copiar las dependencias del backend
COPY --from=backend /app /app

# Copiar los archivos construidos del frontend al directorio estático del backend
COPY --from=frontend /my-frontend/build /app/static

# Copiar el código del frontend nuevamente para el servidor de desarrollo
COPY --from=frontend /my-frontend /my-frontend

# Instalar uWSGI
RUN pip install uwsgi

# Exponer los puertos
EXPOSE 8000 3000

# Comando para ejecutar la aplicación
CMD ["sh", "-c", "cd /my-frontend && npm start & uwsgi --http :8000 --wsgi-file api.py --callable app --master --processes 4 --threads 2 --http-timeout 3000"]
