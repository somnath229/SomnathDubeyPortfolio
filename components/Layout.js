import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Project from "./Project";
import Option from "./Option";
import Form from "./Form";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [colorRef, setColorRef] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (navbarRef.current) {
        const navbarElement = navbarRef.current;
        console.log(navbarElement);
        const navbarHeight = navbarElement.getBoundingClientRect().height;
        console.log(navbarHeight);
        setNavbarHeight(navbarHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <main>
      <Navbar ref={navbarRef} colorRef={colorRef} />
      <Hero navbarHeight={navbarHeight} />
      <About id="about" />
      <Resume />
      <Project />
      <Form colorRef={colorRef} />
      <Option setColorRef={setColorRef} />
      <Footer colorRef={colorRef} />
    </main>
  );
};

export default Layout;
