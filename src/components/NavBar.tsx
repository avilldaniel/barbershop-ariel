import Link from "next/link";
import { Burger, ActionIcon } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons";
import { Dispatch, SetStateAction } from "react";

interface INavBar {
  burger: boolean;
  setBurger: Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({ burger, setBurger }: INavBar) => {
  return (
    // Container
    <div className={`bg-black ${!burger && "h-screen"}  `}>
      {/* Navbar */}
      <section className="mx-auto p-6 w-full">
        <nav className="bg-slate-500 flex items-center justify-between h-14">
          <Burger
            color="white"
            opened={!burger}
            onClick={() => setBurger(!burger)}
          />
          <p>LOGO</p>
          <ActionIcon size="lg">
            <IconBrandInstagram size={32} color="white" />
          </ActionIcon>
        </nav>

        {/* Opened navigation */}
        {!burger && (
          <main
            onClick={() => setBurger(true)}
            className="flex flex-col text-5xl pt-8"
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/book"}>Book Now</Link>
            <Link href={"/gallery"}>Gallery</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </main>
        )}
      </section>
    </div>
  );
};

export default NavBar;
