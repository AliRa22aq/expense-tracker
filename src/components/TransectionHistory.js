import React from 'react'

export const TransectionHistory = () => {
    return (
        <div>
            <h3> Transection History </h3>
            <ul className="list"> 
                <li className="minus"> 
                    Project1: Income
                    <span> $1000 </span> 
                    <button className="delete-btn">X</button>
                </li>
                <li className="plus"> 
                Project1: Salaries
                <span> -$500 </span>
                <button className="delete-btn">X</button>
                </li>  
            </ul>
            
        </div>
    )
}
