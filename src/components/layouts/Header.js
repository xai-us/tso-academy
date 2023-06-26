import { Link } from "react-router-dom";
import DynamicContainer from "./DynamicContainer";

export default function Header() {
  return (
    <div className="bg-dark text-light mb-3">
      <DynamicContainer>
        <div className="py-1">
          <Link to="/">
            <h1>Learn AI</h1>
          </Link>
        </div>
      </DynamicContainer>
    </div>
  );
}
