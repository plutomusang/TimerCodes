import{useState, useEffect, useCallback} from 'react';

function useEffectFetch(){
    const [numbers, setNumbers] = useState([]);
    useEffect(() =>{
        fetch("/numbers.json") 
            .then( (resp) => resp.json() )
            .then( (data) => {
                setNumbers(data);
            });
    }, []);

    // const addone = useCallback(() => {
    //     setNumbers([...numbers, numbers.length + 1]);
    // },[numbers]);

    return (
        <div>
            <div> Numbers: {JSON.stringify(numbers)}</div>
            {/* <button onClick={addone}>Add One</button> */}
        </div>

    )
}

export default useEffectFetch();

