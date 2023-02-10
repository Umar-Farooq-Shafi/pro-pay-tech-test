import React, {useState} from 'react';

export default ({ required, label, name, className, errors = [], ...props }) => {
    const [error, setError] = useState(errors);

    return (
        <div className={`flex flex-wrap ${className}`}>
            {label && (
                <label className="form-label mb-1" htmlFor={name}>
                    {label}
                    {required ? <span className={'text-red-700'}> *</span> : ':'}
                </label>
            )}

            <input
                id={name}
                name={name}
                {...props}
                className={`form-input w-full ${error.length ? 'error' : ''}`}
                required={required}
                onBlur={(event) => {
                    if (event.target.value === '' && required) {
                        setError(label + ' is required...');
                    }
                }}
                onKeyUp={(event) => {
                    if (event.target.value !== '') {
                        setError('');
                    }
                }}
            />

            {error && <div className="text-red-500 text-xs italic mt-2">{error}</div>}
        </div>
    );
};
