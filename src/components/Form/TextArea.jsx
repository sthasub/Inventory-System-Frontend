import {forwardRef} from "react";

const TextArea = forwardRef(({name, label, readOnly,error, ...props}, ref) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <textarea ref={ref} id={name} name={name}
                          readOnly={readOnly}
                          className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                ${readOnly ? 'bg-gray-200 focus:ring-transparent focus:outline-0 border-2' : ''}`}
                    {...props}/>
            </div>
            {error && (
                <p className="text-red-500 text-sm">
                    {error}
                </p>
            )}
        </div>
    );
})

TextArea.displayName = "TextArea"

export default TextArea;