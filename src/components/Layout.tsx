import Meta from "./Meta";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
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
