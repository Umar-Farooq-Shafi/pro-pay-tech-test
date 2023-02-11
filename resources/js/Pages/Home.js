import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

import Layout from '@/Shared/Layout';
import Icon from '@/Shared/Icon';
import SearchFilter from '@/Shared/SearchFilter';
import Pagination from '@/Shared/Pagination';

const Index = () => {
    const { users } = usePage().props;
    const {
        data,
        links
    } = users;

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Users</h1>

            <div className="flex items-center justify-between mb-6">
                <SearchFilter />

                <InertiaLink
                    className="btn-indigo focus:outline-none"
                    href={route('users.create')}
                >
                    <span>Create</span>
                    <span className="hidden md:inline"> User</span>
                </InertiaLink>
            </div>

            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">Name</th>
                        <th className="px-6 pt-5 pb-4">Email</th>
                        <th className="px-6 pt-5 pb-4">Surname</th>
                        <th className="px-6 pt-5 pb-4">ID #</th>
                        <th className="px-6 pt-5 pb-4">Mobile</th>
                        <th className="px-6 pt-5 pb-4">DOB</th>
                        <th className="px-6 pt-5 pb-4">Language</th>
                        <th className="px-6 pt-5 pb-4">Interests</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map(({ id, name, surname, id_number, mobile, dob, language, interests, email }) => {
                        return (
                            <tr
                                key={id}
                                className="hover:bg-gray-100 focus-within:bg-gray-100"
                            >
                                <td className="border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                    >
                                        {name}
                                    </InertiaLink>
                                </td>
                                <td className="border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                    >
                                        {email}
                                    </InertiaLink>
                                </td>
                                <td className="border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                    >
                                        {surname}
                                    </InertiaLink>
                                </td>
                                <td className="border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                    >
                                        {id_number}
                                    </InertiaLink>
                                </td>
                                <td className="border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                    >
                                        {mobile}
                                    </InertiaLink>
                                </td>
                                <td className="border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                    >
                                        {dob}
                                    </InertiaLink>
                                </td>
                                <td className="border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                    >
                                        {language}
                                    </InertiaLink>
                                </td>
                                <td className="border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                    >
                                        {interests}
                                    </InertiaLink>
                                </td>
                                <td className="w-px border-t">
                                    <InertiaLink
                                        href={route('users.edit', id)}
                                        className="flex items-center px-4 focus:outline-none"
                                    >
                                        <Icon
                                            name="cheveron-right"
                                            className="block w-6 h-6 text-gray-400 fill-current"
                                        />
                                    </InertiaLink>
                                </td>
                            </tr>
                        );
                    })}

                    {data?.length === 0 && (
                        <tr>
                            <td className="px-6 py-4 border-t" colSpan="4">
                                No users found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            <Pagination links={links} />
        </div>
    );
};

Index.layout = page => <Layout title="Users" children={page} />;

export default Index;
