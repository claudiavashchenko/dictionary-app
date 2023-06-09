import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <p>
            <h3>{props.meaning.partOfSpeech}</h3>
            <strong>Definition: </strong>
            {props.meaning.definition}
            <br />
            <strong>Example: </strong>
            <em>{props.meaning.example}</em>
            <Synonyms synonyms={props.meaning.synonyms} />
            </p>
        </div>
    )
}