import Link from "next/link";
import { useState } from "react";
import { Burger } from "@mantine/core";

const NavBar = () => {
  const [burger, setBurger] = useState(true);

  return (
    <div className=".container">
      {/* Navbar */}
      <nav>
        <Burger opened={!burger} onClick={() => setBurger(!burger)} />
        <mark>Logo</mark>
        <mark>Insta</mark>
      </nav>

      {/* Opened navigation */}
      {!burger && (
        <main>
          <Link href={"/"}>Home</Link>
          <Link href={"/book"}>Book Now</Link>
          <Link href={"/gallery"}>Gallery</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </main>
      )}
    </div>
  );
};

export default NavBar;
