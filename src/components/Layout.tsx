import Footer from "./Footer";
import Meta from "./Meta";
import NavBar from "./NavBar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Meta />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

// import Meta from "./Meta";

// export interface ILayoutProps {
//   children: React.ReactNode;
// }

// const Layout = ({ children }: ILayoutProps) => {
//   return (
//     <>
//       <Meta />
//       <main>{children}</main>
//     </>
//   );
// };

// export default Layout;
