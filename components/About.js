import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import SectionComponent from "./SectionComponent";
import { styled } from "@mui/material/styles";

const WordWrapper = styled("h2")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    lineHeight: "1.5",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "5rem",
  },
}));

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAboutData(data.user.about);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const flexStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const containerStyle = {
    flexDirection: "column",
    background: "linear-gradient(45deg, #D5DEEF, transparent)",
    height: "100%",
    flexGrow: 1,
  };

  const rowStyle = {
    flexDirection: "row",
    padding: "2rem 0",
    flexWrap: "wrap",
  };
  const columnStyle = {
    flexDirection: "column",
    width: "80%",
    padding: "2rem 0",
  };

  const textStyle = {
    wordWrap: "break-word",
    color: "#767676",
    fontSize: "auto",
    fontWeight: "400",
    letterSpacing: ".5px",
    lineHeight: "30px",
    textAlign: "center",
  };
  const h1Style = {
    fontWeight: "800",
    color: "#333",
    fontSize: "2rem",
  };
  const boxStyle = {
    padding: "1rem",
  };

  const sections = [
    {
      title: "Web & App",
      text: "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
      imageUrl:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp",
    },
    {
      title: "App Dev",
      text: "Design direction for business. Get your business on the next level. We help to create great experiences.",
      imageUrl:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg",
    },
    {
      title: "Web & App",
      text: "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
      imageUrl:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357668346-ke8kgt.jpeg",
    },
    {
      title: "App Development",
      text: "Design direction for business. Get your business on the next level. We help to create great experiences.",
      imageUrl:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357680224-phijt.png",
    },
    {
      title: "Web & App",
      text: "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
      imageUrl:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357752227-6f5trs.jpeg",
    },
    {
      title: "App Development",
      text: "Design direction for business. Get your business on the next level. We help to create great experiences.",
      imageUrl:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp",
    },
  ];
 
  return (
    <SectionComponent> 
      <div style={{ ...containerStyle, ...flexStyle }}>
        <div style={{ ...columnStyle, ...flexStyle, ...textStyle }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div style={{ ...textStyle }}>
              <h2 style={h1Style}>About Me</h2>
              <p>{aboutData.description}</p>
            </div>
          )}
        </div>
        <div style={columnStyle}>
          <div>
            <WordWrapper
              style={{
                color: "white",
                fontWeight: "800",
                letterSpacing: "1px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}>
              What I Do :
            </WordWrapper>
          </div>
          <div style={{ ...flexStyle, ...rowStyle }}>
            {sections.map((section, index) => (
              <div key={index} style={{ ...boxStyle }}>
                <div>
                  <ImageCard
                    imageUrl={section.imageUrl}
                    textH={section.title}
                    textP={section.text}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default About;
