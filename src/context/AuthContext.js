import { createContext, useState, useEffect } from "react";
import { db } from '../dB.js';

export const AuthContext = createContext(null);
 
const AuthProvider = ({ children }) => {


const [user, setUser] = useState(user);
useEffect(() => {
    db.map((value) => setUser(value));

}, []);

const value = {user}

console.log(user)
    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
      );
 }

 export default AuthProvider;