// import React, { createContext, useState, useContext } from 'react';

// // Create context
// const AuthContext = createContext();

// // Custom hook to access AuthContext
// export const useAuth = () => useContext(AuthContext);

// // AuthProvider component to wrap the app
// export const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(localStorage.getItem('token') || '');

//     const login = (newToken) => {
//         setToken(newToken);
//         localStorage.setItem('token', newToken);
//     };

//     const logout = () => {
//         setToken('');
//         localStorage.removeItem('token');
//     };

//     return (
//         <AuthContext.Provider value={{ token, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
