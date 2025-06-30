import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const MousePointer: React.FC = () => {
  const { mousePosition, theme } = useTheme();

  // More professional, vibrant purple for light mode, deeper/darker for dark mode
  const gradient =
    theme === "dark"
      ? "radial-gradient(circle at 40% 40%, #232042 60%, #5046e5 100%)"
      : "radial-gradient(circle at 40% 40%, #a259ff 40%, #6c47ff 100%)";

  return (
    <div
      style={{
        position: "fixed",
        left: mousePosition.x - 56,
        top: mousePosition.y - 56,
        width: 112,
        height: 112,
        borderRadius: "50%",
        pointerEvents: "none",
        background: gradient,
        filter: "blur(40px) brightness(1.1)",
        opacity: theme === "dark" ? 0.45 : 0.33,
        zIndex: 9999,
        transition: "background 0.2s, opacity 0.2s",
        boxShadow:
          theme === "dark"
            ? "0 0 48px 16px #232042cc"
            : "0 0 64px 16px #a259ff66",
        mixBlendMode: theme === "dark" ? "exclusion" : "multiply",
      }}
    />
  );
};

export default MousePointer;