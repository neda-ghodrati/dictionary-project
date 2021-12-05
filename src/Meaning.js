import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div onKeyPress={index}>
            <div className="Definition">
              Definition:
              {definition.definition}
            </div>
            <div className="Example">
              Example:
              {definition.example}{" "}
            </div>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
