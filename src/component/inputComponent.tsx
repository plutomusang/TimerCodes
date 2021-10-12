import { useState } from "react";

function inputComponent() {
    const [name, setName] = useState('');
    return (
        <input             
            type="text" 
            value ={name}
            onChange={e => setName(e.target.value) }
        />
    )
}

export default inputComponent;