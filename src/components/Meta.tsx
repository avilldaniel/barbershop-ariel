import Head from "next/head";

interface IMeta {
  keywords: string;
  description: string;
  title: string;
}

const Meta = ({ keywords, description, title }: IMeta) => {
  return (
    <Head>
      {/* This tag ensures that <Select /> does not zoom in on mobile */}
      {/* From Pullup */}
      {/* <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      /> */}

      {/* For mobile compatibility */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}

      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <link rel="icon" href="/favicon-256.png" />
    </Head>
  );
};

Meta.defaultProps = {
  keywords: "haircut, barber, fade, hair, hairstyle, clipper, shave",
  description: "Let Ariel serve your next haircut!",
  title: "Blurry",
};

export default Meta;

// import Head from "next/head";

// export interface IMetaProps {
//   keywords: string;
//   description: string;
//   title: string;
// }

// const Meta = ({ keywords, description, title }: IMetaProps) => {
//   return (
//     <Head>
//       {/* This tag ensures that <Select /> does not zoom in on mobile */}
//       <meta
//         name="viewport"
//         content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
//       />

//       {/* For mobile compatibility? */}
//       <meta name="apple-mobile-web-app-capable" content="yes" />
//       <meta name="mobile-web-app-capable" content="yes" />
//       {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
//       <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
//       <meta name="keywords" content={keywords} />
//       <meta name="description" content={description} />
//       <title>{title}</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//   );
// };

// Meta.defaultProps = {
//   keywords: "Exercise, Fitness, Gym, Health",
//   description: "Health is wealth.",
//   title: "Some app, ya",
//   // title: "PulluP Fitness",
// };

// export default Meta;
