import React, { useState } from "react";
import Draggable from "react-draggable";
import { FaAngleDoubleRight } from "react-icons/fa";

const SliderMonetary = () => {
  const [value, setValue] = useState(0);

  const handleDrag = (e, ui) => {
    const { x } = ui;
    const containerWidth = 288;
    const newValue = Math.round((x / containerWidth) * 100);
    setValue(newValue);
  };

  return (
    <div
      style={{
        width: "288px",
        height: "24px",
        position: "relative",
        touchAction: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Draggable
        axis="x"
        bounds="parent"
        position={{ x: (value * 288) / 100, y: 0 }}
        onDrag={handleDrag}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#F39200",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 1,
            cursor: "grab",
          }}
        >
          <FaAngleDoubleRight style={{ fontSize: "14px", color: "#fff" }} />
        </div>
      </Draggable>
      <div
        style={{
          width: "288px",
          height: "8px",
          background: `linear-gradient(to right, #F39200 0%, #F39200 ${value}%, #B6B7B8 ${value}%, #B6B7B8 100%)`,
          borderRadius: "5px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default SliderMonetary;
