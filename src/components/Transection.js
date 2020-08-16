import React from 'react'

export const Transection = ({transection}) => {

    const sign = transection.transectionAmount >0 ? '+':'-';
    const transectionType = transection.transectionAmount > 0 ? "plus":"minus";
    
    return (
        
        <li className={transectionType}> 
            {transection.description}
            <span> {sign}${Math.abs(transection.transectionAmount)} </span> 
            <button className="delete-btn">X</button>
        </li>

    )
}
