import React from "react";

const Skill = () => {
  const skills = [
    { name: "HTML, CSS", proficiency: 90 },
    { name: "Next/React JS", proficiency: 80 },
    { name: "JavaScript", proficiency: 75 },
    { name: "MERN Stack", proficiency: 90 },
    { name: "React", proficiency: 80 },
    { name: "Java", proficiency: 75 },
    { name: "Data Structures and Algorithms", proficiency: 75 },
  ];

  return (
    <div>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <p>{skill.name}</p>
            <div
              style={{
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.06)",
                borderRadius: "5px",
                height: "20px",
                margin: "1rem",
              }}>
              <div
                style={{
                  width: `${skill.proficiency}%`,
                  backgroundColor: "#767676",
                  borderRadius: "5px",
                  height: "100%",
                }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
