import SignUpForm from "../../components/sign-up/sign-up";
import SignInForm from "../../components/sign-in/sign-in";

import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
