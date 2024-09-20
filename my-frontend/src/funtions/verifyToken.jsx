import axios from 'axios';

const verifyToken = async (token) => {
  try {
    const response = await axios.post('http://localhost:8000/company/api/token/verify/', { token });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export default verifyToken;