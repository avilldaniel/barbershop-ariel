import Image from "next/image";
import sx from "../styles/About.module.css";

const About = () => {
  return (
    <div className={sx.container}>
      <div className={sx.content}>
        <Image
          src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/about.jpg"
          alt="About page image 1"
          height={1009}
          width={758}
          // layout="intrinsic"
          priority
        />
        <p className={sx.text}>
          Ariel was born and raised... His journey as a barber began 201x..
          Today, he attends _ while continuing to offer his services outside of
          program hours. When Ariel is not snipping hair and shaping fades, he
          enjoys playing basketball, _, and spending time with his wife, Lea. He
          {`'`}s excited for what lies ahead and is eager to chop it up with old
          and new faces. <br /> [some meaningful last sentence...]
        </p>
      </div>
    </div>
  );
};

export default About;
