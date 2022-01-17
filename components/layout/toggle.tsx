import React from "react"

type Props = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: boolean,
    labelActive?: string,
    labelInactive?: string
}

export default function ToggleComponent({handleChange, value, labelActive, labelInactive}: Props) {
    return (
        <>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" 
                    name="toggle" 
                    checked={value}
                    onChange={handleChange}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            {labelActive && value &&
                <label className="text-xs text-gray-700">{labelActive}</label>
            }
            {labelInactive && !value && 
                <label className="text-xs text-gray-700">{labelInactive}</label>
            }
        </>
    )
}