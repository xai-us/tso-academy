import { Auth } from "@supabase/auth-ui-react";
import { appSupabaseClient } from "../../../services/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useSupabaseClient from "../../../hooks/useSupabaseClient";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function SignUpPage() {
  const { session } = useSupabaseClient();

  useEffect(() => {
    console.log("session", session);
  }, [session]);

  return (
    <div className="max-w-screen-xl mx-auto">
      {!session?.user ? (
        <div className="w-96 mx-auto">
          <h2>Sign up</h2>
          <Auth
            supabaseClient={appSupabaseClient}
            view="sign_up"
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </div>
      ) : (
        <>
          <div className="my-5">
            <Link to="/tsoai" style={{ color: "blue" }} className="text-2xl">
              <Button>Redirect to the TSOAI course</Button>
            </Link>
          </div>
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
