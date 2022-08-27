import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import sx from "../styles/Home.module.css";
import ariel from "../../public/IMG_2006.jpeg";

const Home: NextPage = () => {
  return (
    <div className={sx["home-container"]}>
      <header className={sx["home-title"]}>COMPANY {`<name>`}</header>

      <div className={sx["home-content"]}>
        {/* Image one */}
        <div className={sx["img-wrapper"]}>
          <Image
            src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home.jpg"
            alt="Home page image 1"
            height={1009}
            width={672}
          />
        </div>
        <p className={sx["home-book"]}>
          <Link href="/book">BOOK NOW</Link>
        </p>

        {/* Image one */}
        {/* <section className={sx["combine-layer"]}>
          <div className={sx["layer-one"]}>
            <Image
              src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home.jpg"
              alt="Home page image 1"
              height={1009}
              width={672}
            />
          </div>
          <p className={sx["layer-two"]}>
            <Link href="/book">BOOK NOW</Link>
          </p>
        </section> */}

        {/* Image two */}
        <div className={sx["img-wrapper"]}>
          <Image
            src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home2.jpg"
            alt="Home page image 1"
            height={1009}
            width={672}
          />
        </div>
        <div className={sx["home-serv"]}>
          <header>SERVICES</header>
          <ul>
            <li>Gentleman{`'`}s Cut</li>
            <li>Child{`'`}s Cut</li>
            <li>Back n{`'`} Sides</li>
            <li>Hair n{`'`} Beard</li>
            <li>Hair dye</li>
          </ul>
        </div>

        <section className={sx["home-tbd"]}>
          {/* <Image src={ariel} alt="ariel aha" width={999} height={1332} /> */}
          <Image src={ariel} alt="ariel aha" width={150} height={200} />
          <h1>Ariel Yabut</h1>
          <p className={sx["home-bio"]}>
            <Link href="/about">View Bio</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
