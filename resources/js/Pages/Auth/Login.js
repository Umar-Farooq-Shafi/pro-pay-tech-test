import React from 'react';
import Helmet from 'react-helmet';

import { useForm } from '@inertiajs/inertia-react';

import Logo from '@/Shared/Logo';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import FlashMessages from "@/Shared/FlashMessages";

export default () => {
    const { data, setData, errors, post, processing } = useForm({
        email: '',
        password: '',
        remember: false
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('login'));
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
            <Helmet title="Login" />

            <div className="w-full max-w-md">
                <Logo
                    className="text-center text-5xl"
                />

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
                >
                    <div className=" px-10 py-12">
                        <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
                        <div className="w-24 mx-auto mt-6 border-b-2" />

                        <FlashMessages />

                        <TextInput
                            className="flex mt-10"
                            label="Email"
                            name="email"
                            type="email"
                            required
                            errors={errors.email}
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />

                        <TextInput
                            className="mt-6"
                            label="Password"
                            name="password"
                            required
                            type="password"
                            errors={errors.password}
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />

                        <label
                            className="flex items-center mt-6 select-none"
                            htmlFor="remember"
                        >
                            <input
                                name="remember"
                                id="remember"
                                className="mr-1"
                                type="checkbox"
                                checked={data.remember}
                                onChange={e => setData('remember', e.target.checked)}
                            />
                            <span className="text-sm">Remember Me</span>
                        </label>

                    </div>

                    <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            type="submit"
                            loading={processing}
                            className="bg-indigo-800 p-3 px-6 rounded-lg text-white hover:bg-opacity-80 "
                        >
                            Login
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};
