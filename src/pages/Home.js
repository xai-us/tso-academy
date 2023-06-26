import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/article/top-10-ai-companies">Top 10 AI Companies</Link>
        </li>
        <li>
          <Link to="/article/top-10-ai-startups">Top 10 AI Startups</Link>
        </li>
      </ul>
    </div>
  );
}
