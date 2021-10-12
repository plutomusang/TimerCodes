import UserContext, {UserState} from './store';
import { useState, useContext }  from "react";

function ConsumerComponent(){
    const user = useContext(UserContext);
    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}
function UseContextComponent(){
    
    const[user, userSet] = useState<UserState>({
        first:"Jane",
        last:"Smith"
    });
    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
        </UserContext.Provider>
    )
};

export default UseContextComponent;
