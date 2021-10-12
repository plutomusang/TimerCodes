import {useState} from 'react'

const initialState={
    first:"jack",
    last: "Haertkoon"
}
type UserState = typeof initialState;

function useLocalStorage (key:number, initialvalue: UserState) {
    const [value, setValue] = useState<UserState>(initialvalue);

    return [value, setValue];
}

export default useLocalStorage;