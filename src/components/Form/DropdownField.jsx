import {forwardRef} from "react";

const a = {
    male:"Male",
    female: "Female",
    other:"Öther"
}

const b = [
    {
        value: "male",
        label: "Male"
    },
    {
        value: "female",
        label: "Female"
    },
    {
        value: "other",
        label: "Other"
    },
]

const DropdownField = forwardRef(({name,options, placeholder, label, handleOnChange, className, required, ...selectProps}, ref) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select ref={ref} id={name} name={name} onChange={handleOnChange}
                    className={`
                        block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                ${className}
                    `}
                    required ={required}
                    {...selectProps}>
                <option value="">{placeholder}</option>
                {Object.entries(options).map(([value, label], index) => (
                    <option key={index} value={value}>{label}</option>
                ))}
            </select>
        </div>
    );
})
DropdownField.displayName = "DropdownField"

export default DropdownField;