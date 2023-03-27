import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);

    }

    function search(){
        let apiKey = "6734baf8b2off87a45fcbec75c30t717";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
       
         
        
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    function load() {
        setLoaded(true);
        search();
    }

    if(loaded) {
    return(
        <div className="Dictionary">
            <section>
                <h2>What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
            </form>
            <div className="hint">Suggested: beauty, art, culture, yoga, bohemian, music...</div>
            </section>
            <Results results={results} />
        </div>
    )
    } else {
        load();
        return "Loading...";
    }
}