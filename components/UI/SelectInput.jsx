"use client"
import { useState } from "react"

function SelectInput({ className, name, options }) {
    // const [input, setInput] = inputState
    const [focused, setFocused] = useState(false)
    return (
        <>
            <div className={`pr-3 w-[calc(100%-0.75rem)] rounded-md outline-none outline-2 outline-galaxy-blue/90 duration-300 bg-transparent ${className} ${focused ? 'bg-chestnut-red/35 outline-chestnut-red' : ''}`}>

                <select className={`w-full h-[55px] bg-transparent border-none outline-none pl-4 duration-300`} name={name} id={name} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
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