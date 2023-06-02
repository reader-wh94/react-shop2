import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';

const ProductImage = ({ product }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      let images = [];
      product.images.map(imageName => {
        return images.push({
          original: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
          thumbnail: `${import.meta.env.VITE_SERVER_URL}/${imageName}`
        });
      });

      setImages(images);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ImageGallery items={images}/>
    </div>
  );
};

export default ProductImage;
