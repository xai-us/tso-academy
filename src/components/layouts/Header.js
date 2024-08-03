import { Link } from "react-router-dom";
import SignupLoginButton from "../auth/SigninLogoutButton";

export default function Header() {
  return (
    <div className="bg-dark text-light mb-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <h1>AI 学院</h1>
        </Link>
        <div>
          <SignupLoginButton />
        </div>
      </div>
    </div>
  );
}
