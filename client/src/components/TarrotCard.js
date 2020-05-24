import React, { useState } from 'react';
import placeholder from '../img/placeholder.png'

function TarrotCard(props) {

    const [state, setState] = useState(0)

    return (
        <img
            onClick={() => setState(!state)}
            src={state ? props.src : placeholder}
            alt={props.name}
            className="tarot m-1"
        />
    )
}

export default TarrotCard