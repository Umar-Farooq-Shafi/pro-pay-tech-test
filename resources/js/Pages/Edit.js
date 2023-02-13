import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import Layout from '@/Shared/Layout';
import DeleteButton from '@/Shared/DeleteButton';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';

import { colourOptions } from '../utils/options';

const animatedComponents = makeAnimated();

const Edit = () => {
    const { user: { data: user } } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: user.name || '',
        surname: user.surname || '',
        id_number: user.id_number || '',
        mobile: user.mobile || '',
        email: user.email || '',
        dob: user.dob || '',
        language: user.language || 'english',
        interests: user.interests || [],
        password: user.password || '',

        // NOTE: When working with Laravel PUT/PATCH requests and FormData
        // you SHOULD send POST request and fake the PUT request like this.
        _method: 'PUT'
    });

    function handleSubmit(e) {
        e.preventDefault();

        // NOTE: We are using POST method here, not PUT/PACH.
        post(route('users.update', user.id));
    }

    function destroy() {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(route('users.destroy', user.id));
        }
    }

    return (
        <div>
            <Helmet title={`${data.name} ${data.surname}`} />

            <div className='flex justify-start max-w-lg mb-8'>
                <h1 className='text-3xl font-bold'>
                    <InertiaLink
                        href={route('users')}
                        className='text-indigo-600 hover:text-indigo-700'
                    >
                        Users
                    </InertiaLink>

                    <span className='mx-2 font-medium text-indigo-600'>/</span>

                    {data.name} {data.surname}
                </h1>
            </div>

            <div className='max-w-3xl overflow-hidden bg-white rounded shadow'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-wrap p-8 -mb-8 -mr-6'>
                        <TextInput
                            className='w-full pb-8 pr-6 lg:w-1/2'
                            label='Name'
                            type={'text'}
                            name='name'
                            errors={errors.name}
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            required
                        />

                        <TextInput
                            className='w-full pb-8 pr-6 lg:w-1/2'
                            label='Surname'
                            type={'text'}
                            name='surname'
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
                            className='w-full pb-8 pr-6 lg:w-1/2'
                            label='Email'
                            name='email'
                            type='email'
                            errors={errors.email}
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            required
                        />

                        <SelectInput
                            className='w-full pb-8 pr-6 lg:w-1/2'
                            label='Language'
                            name='language'
                            errors={errors.language}
                            value={data.language}
                            onChange={e => setData('language', e.target.value)}
                            required
                        >
                            <option value='english' selected={data.language === 'english'}>English</option>
                            <option value='spanish' selected={data.language === 'spanish'}>Spanish</option>
                        </SelectInput>

                        <TextInput
                            className='w-full pb-8 pr-6 lg:w-1/2'
                            label='Password'
                            name='password'
                            type='password'
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
                                value={data.interests}
                            />
                        </div>

                    </div>
                    <div className='flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200'>
                        <DeleteButton onDelete={destroy}>Delete User</DeleteButton>
                        <LoadingButton
                            loading={processing}
                            type='submit'
                            className='ml-auto btn-indigo'
                        >
                            Update User
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = page => <Layout children={page} />;

export default Edit;
