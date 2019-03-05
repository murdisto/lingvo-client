import React from "react";
import "./css/progressbar.css";
export default function Progressbar(props) {
  return (
    <div className="progress-container">
      <div className="border">
        <div className={`ht${props.progress}`} />
      </div>
    </div>
  );
}
