import React from "react";
import { useState } from "react";

const RandomColor = () => {
  // this state is used for change the type of color
  const [TypeofColor, setTypeofColor] = useState('hex');
  const [color, setColor] = useState("#000000");

  function randomcolorutility(length) {
    return Math.floor(Math.random() * length);
  }

  function handelcreaterandomhexcolor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[randomcolorutility(hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor);
    // last me hamare pass ek string return hoga wahi hamara hex color hoga!
  }

  function handelcreaterandomrgbcolor() {
    const r = randomcolorutility(256);
    const g = randomcolorutility(256);
    const b = randomcolorutility(256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`; //template literals ke help se hm usse show kr denge!
    console.log(rgbColor);
    setColor(rgbColor);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button onClick={() => setTypeofColor("hex")}>
        Create HEX color
      </button>
      <button onClick={() => setTypeofColor("rgb")}>
        Create RGB color
      </button>
      <button
        onClick={
          TypeofColor === "hex"
            ? handelcreaterandomhexcolor
            : handelcreaterandomrgbcolor
        }
      >
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "40px",
        }}
      >
        <h3>{TypeofColor === "hex" ? "HEX Color" : "RGB Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;