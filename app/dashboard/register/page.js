'use client'
import React from 'react';
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import axios from "axios";


const Register = () => {
    const router = useRouter()


    const form = useForm();

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onClick = async (data) => {
        console.log(data)
        try {
            const res = await axios.post('/api/auth/register', data)
            console.log(res)
            res.status === 201 && router.push("/dashboard/login?success=Account has been created");

        } catch (err) {
            console.log(err);
        }
    };
    return (
        <section className='flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-[#bbbbbb]'>Create an Account</h1>
            <h2 className='text-xl mb-8 text-[#bbbbbb] '>Please sign up to see the dashboard.</h2>
            <form onSubmit={handleSubmit(onClick)} className='w-72 flex flex-col gap-5'>
                <input
                    type="text"
                    placeholder="Username"
                    {...register('name')}
                    required
                    className='p-5 bg-transparent border-2 border-solid border-[#bbbbbb] rounded outline-none text-[#bbbbbb] text-xl font-bold'
                />
                <p>{errors.username?.message}</p>
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
                    {...register('password')}
                    required
                    className='p-5 bg-transparent border-2 border-solid border-[#bbbbbb] rounded outline-none text-[#bbbbbb] text-xl font-bold'
                />
                <p>{errors.password?.message}</p>
                <button
                    className='w-72 p-5 cursor-pointer bg-[#53c28b] border-none rounded text-[#eeeeee] font-bold hover:bg-[#49b07d]'>Register
                </button>
                <p className='text-center'>Something went wrong!</p>
            </form>
            <span className='text-[#bbbbbb]'>- OR -</span>
            <Link className='underline text-[#7d7c7c] hover:opacity-60 ' href="/dashboard/login">
                Login with an existing account
            </Link>
        </section>
    );
};

export default Register;