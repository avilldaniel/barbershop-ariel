import { IconScissors } from "@tabler/icons";
import type { NextPage } from "next";
import Image from "next/future/image";
import Link from "next/link";
import sx from "../styles/Home.module.css";

<>
  <Image
    src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home.jpg"
    alt="Home page image 1"
    height={1009}
    width={672}
    priority
  />
  <Image
    src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home2.jpg"
    alt="Home page image 2"
    height={1009}
    width={672}
  />
  <Image
    src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home3.jpeg"
    alt="View bio image"
    height={1009}
    width={759}
    // layout="responsive"
    style={{ borderRadius: "15px 50px 15px 50px" }}
  />
</>;

const Home: NextPage = () => {
  return (
    <div className={`${sx.container} container`}>
      <div className={sx.lasvegas}>
        <Image
          src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home2.jpg"
          alt="Home page image 2"
          priority
          sizes="100vw"
          fill
          className={`${sx["img-shadow"]} ${sx.layerone}`}
        />
        <header className={`${sx.brand} ${sx.layertwo}`}>OnGuard Cuts</header>
      </div>

      <section className={sx.orange}>
        <IconScissors className={sx.scissors} />
        <Link href="/book">BOOK NOW</Link>
      </section>

      <section className={sx.bay}>
        <Image
          src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home3.jpeg"
          alt="View bio image"
          sizes="100vw"
          fill
          className={`${sx["img-shadow"]} ${sx.layerone}`}
        />
        <p className={`${sx.layertwo} ${sx.bio}`}>
          <Link href="/about">VIEW BIO</Link>
        </p>
      </section>
    </div>
  );
};

export default Home;
