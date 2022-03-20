import React, {useEffect, useState} from 'react';

const UnmountText = () =>{
    useEffect(()=>{
        console.log("Mount!");
        
        return () => {
            console.log("Unmount!");
        }
    },[])

    return <div>Unmount Testing Component</div>
}

export default function LifeCycle() {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return <div style={{padding: 20}}>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountText/>}
    </div>
}