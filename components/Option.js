import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

const Option = ({ setColorRef }) => {
  const [showColors, setShowColors] = useState(false);
  const colorRef = useRef("#395886");

  const handleClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setShowColors(false); //Gear icon 

    colorRef.current = color; // Update colorRef when button is clicked
    setColorRef(colorRef); // Pass colorRef to layout.js
  };
  useEffect(() => {
    // Update the colorRef in layout.js whenever it changes
    setColorRef(colorRef.current);
  }, [colorRef.current, setColorRef]);

  const colors = ["#333", "#6B705C", "#395886", "#006DA4", "black", "brown"];

  const optionStyles = {
    container: {
      position: "fixed",
      top: "50%",
      right: "0",
      transform: "translateY(-50%)",
    },
    gearIcon: {
      borderRadius: "1rem",
      color: "#333",
      cursor: "pointer",
      fontSize: "24px",
      padding: "10px",
      textAlign: "center",
    },
    colorButtons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      right: "4rem",
      transform: "translateY(-50%)",
      padding: "4rem 2rem",
      backgroundColor: "white",
      borderRadius: "2rem",
      maxWidth: "200rem",
      border: "1px solid #999",
    },
    colorButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      margin: "1rem",
      padding: "1rem 2rem",
      borderRadius: "2rem",
    },
    colorButtonHover: {
      color: "#000",
    },
  };
  const svgStyle = {
    height: "40px",
    width: "40px",
  };
  return (
    <div>
      <div style={optionStyles.container}>
        <div style={optionStyles.gearIcon} onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={svgStyle}>
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg>
        </div>
        {showColors && (
          <ContainerWrapper style={optionStyles.colorButtons}>
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorClick(color)}
                style={{
                  ...optionStyles.colorButton,
                  backgroundColor: color,
                  border:
                    colorRef.current === color ? "5px solid green" : "none",
                }}></button>
            ))}
          </ContainerWrapper>
        )}
      </div>
    </div>
  );
};

export default Option;
