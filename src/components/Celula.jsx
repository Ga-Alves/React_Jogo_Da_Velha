import React, { useState } from "react";

// style
import './Celula.css';

export default function Celula(){
    const state = [' ', 'X', 'O'];
    const [i, setI] = useState(0);

    function action(){
        setI( (i+1) % 3 );
    }
    
    return(
        <div className="Celula" onClick={action}>
            {state[i]}
        </div>
    )
}