import React from 'react';

function Gallery() {
  const images = [
    "/images/camping1.jpg",
    "/images/hiking1.jpg",
    "/images/fishing1.jpg"
  ];

  return (
    <div className="page">
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
