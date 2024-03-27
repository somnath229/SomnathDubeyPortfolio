import React from "react";
// import styled from "styled-components";
import SectionComponent from "./SectionComponent";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "90%",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    width: "70%",
  },
}));
const FormWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const MapWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%", 
  },
  [theme.breakpoints.up("lg")]: {
    width: "80%",
  },
}));

const styles = {
  label: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0",
    position: "relative",
    width: "70%",
  },
  labelText: {
    position: "absolute",
    top: "-10px",
    backgroundColor: "#fff",
    padding: "0 5px",
    borderRadius: "20%",
  },
  input: {
    padding: "1rem",
    border: "2px solid black",
    borderRadius: "1rem",
    fontSize: "1rem",
  },
};
// const Button = styled.button`
//   padding: 1rem;
//   border-radius: 1rem;
//   background-color: ${(props) => props.bgColor};
//   color: #fff;
//   cursor: pointer;
//   transition: background-color 1s ease;
//   font-size: 1rem;
//   &:hover {
//     background-color: #fff;
//     color: #333;
//   }
// `;
const Form = ({ colorRef }) => {
  const buttonStyle = {
    padding: "1rem",
    borderRadius: "1rem",
    backgroundColor: `${colorRef}`,
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 1s ease",
    fontSize: "1rem",
    // &::hover {
    //   background-color: #fff,
    //   color: #333,
    // },
  };
  const flexStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const containerStyle = {
    height: "100%",
    margin: "4rem auto",

  };

  const formContainerStyle = {
    // padding: "0 1rem",
  };

  const contactDetailsStyle = {
    // width: "50%",
    padding: "0 1rem",
  };

  const mapStyle = {
    height: "300px",
    border: "1px solid #ccc",
    marginTop: "1rem",
    borderRadius: "1rem",
  };
  const svgStyle = {
    height: "30px",
    width: "30px",
    margin: "0 1rem",
    cursor: "pointer",
  };
  const h5Style = {
    fontSize: "1rem",
    fontWeight: "700",
    letterSpacing: "1px",
    lineHeight: "1.5rem",
    color: "#767676",
    wordWrap: "break-word",
  };

  const widthStyle = {
    width: "100%",
  };
  return (
    <SectionComponent>
      <ContainerWrapper
        style={{ ...containerStyle, ...flexStyle, alignItems: "flex-start" }}>
        <FormWrapper style={{ ...formContainerStyle }}>
          <div style={{ padding: "2rem 0rem" }}>
            <h2>
              CONTACT : <br />
              <span style={h5Style}>
                Feel free to contact me if any assistance is needed in the
                future
              </span>
            </h2>
          </div>
          <div>
            <form
              style={{ width: "100%", ...flexStyle, flexDirection: "column" }}>
              <label style={styles.label}>
                <span style={styles.labelText}>Name:</span>
                <input type="text" style={styles.input} />
              </label>
              <label style={styles.label}>
                <span style={styles.labelText}>Email:</span>
                <input type="email" style={styles.input} />
              </label>
              <label style={styles.label}>
                <span style={styles.labelText}>Message:</span>
                <textarea type="message" style={styles.input} />
              </label>
              <div style={styles.label}>
                <button
                  type="submit"
                  bgColor={colorRef}
                  style={{ ...buttonStyle }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </FormWrapper>
        <ContainerWrapper style={contactDetailsStyle}>
          <div
            style={{
              ...flexStyle,
              justifyContent: "space-around",
              margin: "2rem 0",
              flexDirection: "column",
            }}>
            <div
              style={{
                ...flexStyle,
                ...widthStyle,
                justifyContent: "flex-start",
              }}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  style={svgStyle}>
                  <path
                    d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM288 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM176 400c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16z"
                    fill={colorRef || "black"}
                  />
                </svg>
              </div>
              <h5 style={{ ...h5Style }}>123 Main St, City, Country, 827013</h5>
            </div>
            <div
              style={{
                ...flexStyle,
                ...widthStyle,
                justifyContent: "flex-start",
              }}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  style={svgStyle}>
                  <path
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"
                    fill={colorRef || "black"}
                  />
                </svg>
              </div>
              <h5 style={{ ...h5Style }}> example@example.com</h5>
            </div>
            <div
              style={{
                ...flexStyle,
                ...widthStyle,
                justifyContent: "flex-start",
              }}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={svgStyle}>
                  <path
                    d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                    fill={colorRef || "black"}
                  />
                </svg>
              </div>
              <h5 style={{ ...h5Style }}> +91 1234567890</h5>
            </div>
          </div>
          <div style={{ width: "100%", ...flexStyle }}>
            <MapWrapper style={mapStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0504340543223!2d72.83467481453386!3d19.075983256196293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6300044fb57%3A0x6f68cebd34f95f08!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1648150141999!5m2!1sen!2sin"
                allowFullScreen=""
                style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
                loading="lazy"></iframe>
            </MapWrapper>
          </div>
        </ContainerWrapper>
      </ContainerWrapper>
    </SectionComponent>
  );
};

export default Form;
