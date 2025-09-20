import React, { useContext } from 'react';
import '../styles/PostsList.css';
import '../styles/Form.css';
import Input from '../components/UI/input/Input';
import Button from '../components/UI/button/Button';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        navigate('/posts', { replace: true });
    }
  return (
    <div className='posts'>
            <h1 className="posts__heading">Login page</h1>
            <form onSubmit={login} className='form'>
                <Input type='text' placeholder='Enter login' />
                <Input type='password' placeholder='Enter password' />
                <Button >Sign in the App</Button>
            </form>
      
    </div>
  );
};

export default Login;