import Image from "next/future/image";
import sx from "../styles/Gallery.module.css";

const Gallery = () => {
  // Manually add gallery images
  const images = [
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g1.png",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g2.png",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g3.png",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g4.png",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g5.png",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g6.png",
  ];

  return (
    <div className={`${sx.container} container`}>
      <h1>Gallery</h1>
      <div className={sx.content}>
        {/* On mobile, use 2 columns */}
        {images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`Gallery image ${i}`}
            width={170}
            height={170}
            // width={250}
            // height={250}
            // sizes="100vh"
            // sizes="(max-width: 768px) 100vw,
            //   (max-width: 1200px) 50vw,
            //   33vw"
            // fill
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
