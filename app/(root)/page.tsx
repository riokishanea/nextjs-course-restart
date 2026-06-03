import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <main>
      <h2 className="h1-bold">Welcome to Nextjs 16</h2>
      <form
        className="px-5 pt-20"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">LogOut</Button>
      </form>
    </main>
  );
};

export default Home;
