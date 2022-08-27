import sx from "../styles/NavBar.module.css";
import Link from "next/link";
import { IconBrandInstagram } from "@tabler/icons";
import temp_logo2 from "../../public/temp_logo2.svg";
import Image from "next/image";
import { useMyStore } from "../utils/zustand-store";

const NavBar = ({}) => {
  const burger = useMyStore((state) => state.burger);
  const setBurger = useMyStore((state) => state.setBurger);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    // Container
    <header className={sx["primary-hdr"]}>
      <button
        aria-controls={sx["primary-nav"]}
        aria-expanded={burger ? "false" : "true"}
        className={`${sx["mobile-nav-toggle"]} ${!burger && sx["nav-open"]}`}
        onClick={toggleBurger}
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
              <a onClick={toggleBurger}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/book"}>
              <a onClick={toggleBurger}>Book Now</a>
            </Link>
          </li>
          <li>
            <Link href={"/gallery"}>
              <a onClick={toggleBurger}>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a onClick={toggleBurger}>About</a>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <a onClick={toggleBurger}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <section className={sx["primary-icons"]}>
        {/* Insta */}
        <button
          className={sx["insta"]}
          onClick={() => {
            console.log("Open insta in new tab");
          }}
        >
          <IconBrandInstagram size={32} color="white" />
        </button>
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
