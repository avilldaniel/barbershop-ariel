import Image from "next/image";

const About = () => {
  return (
    <div className=".container">
      <h1>About</h1>
      <div className=".content">
        <Image
          src="https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/about.jpg"
          alt="About page image 1"
          height={1009}
          width={758}
          // layout="intrinsic"
        />
        <p>
          Ariel was born and raised... His journey as a barber began 201x..
          Today, he attends _ while continuing to offer his services outside of
          program hours. When Ariel is not snipping hair and shaping fades, he
          enjoys playing basketball, _, and spending time with his wife, Lea. He
          {`'`}s excited for what lies ahead and is eager to chop it up with old
          and new faces. Come for his cuts, but stay for his stories?
        </p>
      </div>
    </div>
  );
};

export default About;
