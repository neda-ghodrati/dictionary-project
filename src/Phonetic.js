import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        Say it
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
