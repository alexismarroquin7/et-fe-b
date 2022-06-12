import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Grid } from "../../components";
import { login } from "../../store";

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

  // useEffect(() => {
    // if(!auth.loggedIn) return;
    // router.push(`/transactions`);
  // }, [auth.loggedIn, router]);

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
  
    <button type="submit">Login</button>
    
    {auth.error.message && <p className="error_message">{auth.error.message}</p>}
  
    <div>
      <p>Dont have an account?</p>
      <button
        type="button"
        onClick={() => {
          router.push(`/sign-up`)
        }}
      >Sign-Up</button>
    </div>
    
    <style jsx>{`
      form {
        border: 1px solid #eee;
        border-radius: 1rem;
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
        border-radius: 2rem;
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
        border-radius: 2rem;
      }

      button[type=submit] {
        width: 100%;
        color: #fff;
        background-color: #4285F4;
        border: 0;
      }
      
      button[type=button] {
        color:;
        background-color: transparent;
        border: 0;
        padding: 0;
      }

    `}</style>
  
  </form>
}