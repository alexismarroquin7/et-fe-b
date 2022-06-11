import { Grid } from "../components"
import { LoginForm } from "../widgets/LoginForm"

export default function LoginPage ()  {
  return <Grid
    padding="1rem 0"
    ff="col"
    ai="center"
    gap="1rem"
  >
    <LoginForm/>
  </Grid>
}