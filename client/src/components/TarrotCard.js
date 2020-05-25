import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';

import { useSpring, animated as a } from 'react-spring'

import placeholder from '../img/placeholder.png'

function TarrotCard(props) {

    // const [flipped, set] = useState(false)
    // const { transform, opacity } = useSpring({
    //     opacity: flipped ? 1 : 0,
    //     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    //     config: { mass: 5, tension: 500, friction: 80 }
    // })

    const [flip, setState] = useState(0)

    return (
        // <div onClick={() => set(state => !state)} className="tarrot">
        //     <a.div class="front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        //         <img
        //             src={props.src}
        //             alt={props.name}
        //             className="front"
        //         />
        //     </a.div>
        //     <a.div class="back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
        //         <img
        //             src={placeholder}
        //             alt={props.name}
        //             className="back"
        //         />
        //     </a.div>
        // </div>
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
            <div onClick={() => setState(true)}>
                <img src={props.src} alt={props.name} />
            </div>

            <div onClick={() => setState(false)}>
                <img src={placeholder} alt={props.name}/>
            </div>
        </ReactCardFlip>
    )
}

export default TarrotCard