import React from "react";

import CustomButton from "../button/button.component";
import './display.style.scss';

const Display =({word, onClick}) => {
    
         console.log(word[0])
         
        const listen = ((word[0]?.phonetics[1]?.audio) ?? (word[0]?.phonetics[0]?.audio) )
        console.log(listen)
         const audio = new Audio(
            `${listen}`
          );
        
          const start = () => {
            audio.play();
          };
          
        if (word.length > 0) {
            return (
                <div className="display-result">
                    <div className="content" >
                        <h2>{word[0].word}</h2>
                        <span>{word[0].phonetic}</span>
                        <span onClick={start} className='audio'>&#128266;</span>
                        <audio>
                            audio
                            <source src="https://api.dictionaryapi.dev/media/pronunciations/en/spirit-us.mp3" type="audio/mpeg" />
                        </audio>
                        <div className="definition">{word[0].meanings[0].definitions.map(mod => (
                            <li key={mod.definition}>{mod.definition}</li>))}</div>
                    </div>
                    
                    
                    <CustomButton className="close" onClick={onClick}>close</CustomButton>
                </div>
           
            
            );
        } else {
            return (
                <div className="empty">Search A New Word</div>
            )
        }
        
        
    }



export default Display;
