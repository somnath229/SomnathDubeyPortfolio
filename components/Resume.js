import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import { styled } from "@mui/material/styles";

const TextWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "50px",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "350px",
  },
}));

const ContainerWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "60%",
  },
}));

const Resume = ({}) => {
  const [expandedSections, setExpandedSections] = useState({
    education: true,
    experience: false,
    skills: false,
    projects: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prevSections) => ({
      ...Object.fromEntries(
        Object.entries(prevSections).map(([key]) => [key, key === section])
      ),
    }));
  };

  const flexStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    height: "100%",
  };
  const containerStyle = {
    alignItems: "flex-start",
    height: "100%",
  };
  const hStyle = {
    textAlign: "center",
    fontWeight: "700",
    borderBottom: "2px solid black",
    fontSize: "24px",
    margin:"4rem 0"
  };
  const columnStyle = {
    flexDirection: "column",
    padding: "3rem 0",
    height: "100%",
  };
  const sectionStyles = {
    position: "relative",
    borderBottom: "2px solid black",
    paddingBottom: "2rem",
    marginBottom: "2rem",
    width: "100%",
  };

  const buttonStyles = {
    position: "absolute",
    borderRadius: "100%",
    width: "50px",
    height: "50px",
    border: "none",
    backgroundColor: "#fff",
    color: "black",
    fontSize: "2rem",
    lineHeight: "1",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        ...flexStyle,
        ...columnStyle,
      }}>
      <div>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            letterSpacing: ".2rem",
          }}>
          Resume
        </h2>
      </div>
      <ContainerWrapper style={{ ...flexStyle, ...containerStyle }}>
        <div style={{ width: "100%" }}>
          <div style={{ ...sectionStyles }}>
            <h3 style={{ ...hStyle }}>Education</h3>
            {expandedSections.education && (
              <div style={{ padding: "0 1rem" }}>
                <h5>Degree: Bachelor of Science in Computer Science</h5>
                <h5>University: Example University</h5>
                <h5>Year: 2010 - 2014</h5>
                <h5>CGPA: 8.0</h5>
              </div>
            )}
            <button
              style={buttonStyles}
              onClick={() => toggleSection("education")}>
              {expandedSections.education ? "-" : "+"}
            </button>
          </div>

          <div style={sectionStyles}>
            <h3 style={hStyle}>Experience</h3>
            {expandedSections.experience && (
              <div style={{ padding: "0 1rem" }}>
                <h5>Position: React Developer</h5>
                <h5>Company: Example Company</h5>
                <h5>
                  Role: Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Tempora, mollitia.
                </h5>
              </div>
            )}
            <button
              style={buttonStyles}
              onClick={() => toggleSection("experience")}>
              {expandedSections.experience ? "-" : "+"}
            </button>
          </div>
          <div style={sectionStyles}>
            <h3 style={hStyle}>Skills</h3>
            {expandedSections.skills && (
              <div style={{ padding: "0 1rem" }}>
                <Skill />
              </div>
            )}
            <button
              style={buttonStyles}
              onClick={() => toggleSection("skills")}>
              {expandedSections.skills ? "-" : "+"}
            </button>
          </div>
        </div>
        {/* <div style={{ textAlign: "right", width: "50%" }}>
        </div> */}
      </ContainerWrapper>
      <TextWrapper
        style={{
          position: "relative",
          width: "100%",
          fontFamily: "Caveat",
          color: "rgba(0, 0, 0, 0.06)",
          fontWeight: "bold",
          lineHeight: "1px",
          textAlign: "center",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          letterSpacing: "1rem",
        }}>
        <span>Somnath</span>
      </TextWrapper>
    </div>
  );
};

export default Resume;
