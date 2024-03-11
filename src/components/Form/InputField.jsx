const InputField = ({
                        label,
                        readOnly = false,
                        name,
                        autoComplete,
                        value = '',
                        handleOnChange,
                        required = false,
                        type,
                        error = '',
                    }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="mt-2">

                {
                    label !== "Gender" ? <input id={name} name={name} type={type} autoComplete={autoComplete}
                                                value={value} onChange={handleOnChange} required={required}
                                                readOnly={readOnly}
                                                className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                ${readOnly ? 'bg-gray-200 focus:ring-transparent focus:outline-0 border-2' : ''}`}/>
                        :
                        <select id={name} name={name} autoComplete={autoComplete}
                                value={value} onChange={handleOnChange} required={required}
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                ">
                            <option value="Prefer not to say">Prefer not to say</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                }
            </div>
            {error && (
                <p className="text-red-500 text-sm">
                    {error}
                </p>
            )}
        </div>
    );

}
export default InputField;