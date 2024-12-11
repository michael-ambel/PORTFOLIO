"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [text, setText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = (e) => {
      if (e.target.dataset.cursorText) {
        setIsHovered(true);
        setText(e.target.dataset.cursorText);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setText("");
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 100); // Revert back after 300ms
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    const addListeners = () => {
      document.querySelectorAll("[data-cursor-text]").forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Remove listeners from all current elements
    const removeListeners = () => {
      document.querySelectorAll("[data-cursor-text]").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Observe changes in the DOM
    const observer = new MutationObserver(() => {
      removeListeners(); // Clean up old listeners
      addListeners(); // Add listeners to new elements
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      // Cleanup
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      removeListeners();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`custom-cursor fixed pointer-events-none flex items-center justify-center ${
        isClicked
          ? "w-12 h-12 bg-main rounded-full opacity-60"
          : isHovered
          ? "bg-main px-[12px] py-[6px] text-bg rounded-[10px]"
          : "bg-main w-[15px] h-[15px] rounded-full"
      }`}
      style={{
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
    >
      {isHovered && !isClicked && (
        <span className="text-[16px] font-medium">{text}</span>
      )}
    </div>
  );
};

export default CustomCursor;
