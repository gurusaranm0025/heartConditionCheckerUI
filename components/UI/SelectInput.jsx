"use client"
import { useState } from "react"

function SelectInput({ className, name, options, inputState }) {
    // const [input, setInput] = inputState
    const [focused, setFocused] = useState(false)
    return (
        <>
            <div className={`pr-4 w-full rounded-sm outline-none outline-1 outline-planetary-blue/50 duration-300 bg-transparent ${className} ${focused ? 'bg-universe-blue/35 outline-galaxy-blue' : ''}`}>

                <select className={`w-full h-[47px] bg-transparent border-none outline-none px-4 duration-300`} name={name} id={name} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
                    {
                        options.map((option, index) => {
                            return <option key={index} value={option}>
                                {option}
                            </option>
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default SelectInput