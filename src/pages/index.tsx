import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className=".container">
      <h1>Home</h1>

      <div className=".content">
        <section>
          <Link href="/book">Book Now</Link>
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
      </div>
    </div>
  );
};

export default Home;
