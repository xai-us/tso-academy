import { Button } from "flowbite-react";
import useSupabaseClient from "../../hooks/useSupabaseClient";
import { appSupabaseClient } from "../../services/supabase";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SignupLoginButton() {
  const { session } = useSupabaseClient();

  useEffect(() => {
    console.log("session", session);
  }, [session]);

  return !session?.user ? (
    <Link to="/auth/sign-up">
      <Button
        className="rounded"
        theme={{
          color: {
            info: "border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
          },
        }}
      >
        Sign up
      </Button>
    </Link>
  ) : (
    <div
      onClick={() => {
        appSupabaseClient.auth.signOut();
      }}
    >
      <AppButton>Log out</AppButton>
    </div>
  );
}

export const AppButton = ({ children, props }) => (
  <Button
    className="rounded"
    theme={{
      color: {
        info: "border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
      },
    }}
    {...props}
  >
    {children}
  </Button>
);
