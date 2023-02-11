import React from 'react';

export default ({
                    label,
                    name,
                    className,
                    children,
                    errors = [],
                    ...props
                }) => {

    return (
        <div className={`flex flex-wrap ${className}`}>
            {label && (
                <label className='form-label mb-1' htmlFor={name}>
                    {label}:
                </label>
            )}

            <select
                id={name}
                name={name}
                {...props}
                className={`form-select w-full ${errors.length ? 'error' : ''}`}
            >
                {children}
            </select>

            {errors && <div className='form-error'>{errors}</div>}
        </div>
    );
};
