import React, { useContext } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { motion } from 'framer-motion';
import AuthContext from '../../contexts/AuthContext.js';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (username, password) => {
    console.log('Usuario:', username, 'Contraseña:', password);
    //auth
    const isAuthenticated = true;

    if (isAuthenticated) {
      setUser({ username, password });

      navigate('/dashboard');
    } else {
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.loginView}
    >
      <div className={styles.loginBox}>
        <h1>Bienvenido</h1>
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </motion.div>
  );
};

export default Login;
