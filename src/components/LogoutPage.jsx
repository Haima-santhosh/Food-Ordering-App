import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    localStorage.removeItem('userData'); 
    sessionStorage.clear(); 

  
    navigate('/login');
  }, [navigate]);

  return null; 
};

export default LogoutPage