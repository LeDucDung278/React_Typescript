import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './components/Box'

const Showinfo = (props) =>{
    return <div>Show {props.name}</div>
}

function App () {
    const [count , setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [myStatus, setMyStatus] = useState(false);
    const [products, setProducts] = useState([{id: 1, name: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"}, {id: 4, name: "D"}])

    // remove Item
    const removeItem =(id) => {
        const newProducts = products.filter(item => item.id !== id);
        setProducts(newProducts);
    }

    return <div>
        <h2>Demo State basic</h2>
        Number: {count} <br />
        String: <Box color={color}/> <br />
        Boolean: { myStatus ? "Da ket hon" : "Chua ket hon"} <br />

        <hr/>

        <h2>Demo Event</h2>
        Number: {count} <br/>
        <button onClick={() => setCount(count+1)}>Click count</button>
        <button onClick={() => setMyStatus(!myStatus)}>Change Status</button>

        {myStatus && <div>
            Arr: {products.map(item => <div>{item.name}
            <button onClick={() => removeItem(item.id)}>Delete</button></div>)}
        </div> }
        <button onClick={() => setColor('red')}>Change Color</button>
    </div>
}

export default App
