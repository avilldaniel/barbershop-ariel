import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import sx from "../styles/Home.module.css";
import { useMyStore } from "../utils/zustand-store";

const Home: NextPage = () => {
  const burger = useMyStore((state) => state.burger);

  return (
    <div className={sx["home-container"]}>
      {/* <h1>*Company name*</h1> */}
      {burger && (
        <header className={sx["home-title"]}>COMPANY {`<name>`}</header>
      )}

      <div className={sx["home-content"]}>
        <section className="font-myHeading text-2xl">
          <Link href="/book">BOOK NOW</Link>
        </section>
        <Image
          src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home.jpg"
          alt="Home page image 1"
          height={1009}
          width={672}
        />
        <section>
          <h4>Services</h4>
          <ul>
            <li>Gentleman{`'`}s Cut</li>
            <li>Child{`'`}s Cut</li>
            <li>Back n{`'`} Sides</li>
            <li>Hair n{`'`} Beard</li>
          </ul>
        </section>

        {/* Keep? */}
        <Image
          src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home2.jpg"
          alt="Home page image 1"
          height={1009}
          width={672}
        />
        <section>About me</section>
      </div>
    </div>
  );
};

export default Home;
