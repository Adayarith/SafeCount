// src/components/ProtectedRoute.js
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user } = useAuth();
  
  if (!user) {
    // Redirect to /login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;