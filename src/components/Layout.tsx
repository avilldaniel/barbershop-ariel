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
    <>
      <Meta />
      <NavBar burger={burger} setBurger={setBurger} />
      <main className={`${burger ? "block" : "hidden"}`}>{children}</main>
      <section className={`${burger ? "block" : "hidden"}`}>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
