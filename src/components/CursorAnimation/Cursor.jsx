import React, { useEffect, useRef } from "react";
import { useMouse } from "./MouseContext";
import "./Cursor.css";

const Cursor = () => {
  const { cursorVariant } = useMouse();
  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
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