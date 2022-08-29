import Image from "next/image";
import sx from "../styles/Gallery.module.css";

const Gallery = () => {
  // Manually add gallery images
  const images = [
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g1.jpg",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g2.jpg",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g3.jpg",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g4.jpg",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g5.jpg",
    "https://d1i3aib8o7oh3l.cloudfront.net/temp-placeholder/g6.jpg",
  ];

  return (
    <div className={sx.container}>
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
            style={{ borderRadius: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
