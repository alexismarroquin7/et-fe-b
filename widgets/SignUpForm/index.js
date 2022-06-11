import { useState } from "react";
import { requestRegister } from "../../store/slices/auth-slice";
import { Button, Grid } from "../../components";

import { useDispatch } from "react-redux";

// const StyledSignUpForm = styled.form`
//   display: flex;
//   flex-flow: column wrap;
//   align-items: center;
//   width: 100%;

//   input {
//     width: 80%;
//     font-size: 1rem;
//     padding: .5rem;
//   }
// `

const initialValues = {
  email: ''
}

export const SignUpForm = () => {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = e => setValues({
    ...values,
    [e.target.name]: e.target.type === 'checkbox'
    ? e.target.checked
    : e.target.value
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(requestRegister(values));
  }

  return <form
    onSubmit={handleSubmit}
  >
    <Grid
      border="1px solid #ddd"
      ai="center"
      ff="col"
      gap="1rem" 
      width="90%"
      padding="1rem 0"
    >
      <h3>Sign-Up</h3>
      
      <p>
        Enter your email below and you will recieve a confirmation email.
      </p>
      
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />

      <Button
        border="1px solid #eee"
        padding=".5rem 1rem"
        br="50px"
        bc="#4285F4"
        color="white"
        type="submit"
      >Submit</Button>

      <p>Already have an account? <a href="/login" style={{color:'blue'}}>Login</a></p>
    
    </Grid>

  </form>
}