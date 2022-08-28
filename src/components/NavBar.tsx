import sx from "../styles/NavBar.module.css";
import Link from "next/link";
import { IconBrandInstagram } from "@tabler/icons";
import temp_logo2 from "../../public/temp_logo2.svg";
import Image from "next/image";
import { useMyStore } from "../utils/zustand-store";

const NavBar = ({}) => {
  const burger = useMyStore((state) => state.burger);
  const setBurger = useMyStore((state) => state.setBurger);

  // const toggleBurger = () => {
  //   setBurger(!burger);
  // };

  return (
    // Container
    <header className={sx["primary-hdr"]}>
      <button
        aria-controls={sx["primary-nav"]}
        aria-expanded={burger ? "false" : "true"}
        className={`${sx["mobile-nav-toggle"]} ${!burger && sx["nav-open"]}`}
        onClick={() => setBurger(!burger)}
      >
        {/* Hamburger */}
        <span className={sx.hamburger}></span>
        {/* Invisible menu for accessibility */}
        <span style={{ display: "none" }}>Menu</span>
      </button>

      {/* Nav */}
      <nav>
        <ul
          id={sx["primary-nav"]}
          className={`${sx["primary-nav"]} ${
            !burger && sx["primary-nav-show"]
          }`}
        >
          <li>
            <Link href={"/"}>
              <a onClick={() => setBurger(true)}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/book"}>
              <a onClick={() => setBurger(true)}>Book Now</a>
            </Link>
          </li>
          <li>
            <Link href={"/gallery"}>
              <a onClick={() => setBurger(true)}>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a onClick={() => setBurger(true)}>About</a>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <a onClick={() => setBurger(true)}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <section className={sx["primary-icons"]}>
        {/* Insta */}
        <a
          href="https://www.instagram.com/ariel_onguard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram size={32} color="white" />
        </a>
        {/* Logo */}
        <Link href="/">
          <a className={""} onClick={() => setBurger(true)}>
            <Image
              src={temp_logo2}
              alt="temp logo"
              height={50}
              width={50}
              // layout="fill"
              // objectFit="contain"
            />
          </a>
        </Link>
      </section>
    </header>
  );
};

export default NavBar;
