import { IconCopyright } from "@tabler/icons";
import Image from "next/image";
import sx from "../styles/Footer.module.css";
import temp_logo2 from "../../public/temp_logo2.svg";

const Footer = () => {
  return (
    <footer className={sx["footer-container"]}>
      <main className={`flex-col-center ${sx["footer-content"]}`}>
        {/* Contact */}
        <div className={sx["footer-c"]}>
          <h1>
            CONTACT <br />
          </h1>
          Ph: (702)XXX-XXXX <br />
          Email: email@gmail.com
        </div>

        {/* Hours */}
        <div className={sx["footer-h"]}>
          <h1>
            HOURS <br />
          </h1>
          Mon-Thurs: xAM - yPM <br />
          Fri-Sat: xAM - yPM <br />
          Sun: Closed
        </div>

        {/* Logo */}
        <div className={sx["footer-logo"]}>
          <Image
            src={temp_logo2}
            alt="temp logo"
            layout="fill"
            objectFit="contain"
            className={sx["footer-img"]}
          />
        </div>
      </main>

      {/* Copyright */}
      {/* <p className={sx["footer-cr"]}> */}
      <p className={`flex-row-center ${sx["footer-cr"]}`}>
        <IconCopyright size={18} /> 2022 [Company] — Website by{" "}
        <a
          href="https://www.linkedin.com/in/daniel-villegas-aira/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecorationLine: "underline" }}
        >
          @avilldaniel
        </a>
      </p>
    </footer>
  );
};

export default Footer;
