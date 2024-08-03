import { Link } from "react-router-dom";
import DynamicContainer from "./DynamicContainer";
import SignupLoginButton from "../auth/SigninLogoutButton";

export default function Header() {
  return (
    <div className="bg-dark text-light mb-3">
      <DynamicContainer>
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1>AI Academy</h1>
          </Link>
          <div>
            <a href="/#/signup">
              <SignupLoginButton />
            </a>
          </div>
        </div>
      </DynamicContainer>
    </div>
  );
}
