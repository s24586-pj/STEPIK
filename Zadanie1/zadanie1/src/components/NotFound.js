import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  return <h1>Nie znaleziono elementu: {location.pathname}</h1>;
};

export default NotFound;