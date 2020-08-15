import React,{useState} from 'react'

export const AddTransection = () => {

    const [Description, setDescription] = useState();
    const [TransecrtionAmount, setTransecrtionAmount] = useState();
    return (
        <div>
            <h3> Add New Transection</h3>
            <form> 
            <div className="form-control"> 
                <labal className = "description" > 
                        Description
                </labal>
                <input 
                    type="text" 
                    id="description" 
                    placeholder="Details of the Transection" 
                    value = {Description}
                    onChange = {(e)=> setDescription(e.target.value) }  />
            </div>
            <div className="form-control">   
            <label htmlFor="transectionamount"> 
                        Transection Amount
            </label>
            <input 
                    type="number" 
                    id="transectionamount" 
                    placeholder="Enter Transection Amount" 
                    value = {TransecrtionAmount}
                    onChange = {(e)=> setTransecrtionAmount (e.target.value) }  />
            
            </div>
            <button className="btn"> 
                Add Transaction
            </button>
            </form> 
        </div>
    )
}
