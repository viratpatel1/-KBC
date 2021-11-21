import React, { useRef } from 'react'

export default function Start({ setUserName })
{
    const inputRef = useRef();
    const handleClick = () =>
    {
        inputRef.current.value && setUserName(inputRef.current.value);
    }
    return (
        <div className="start">
            <form onSubmit={handleClick}>
                <input placeholder="Enter your name" className="startInput" ref={inputRef} />
                <buttom className="startbtn" onClick={handleClick} >Start</buttom>
            </form>
        </div>
    )
}
