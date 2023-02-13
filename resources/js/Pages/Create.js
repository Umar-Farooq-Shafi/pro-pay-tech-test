import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import Layout from '@/Shared/Layout';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';

import { colourOptions } from '../utils/options';

const options = [
    { value: 'gaming', label: 'Gaming' },
    { value: 'designing', label: 'Designing' },
    { value: 'coding', label: 'Coding' }
];

const animatedComponents = makeAnimated();

const Create = () => {
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        surname: '',
        id_number: '',
        mobile: '',
        email: '',
        dob: '',
        language: 'english',
        interests: [],
        password: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('users.store'));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <InertiaLink
                        href={route('users')}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Users
                    </InertiaLink>

                    <span className="font-medium text-indigo-600"> /</span> Create
                </h1>
            </div>

            <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Name"
                            type="text"
                            name="name"
                            errors={errors.name}
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            required
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Surname"
                            type="text"
                            name="surname"
                            errors={errors.surname}
                            value={data.surname}
                            onChange={e => setData('surname', e.target.value)}
                            required
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Id Number"
                            type="text"
                            name="id_number"
                            errors={errors.id_number}
                            value={data.id_number}
                            onChange={e => setData('id_number', e.target.value)}
                            required
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Mobile"
                            type="tel"
                            name="mobile"
                            errors={errors.mobile}
                            value={data.mobile}
                            onChange={e => setData('mobile', e.target.value)}
                            required
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Date of Birth"
                            type="date"
                            name="dob"
                            errors={errors.dob}
                            value={data.dob}
                            onChange={e => setData('dob', e.target.value)}
                            required
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Email"
                            name="email"
                            type="email"
                            errors={errors.email}
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            required
                        />

                        <SelectInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Language"
                            name="language"
                            errors={errors.language}
                            value={data.language}
                            onChange={e => setData('language', e.target.value)}
                            required
                        >
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                        </SelectInput>

                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Password"
                            name="password"
                            type="password"
                            errors={errors.password}
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            required
                        />

                        <div className={'flex flex-wrap w-full pb-8 pr-6 lg:w-1/2'}>
                            <label className='form-label mb-1' htmlFor={'interests'}>
                                Interests:
                            </label>

                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={colourOptions}
                                minMenuHeight={50}
                                required
                                name={'interests'}
                                onChange={newValue => setData('interests', [...newValue])}
                                // value={data.interests}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create User
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = page => <Layout title="Create User" children={page} />;

export default Create;
