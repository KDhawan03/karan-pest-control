import React, { useEffect, useRef } from "react";
import { useMouse } from "./MouseContext";
import "./Cursor.css";

const Cursor = () => {
  const { cursorVariant } = useMouse();
  const cursorRef = useRef(null);

  const mousePosition = useRef({ x: 0, y: 0 }); // mouse position
  const cursorPosition = useRef({ x: 0, y: 0 }); // dot position

  useEffect(() => {
    const mouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", mouseMove);

    let animationFrameId;
    
    const animate = () => {
      const speed = 0.05; 

      const mouse = mousePosition.current;
      const cursor = cursorPosition.current;

      cursor.x += (mouse.x - cursor.x) * speed;
      cursor.y += (mouse.y - cursor.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  return (
    <div 
      className={`cursor ${cursorVariant}`} 
      ref={cursorRef} 
    />
  );
};

export default Cursor;