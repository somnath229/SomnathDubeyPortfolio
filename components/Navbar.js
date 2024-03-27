import React, { useState, useEffect } from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const ContainerWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    position: "absolute",
    marginTop: "24rem",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
const NavWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    background: "white",
    width: "100%",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {},
}));

const Navbar = React.forwardRef(({ colorRef }, ref) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
    setIsNavOpen(false); // Close the navbar after clicking on a link
  };

  const navbarStyle = {
    background: isScrolled || isNavOpen ? "#fff9" : "transparent",
    color: "#767676",
    padding: "1rem 0",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    transition: "background-color 0.3s, color 0.3s",
  };

  const navbarContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0 2rem",
  };

  const logoStyle = {
    textDecoration: "none",
    fontSize: "2.5rem",
    width: "50%",
    color: `${colorRef}`,
    textTransform: "uppercase",
    letterSpacing: "5px",
    fontWeight: "1000",
  };

  const navLinksStyle = {
    display: isNavOpen ? "flex" : "none",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    fontSize: "1rem",
    lineHeight: "2rem",
    wordWrap: "break-word",
  };

  const linkStyle = {
    padding: ".2rem 1rem",
    fontWeight: "700",
  };

  const hamburgerStyle = {
    display: "block",
    position: "relative",
    flexDirection: "column",
    cursor: "pointer",
    marginLeft: "2rem",
  };

  const lineStyle = {
    width: "30px",
    height: "3px",
    backgroundColor: `${colorRef}`,
    marginBottom: "5px",
    transition: "all 0.3s ease",
  };

  const openLineStyle1 = {
    transform: isNavOpen ? "rotate(-45deg) translate(-5px, 6px)" : "rotate(0)",
    opacity: !isNavOpen ? "0" : "1",
  };

  const openLineStyle2 = {
    opacity: isNavOpen ? "0" : "1",
  };

  const openLineStyle3 = {
    transform: isNavOpen ? "rotate(45deg) translate(-5px, -6px)" : "rotate(0)",
  };

  return (
    <nav style={navbarStyle} ref={ref}>
      <div style={navbarContainerStyle}>
        <div style={logoStyle}>
          <Link href="/" style={logoStyle}>
            SD
          </Link>
        </div>
        <ContainerWrapper style={navLinksStyle}>
          <NavWrapper style={linkStyle}>
            <Link href="/" style={{ textDecoration: "none", color: "#767676" }}>
              Home
            </Link>
          </NavWrapper>
          <NavWrapper style={linkStyle}>
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "#767676" }}>
              About
            </Link>
          </NavWrapper>
          <NavWrapper style={linkStyle}>
            <Link
              href="/resume"
              style={{ textDecoration: "none", color: "#767676" }}>
              Resume
            </Link>
          </NavWrapper>
          <NavWrapper style={linkStyle}>
            <Link
              href="/projects"
              style={{ textDecoration: "none", color: "#767676" }}>
              Projects
            </Link>
          </NavWrapper>
          <NavWrapper style={linkStyle}>
            <Link
              href="/contact"
              style={{ textDecoration: "none", color: "#767676" }}>
              Contact
            </Link>
          </NavWrapper>
        </ContainerWrapper>
        <div style={hamburgerStyle} onClick={toggleNav}>
          <div style={{ ...lineStyle, ...openLineStyle1 }}></div>
          <div style={{ ...lineStyle, ...openLineStyle2 }}></div>
          <div style={{ ...lineStyle, ...openLineStyle3 }}></div>
        </div>
      </div>
    </nav>
  );
});
Navbar.displayName = "Navbar";
export default Navbar;
