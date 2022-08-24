import sx from "../styles/NavBar.module.css";
import Link from "next/link";
import { Burger, ActionIcon } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons";
import { useMyStore } from "../utils/zustand-store";
import temp_logo from "../../public/temp_logo.svg";
import Image from "next/image";

const NavBar = ({}) => {
  const burger = useMyStore((state) => state.burger);
  const setBurger = useMyStore((state) => state.setBurger);

  return (
    // Container
    // <div className={`${!burger && "h-screen"}  `}>
    <div style={{ height: burger ? "0%" : "100vh" }}>
      {/* Nav */}
      {/* <section className="mx-auto p-6 w-full max-w-6xl"> */}
      <nav className={sx.nav}>
        {/* <nav className=" flex items-center justify-between h-14"> */}
        <section className={sx["nav-bar"]}>
          <Burger
            color="white"
            opened={!burger}
            onClick={() => setBurger(!burger)}
            // className="hover:bg-myOrange-dark"
            className={sx["navbar-item"]}
          />

          {/* Logo */}
          <Link href="/">
            <a onClick={() => setBurger(true)}>
              <Image src={temp_logo} alt="temp logo" height={100} width={100} />
            </a>
          </Link>

          <ActionIcon size="lg" variant="subtle" className={sx["navbar-item"]}>
            <IconBrandInstagram size={32} color="white" />
          </ActionIcon>
        </section>

        {/* Opened navigation */}
        {!burger && (
          <main
            // onClick={() => setBurger(true)}
            onClick={() => setBurger(true)}
            // className="flex flex-col pt-8 text-[3rem] leading-tight text-myOrange font-myHeading w-1/2"
            className={sx["nav-menu"]}
          >
            <Link href={"/"}>
              <a className="hover:text-myOrange-light">Home</a>
            </Link>
            <Link href={"/book"}>
              <a className="hover:text-myOrange-light">Book Now</a>
            </Link>
            <Link href={"/gallery"}>
              <a className="hover:text-myOrange-light">Gallery</a>
            </Link>
            <Link href={"/about"}>
              <a className="hover:text-myOrange-light">About</a>
            </Link>
            <Link href={"/contact"}>
              <a className="hover:text-myOrange-light">Contact</a>
            </Link>
          </main>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
// const NavBar = ({ burger, setBurger }: INavBar) => {
//   return (
//     // Container
//     <div className={`${!burger && "h-screen"}  `}>
//       {/* Navbar */}
//       <section className="mx-auto p-6 w-full max-w-6xl">
//         <nav className=" flex items-center justify-between h-14">
//           <Burger
//             color="white"
//             opened={!burger}
//             onClick={() => setBurger(!burger)}
//             className="hover:bg-myOrange-dark"
//           />
//           <p>LOGO</p>
//           <ActionIcon size="lg" variant="filled">
//             <IconBrandInstagram size={32} />
//           </ActionIcon>
//         </nav>

//         {/* Opened navigation */}
//         {!burger && (
//           <main
//             onClick={() => setBurger(true)}
//             className="flex flex-col pt-8 text-[3rem] leading-tight text-myOrange font-myHeading w-1/2"
//           >
//             <Link href={"/"}>
//               <a className="hover:text-myOrange-light">Home</a>
//             </Link>
//             <Link href={"/book"}>
//               <a className="hover:text-myOrange-light">Book Now</a>
//             </Link>
//             <Link href={"/gallery"}>
//               <a className="hover:text-myOrange-light">Gallery</a>
//             </Link>
//             <Link href={"/about"}>
//               <a className="hover:text-myOrange-light">About</a>
//             </Link>
//             <Link href={"/contact"}>
//               <a className="hover:text-myOrange-light">Contact</a>
//             </Link>
//           </main>
//         )}
//       </section>
//     </div>
//   );
// };

// export default NavBar;
