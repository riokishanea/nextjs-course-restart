import { auth,} from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <main>
      <h2 className="h1-bold">Welcome to Nextjs 16</h2>
    </main>
  );
};

export default Home;
