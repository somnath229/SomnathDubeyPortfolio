import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const SectionComponent = ({ children }) => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 50% of the section is visible
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <animated.div ref={sectionRef} style={spring}>
      {children}
    </animated.div>
  );
};

export default SectionComponent;
