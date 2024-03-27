import React, { useState, useEffect } from "react";

const ImageRotator = () => {
  const [index, setIndex] = useState(0);
  const imageUrls = [
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286682511-rgp96r",
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706291833080-0loo09",
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286990341-tznh4",
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288734207-4rlz3m",
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288708710-nrq74s",
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287104739-pm8en",
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286913147-nwiky8",
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286058630-v3ax0a",
    "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286273084-romle",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [imageUrls.length]); 

  const imageContainerStyle = {
    position: "relative",
    width: "10%", 
    filter: "grayscale(100%)",
    padding:"1rem 0",
  };
  const imageStyle={
  height:"20rem",
  width:"20rem",
  padding:"0 1rem"

}
  return (
    <div style={imageContainerStyle}>
      <img src={imageUrls[index]} alt="Your Alt Text" style={imageStyle}/>
    </div>
  );
};

export default ImageRotator;
