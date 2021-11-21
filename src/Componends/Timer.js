import React, { useEffect, useState } from 'react'

export default function Timer({ setStop, questionNo })
{
    const [timer, setTimer] = useState(30)
    useEffect(() =>
    {
        if (timer === 0) return setStop(true);
        const interval = setInterval(() =>
        {
            setTimer((pre) => pre - 1);
        }, 1000);
        return () => clearInterval(interval)
    }, [setStop, timer])
    useEffect(() =>
    {
        setTimer(30);
    }, [questionNo]);
    return timer;
}
