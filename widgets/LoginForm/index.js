import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Grid } from "../../components";
import { login, setRedirectURL } from "../../store";

const initialValues = {
  login: '',
  password: ''
}

export const LoginForm = (props) => {
  const [values, setValues] = useState(initialValues);
  const auth = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({credentials: values}));
  }

  useEffect(() => {
    if(auth.redirectURL === ('' || '/login')) return;
    if(auth.redirectURL === '/transactions'){
      router.push('/transactions');
    }

    return () => {
      if(auth.redirectURL.length === 0) return;
      dispatch(setRedirectURL(''));
    }
  }, [auth.redirectURL, router, dispatch]);

  return <form
    border="1px solid #ccc"
    padding="1rem"
    ff="col"
    ai="center"
    gap="1rem"
    onSubmit={handleSubmit}
    width="90%"
    br="1rem"
  >

    <h3>Login</h3>
    
    <input
      placeholder="Email or UserID"
      name="login"
      value={values.login}
      onChange={handleChange}
    />
  
    <input
      placeholder="Password"
      type={"password"}
      name="password"
      value={values.password}
      onChange={handleChange}
    />
  
    <button 
      type="submit"
      className={`${(auth.loading || auth.redirectURL === '/transactions') ? 'submit_button_loading' : ''}`}
    >
      {(auth.loading || auth.redirectURL === '/transactions') ? <CircularProgress size={'1rem'}/> : 'Login'}
    </button>
    
    {auth.error.message && <p className="error_message">{auth.error.message}</p>}
  
    <div>
      <p>Dont have an account?</p>
      <button
        type="button"
        onClick={() => {
          router.push(`/sign-up`)
        }}
      >
        Sign-Up
      </button>
    </div>
    
    <style jsx>{`
      form {
        border: 1px solid #eee;
        border-radius: .5rem;
        width: 90%;
        padding: 1rem;
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
        align-items: center;
      }
      
      input {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: .5rem;
      }

      p.error_message {
        color: #de5246;
      }

      div {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: .5rem;
      }

      button {
        font-size: 1rem;
        padding: 1rem;
        border-radius: .5rem;
        font-weight: bold;
      }

      button[type=submit] {
        width: 100%;
        color: #fff;
        background-color: #4285F4;
        border: 1px solid #4285F4;
      }

      button[type=submit].submit_button_loading {
        color: #4285F4;
        background-color: #fff;
        padding: 1rem;
      }
      
      button[type=button] {
        color: #4285F4;
        background-color: transparent;
        border: 1px solid white;
        padding: .5rem;
        border-radius: .5rem;
        transition: all .2s;
      }
      
      button[type=button]:hover {
        border-color: #eee;
        background-color: #eee;
      }

    `}</style>
  
  </form>
}