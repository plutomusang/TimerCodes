import { useState, useEffect} from 'react';

function UseEffectComponent () {
    const [val, Valset] = useState(1);
    useEffect(() => {
        const timer = window.setInterval(() =>{
            Valset(v => v + 1);
        }, 1000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <div>{val}</div>
    )

}

export default UseEffectComponent;