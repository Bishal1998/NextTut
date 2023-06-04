'use client';
import React from 'react';
import {useForm} from "react-hook-form";
import Link from "next/link";
import {getProviders, signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const Login = () => {

    const form = useForm();
    const router = useRouter()

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onClick = (data) => {
        console.log(data)
        signIn('credentials', data)
        router.push('/dashboard')
    }

    const session = useSession();

    if (session.status === 'authenticated') {
        router.push('/dashboard')
    }

    return (
        <section className='flex items-center flex-col gap-5'>
            <h1 className='text-[#bbbbbb]'> Welcome Back</h1>
            <h2 className='text-xl mb-8 text-[#bbbbbb] '>Please sign in to see the dashboard.</h2>

            <form onSubmit={handleSubmit(onClick)} className='w-72 flex flex-col gap-5'>
                <input
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                    required
                    className='p-5 bg-transparent border-2 border-solid border-[#bbbbbb] rounded outline-none text-[#bbbbbb] text-xl font-bold'
                />
                <p>{errors.email?.message}</p>
                <input
                    type="password"
                    placeholder="Password"
                    required
                    {...register('password')}
                    className='p-5 bg-transparent border-2 border-solid border-[#bbbbbb] rounded outline-none text-[#bbbbbb] text-xl font-bold'
                />
                <p>{errors.password?.message}</p>
                <button
                    className='w-72 p-5 cursor-pointer bg-[#53c28b] border-none rounded text-[#eeeeee] font-bold hover:bg-[#49b07d]'>Login
                </button>
            </form>
            <button
                onClick={() => {
                    signIn("google");
                }}
                className='w-72 p-5 cursor-pointer bg-[#53c28b] border-none rounded text-[#eeeeee] font-bold hover:bg-[#49b07d]'
            >
                Login with Google
            </button>
            <span className='text-[#bbbbbb]'>- OR -</span>
            <Link className='underline text-[#7d7c7c] hover:opacity-60 ' href="/dashboard/register">
                Create new account
            </Link>
        </section>
    );
};

export default Login;