import React from 'react' //step 1

export default function ImageStatic(props) {
    return (
        <img src={ props.src } alt={ props.alt } 
        referrerPolicy="strict-origin"/>
    )
}