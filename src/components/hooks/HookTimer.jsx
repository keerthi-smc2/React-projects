import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [Timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
         intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        },1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    },[]);
  return (
    <div>
        HookTimer - {Timer}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook</button>
    </div>
  )
}

export default HookTimer