import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button } from "../Button";

export const PrivateRoute = (props) => {
  
  const auth = useSelector(s => s.auth);

  const router = useRouter();

  return auth.loggedIn
  ? (
    props.children
  ) : (
    <div>
      <p>Looks like your not logged in.</p>
      <Button
        onClick={() => {
          router.push('/login');
        }}
      >Login</Button>
    </div>
  );
}