import { useState } from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import NavBar from "./NavBar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const [burger, setBurger] = useState(true);
  return (
    <main className="mx-auto max-w-[100rem] p-4">
      <Meta />
      <NavBar burger={burger} setBurger={setBurger} />
      <main
        className={`${
          burger ? "block" : "hidden"
        } flex flex-col items-center pt-14`}
      >
        {children}
      </main>
      <section className={`${burger ? "block" : "hidden"}`}>
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
