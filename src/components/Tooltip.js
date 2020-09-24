import React, { useState } from "react";

import "./Tooltip.css";

const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  const toggleTooltip = () => {
    setActive(!active)
  }
  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {props.content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;