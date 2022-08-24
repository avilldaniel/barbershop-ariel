import Footer from "./Footer";
import Meta from "./Meta";
import NavBar from "./NavBar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <main>
      <Meta />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
