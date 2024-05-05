import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()//Eliminating form's default behavior
        props.addColor(input)//Adding the color
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm