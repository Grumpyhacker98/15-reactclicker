import React from 'react';

function TarrotCard(props) {

    return (
        <div class="border p-1 m-1">
            <img src={props.src} alt={props.name}/>
        </div>
    )
}

export default TarrotCard