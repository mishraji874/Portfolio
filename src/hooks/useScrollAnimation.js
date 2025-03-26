import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("scroll-trigger");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * threshold && elementBottom > 0) {
          controls.start("animate");
        } else {
          controls.start("initial");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, threshold]);

  return controls;
};

export const useParallax = (speed = 0.5) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((element) => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        element.style.transform = `translate3d(0, ${rate}px, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
};

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    handleMouseMove({ clientX: 0, clientY: 0 }); // Initial position

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
};
