import { useState } from 'react';
import { AuthContext } from './AuthContextObj';
import API from '../api/axios';

export const AuthProvider = ({ children }) => {
  // — if token is expired, user stays "logged in" until a request fails
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logoutUserApi = async () => {
    try {
      await API.post('/auth/logout');
    } catch (_error) {
      console.error('Logout API request failed:', _error);
    }
  };

  const logout = async () => {
    try {
      await logoutUserApi();
    } catch (_error) {
      console.error('Logout failed:', _error);
    }

    localStorage.removeItem('user');  
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
