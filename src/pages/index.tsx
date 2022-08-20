import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className=".container">
      <h1>Home</h1>

      <div className=".content">
        <Image
          src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/home.jpg"
          alt="Home page image 1"
          height={1009}
          width={672}
          // layout="fill"
        />
      </div>
    </div>
  );
};

export default Home;
