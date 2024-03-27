import React from "react";
import ProjectCarousel from "./ProjectCarousel";

const Project = () => {
  const flexStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      style={{
        padding: "8rem 0",
        height: "100%",
        background: "linear-gradient(45deg, #D5DEEF, transparent)",
      }}>
      <div style={{ ...flexStyle }}>
        <h1 style={{ letterSpacing: "1px" }}>Projects</h1>
      </div>
      <div>
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Project;
