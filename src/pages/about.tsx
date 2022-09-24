import Image from "next/future/image";
import sx from "../styles/About.module.css";

const About = () => {
  return (
    <div className={`${sx.container} container`}>
      <div className={sx.content}>
        <div className={sx.imgwrapper}>
          <Image
            src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/about.jpeg"
            alt="About page image 1"
            // height={1009}
            // width={758}
            // height={410}
            // width={308}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            // sizes="(max-width: 768px) 100vw"
            fill
            priority
          />
        </div>

        <p className={sx.text}>
          Ariel was born and raised in the Bay Area — San Francisco, CA, before
          moving to Las Vegas. His journey as a barber began 2019. Today, he
          attends the Original Barber School while continuing to offer his
          services outside of program hours. When Ariel is not snipping hair and
          shaping fades, he enjoys playing basketball, collecting sneakers, and
          spending time with his wife, Lea. He
          {`'`}s excited for what lies ahead and is eager to chop it up with old
          and new faces. Come for his cuts, but stay for his stories.
        </p>
      </div>
    </div>
  );
};

export default About;
