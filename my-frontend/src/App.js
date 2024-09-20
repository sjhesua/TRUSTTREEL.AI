import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Home,Mesajes,Conferencia,VideoRecorder,Dashboard,CreateVideo,VideoConference,UploadExcel,LoginForm,SignUpForm } from './pages';

function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mensajes" element={<Mesajes />} />
              <Route path="/conferencia" element={<Conferencia />} />
              <Route path="/test" element={<VideoRecorder />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/createvideo" element={<CreateVideo />} />
              <Route path="/dashboard/videoConference" element={<VideoConference />} />
              <Route path="/dashboard/subidafile" element={<UploadExcel />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
