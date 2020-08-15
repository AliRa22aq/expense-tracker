import React from 'react'

export const Transection = ({transection}) => {
    return (
        
        <li className="minus"> 
            {transection.description}
            <span> ${transection.transectionAmount} </span> 
            <button className="delete-btn">X</button>
        </li>

    )
}
