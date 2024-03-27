import React from "react";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: "5rem",
    padding: ".2rem",
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: "20rem",
    padding: "2rem",
  },
}));
const PaddingWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    borderRadius: "1rem",
    padding: ".2rem",
  },

  [theme.breakpoints.up("lg")]: {
    borderRadius: "2rem",
    padding: "1rem",
  },
}));
const TextWrapper = styled("h1")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: ".5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },
}));
const projects = [
  { id: 1, title: "Project 1", description: "Description for Project 1" },
  { id: 2, title: "Project 2", description: "Description for Project 2" },
  { id: 3, title: "Project 3", description: "Description for Project 3" },
  { id: 4, title: "Project 4", description: "Description for Project 1" },
  { id: 5, title: "Project 5", description: "Description for Project 2" },
  { id: 6, title: "Project 6", description: "Description for Project 3" },
  { id: 7, title: "Project 7", description: "Description for Project 1" },
  { id: 8, title: "Project 8", description: "Description for Project 2" },
  { id: 9, title: "Project 9", description: "Description for Project 3" },
];

const Card = ({ key, title, description }) => {
  //css
  const styles = {
    container: {
      height: "100%",
      borderRadius: "2rem",
      margin: "4rem 0",
    },
    cardWrapper: {
      width: "100%",
      margin: "0 auto",
      border: "2px solid black",
      overflow: "hidden",
    },
    cardImage: {
      width: "100%",
      height: "100%",
      borderRadius: "1rem",
    },
    cardContent: {
      padding: "1rem 0rem",
      borderBottom: "2px solid #7a838b",
      borderRadius: "1rem",
    },
    cardTitle: {
      fontWeight: "800",
      lineHeight: "1.3",
      letterSpacing: "0.5px",
      cursor: "pointer",
      textAlign: "center",
    },
    cardDescription: {
      letterSpacing: "0.15px",
      paddingBottom: "1rem",
      textAlign: "center",
    },
    button: {
      textTransform: "uppercase",
      fontWeight: "700",
      letterSpacing: "2px",
      color: "black",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    },
    stack: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
  const svgStyle = {
    height: "20px",
    width: "15px",
    cursor: "pointer",
  };
  //card code
  return (
    <ContainerWrapper style={styles.container}>
      <PaddingWrapper style={styles.cardWrapper}>
        <div>
          <img
            // src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k"
            src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
            style={styles.cardImage}
          />
          <div style={styles.cardContent}>
            <TextWrapper style={styles.cardTitle}>{title}</TextWrapper>
            <TextWrapper style={styles.cardDescription}>
              {description}
            </TextWrapper>
            <TextWrapper style={styles.stack}>
              <Link href={`/project/${key}`} style={styles.button}>
                Read More
              </Link>
              <div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={svgStyle}>
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </TextWrapper>
          </div>
        </div>
      </PaddingWrapper>
    </ContainerWrapper>
  );
};
//carousel code
const ProjectCarousel = () => {
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedProjects = chunkArray(projects, 3);

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}>
      {chunkedProjects.map((chunk, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {chunk.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
