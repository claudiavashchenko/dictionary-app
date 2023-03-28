import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);

    }
    function handleImagesResponse(response) {
        setPhotos(response.data.photos);
      }

    function search(){
        let apiKey = "6734baf8b2off87a45fcbec75c30t717";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
        axios.get(imagesApiUrl).then(handleImagesResponse);
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
            <Photos photos={photos} />
        </div>
    )
    } else {
        load();
        return "Loading...";
    }
}