import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

const WordWrapper = styled("h1")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
    lineHeight: "1.5",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "5rem",
  },
}));
const TextRotator = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const textOptions = [
    " Developer",
    " Designer",
    " Coder",
  ];
  const typingSpeed = 400;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timer;
    let charIndex = 0;

    const typeNextCharacter = () => {
      if (charIndex < textOptions[index].length - 1) {
        setDisplayedText(
          (prevText) => prevText + textOptions[index][charIndex]
        );
        charIndex++;
        timer = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        clearTimeout(timer);
        setTimeout(() => {
          setDisplayedText("");
          setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        }, delayBetweenWords);
      }
    };

    typeNextCharacter();

    return () => clearTimeout(timer);
  }, [index]);

  const textStyle = {
    fontWeight: "900",
    lineHeight: "1.3",
    color: "black",
    margin: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  return (
    <div>
      <WordWrapper style={textStyle}>{displayedText}</WordWrapper>
    </div>
  );
};

export default TextRotator;
