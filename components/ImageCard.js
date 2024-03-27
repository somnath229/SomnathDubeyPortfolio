import React, { useState } from "react";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "250px",
      height: "250px",
  },
  
  [theme.breakpoints.up("lg")]: {
    width: "400px",
    height: "400px",
  },
}));

const ImageCard = ({ imageUrl, textH, textP }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    card: {
      position: "relative",
      overflow: "hidden",
      border: "2px solid black",
      borderRadius: "1rem",
      visibility: "visible",
      cursor: "pointer",
    },
    image: {
      width: "100%",
      height: "100%",
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      transition: "filter 0.5s ease, background-size 2s ease",
    },
    blur: {
      filter: "blur(5px)",
      backgroundSize: "200%",
      transition: "background-size 2s ease-out",
    },
    overlay: {
      position: "absolute",
      overflow: "hidden",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      color: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      transition: "opacity 1s ease",
      aspectRatio: "1",
      padding: "0 1rem",
      background: "#fff9",
    },
  };

  return (
    <ContainerWrapper
      style={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        style={{
          ...styles.image,
          ...(isHovered && styles.blur),
        }}
      />
      {isHovered && (
        <div style={styles.overlay}>
          <h1
            style={{ fontSize: "24px", fontWeight: "900", lineHeight: "1.3" }}>
            {textH}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "400",
              lineHeight: "1.7",
              whiteSpace: "normal",
              paddingRight: "2rem",
              wordWrap: "break-word",
            }}>
            {textP}
          </p>
        </div>
      )}
    </ContainerWrapper>
  );
};

export default ImageCard;
