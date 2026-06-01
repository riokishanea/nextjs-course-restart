import Navbar from "@/components/navigation/navbar";
import { ReactNode } from "react";

const Home = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <Navbar/>
      <h2>Hello world</h2>
    </main>
  );
}

export default Home;