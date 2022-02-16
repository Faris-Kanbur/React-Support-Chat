import React, { useState } from "react";
import { styles } from "./styles";

const Avatar = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px" }}>
      <div>Hey it's Faris</div>
      <div
        className="transition-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? " 1px solid #f9f0ff" : " 4px solid #7a39e0" },
        }}
      />
    </div>
  );
};

export default Avatar;
