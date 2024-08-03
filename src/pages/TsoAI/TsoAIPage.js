import { redirect, useNavigate } from "react-router-dom";
import useSupabaseClient from "../../hooks/useSupabaseClient";
import TsoSidebar from "./en/TsoAISidebar";
import SpinnerScreen from "../../components/spinnerScreen";

export default function TsoAIPage() {
  const { session, isLoading } = useSupabaseClient();
  const navigate = useNavigate();

  if (isLoading) return <SpinnerScreen />;

  if (!session?.user) {
    console.log("redirect");
    navigate("/auth/sign-up");
  }

  console.log("session", !session?.user);

  return (
    <div className="flex">
      <div className="w-96 h-screen h-[calc(100vh-120px)] overflow-y-scroll">
        <TsoSidebar />
      </div>
      <main className="flex-grow">
        <div className="flex justify-center items-center h-[calc(100vh-120px)]">
          <h3 className="text-gray-300">main content</h3>
        </div>
      </main>
    </div>
  );
}
