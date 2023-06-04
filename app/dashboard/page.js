'use client'
import React from 'react';
import Image from "next/image";
import {useForm} from "react-hook-form";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import useSWR from "swr";
import axios from "axios";

export const metadata = {
    title: 'Dashboard',
    description: 'NextTut is Full Stack App',
}

const Dashboard = () => {
    const router = useRouter()
    const form = useForm();
    const session = useSession()
    console.log(session)
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const {data, mutate, error, loading} = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
    const {register, reset, handleSubmit, formState: {errors}} = useForm()

    const onClick = async (data) => {
        try {
            await axios.post('/api/posts', {
                ...data, username: session.data.user.name
            });
            reset()
            mutate()
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/posts/${id}`)
            mutate()
        } catch (e) {
            console.log(e)
        }
    }

    if (session.status === 'loading') {
        return <p>Loading....</p>
    }

    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login')
    }

    if (session.status === 'authenticated') {
        return (
            <section className='flex gap-24'>
                <div className='flex-1'>
                    {loading ? 'loading' :
                        data?.map((post) => {
                            return (
                                <div className='flex items-center justify-between my-12 mx-0'
                                     key={post._id}
                                >
                                    <div className='w-48 h-24 '>
                                        <Image src={post.img} alt="" width={200} height={100} className='object-cover'/>
                                    </div>
                                    <h2 className='text-[#bbbbbb]'>{post.title}</h2>
                                    <span
                                        className='cursor-pointer text-red-700'
                                        onClick={() => handleDelete(post._id)}
                                    >X
                  </span>
                                </div>
                            )
                        })
                    }
                </div>
                <form className='w-72 flex flex-col gap-5' onSubmit={handleSubmit(onClick)}>
                    <h1>Add New Post</h1>
                    <input type="text" placeholder="Title" {...register('title')}
                           className='p-2.5 bg-transparent border-2 border-solid border-[#bbbbbb] rounded text-[#bbbbbb] text-xl font-bold'/>
                    <p>{errors.title?.message}</p>
                    <input type="text" placeholder="Desc" {...register('desc')}
                           className='p-2.5 bg-transparent border-2 border-solid border-[#bbbbbb] rounded text-[#bbbbbb] text-xl font-bold'/>
                    <p>{errors.desc?.message}</p>
                    <input type="text" placeholder="Image" {...register('img')}
                           className='p-2.5 bg-transparent border-2 border-solid border-[#bbbbbb] rounded text-[#bbbbbb] text-xl font-bold'/>
                    <p>{errors.img?.message}</p>
                    <textarea
                        placeholder="Content"
                        className='p-2.5 bg-transparent border-2 border-solid border-[#bbbbbb] rounded text-[#bbbbbb] text-xl font-bold'
                        cols="30"
                        rows="10"
                        {...register('content')}
                    ></textarea>
                    <p>{errors.content?.message}</p>
                    <button
                        className='p-5 cursor-pointer bg-[ #53c28b] border-none rounded text-[#eeeeee] font-bold'>Send
                    </button>
                </form>
            </section>
        );
    }
};

export default Dashboard;