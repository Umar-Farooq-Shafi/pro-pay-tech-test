import React, { useState, useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { usePrevious } from 'react-use';

import pickBy from 'lodash/pickBy';

import SelectInput from '@/Shared/SelectInput';

export default () => {
    const { filters } = usePage().props;
    const [opened, setOpened] = useState(false);

    const [values, setValues] = useState({
        search: filters.search || '',
        trashed: filters.trashed || ''
    });

    const prevValues = usePrevious(values);

    function reset() {
        setValues({
            search: '',
        });
    }

    useEffect(() => {
        // https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : { remember: 'forget' };
            Inertia.get(route(route().current()), query, {
                replace: true,
                preserveState: true
            });
        }
    }, [values]);

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));

        if (opened) setOpened(false);
    }

    return (
        <div className="flex items-center w-full max-w-md mr-4">
            <div className="relative flex w-full bg-white rounded shadow">

                <button
                    onClick={() => setOpened(true)}
                    className="px-4 border-r rounded-l md:px-6 hover:bg-gray-100 focus:outline-none focus:border-white focus:ring-2 focus:ring-indigo-400 focus:z-10"
                >
                    <div className="flex items-baseline">
                        <span className="hidden text-gray-700 md:inline">Filter</span>
                        <svg
                            className="w-2 h-2 text-gray-700 fill-current md:ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 961.243 599.998"
                        >
                            <path d="M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" />
                        </svg>
                    </div>
                </button>
                <input
                    className="relative w-full px-6 py-3 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    autoComplete="off"
                    type="text"
                    name="search"
                    name="search"
                    value={values.search}
                    onChange={handleChange}
                    placeholder="Search…"
                />
            </div>
            <button
                onClick={reset}
                className="ml-3 text-sm text-gray-600 hover:text-gray-700 focus:text-indigo-700 focus:outline-none"
                type="button"
            >
                Reset
            </button>
        </div>
    );
};
