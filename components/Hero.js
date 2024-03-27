import TextRotator from "./TextRotator";
import ImageRotator from "./ImageRotator";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: "100%",
    flexDirection: "column",
    padding: "2rem 0",
  },
  [theme.breakpoints.up("md")]: {
    height: "100%",
    flexDirection: "column",
  },
  [theme.breakpoints.up("lg")]: {
    height: "100vh",
    flexDirection: "row",
  },
}));
const TextWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const WordWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
    lineHeight: "1.5",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "5rem",
  },
}));

const Hero = ({ navbarHeight }) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: `${navbarHeight}px`,
    width: "100%",
    
  };

  const imageContainerStyle = {
    position: "relative",
    textWrap: "wrap",
    overflow: "hidden",
  };

  const textContainerStyle = {
    position: "relative",
    width: "100%",
    textAlign: "center",
  };
  const textStyle = {
    fontWeight: "1000",
    position: "relative",
    zIndex: "5",
    mixBlendMode: "screen",
    backgroundColor: "white",
    boxSizing: "border-box",
    margin: "0",
    letterSpacing: "6px",
  };
  const videoStyle = {
    height: "100%",
    left: "0",
    objectFit: "cover",
    objectPosition: "center",
    position: "absolute",
    top: "0",
    width: "100%",
    overflow: "hidden",
    verticalAlign: "baseline",
    background: "transparent",
  };

  return (
    <ContainerWrapper style={{ ...containerStyle }}>
      <TextWrapper style={imageContainerStyle}>
        <div style={{ padding: "0 0rem", ...textContainerStyle }}>
          <h1>
            <span
              style={{
                fontSize: "1.2rem",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}>
              hello, my name is
            </span>
            <span
              style={{
                fontFamily: "Caveat",
                fontSize: "3rem",
                padding: "0 1rem",
              }}>
              Somnath dubey,
            </span>
          </h1>
        </div>
        <div style={textContainerStyle}>
          <video playsInline autoPlay loop style={videoStyle}>
            <source
              src="https://main--prismatic-druid-13f35f.netlify.app/video/1.mp4"
              type="video/mp4"
            />
          </video>
          <WordWrapper style={textStyle}>
            Software Engineer &<br /> <TextRotator />
          </WordWrapper>
        </div>
      </TextWrapper>
      <div>
        <ImageRotator />
      </div>
    </ContainerWrapper>
  );
};

export default Hero;
