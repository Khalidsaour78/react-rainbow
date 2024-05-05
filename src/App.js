import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// Importing the colorblock component
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'//Importing Colorform component

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    return (
        <div className="App">
            {colors.map((color,i)=>(
              <ColorBlock key={i} color={color}/>
            ))}
            <ColorForm/>
        </div>
        
    )
}

export default App;
