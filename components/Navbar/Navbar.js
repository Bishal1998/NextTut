'use client'
import React from 'react';
import Link from "next/link";
import DarkMode from "@/components/DarkMode/DarkMode";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


const links = [
    {
        id: 1,
        title: 'home',
        url: '/'
    },
    {
        id: 2,
        title: 'portfolio',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'about',
        url: '/about'
    },
    {
        id: 5,
        title: 'contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'dashboard',
        url: '/dashboard'
    },
]

const Navbar = () => {

    const session = useSession();
    const router = useRouter()
    return (
        <nav className='h-24 flex justify-between items-center'>
            <Link href='/' className='font-bold text-2xl'>NextTut</Link>
            <div className='flex items-center gap-5 capitalize'>
                <DarkMode/>
                {
                    links.map((link) => {
                        return <Link href={link.url} key={link.id} className='hidden md:flex'>{link.title}</Link>
                    })
                }
                {
                    session.status === 'authenticated' ?
                        <button className='p-1.5 border-none bg-[#53c28b] text-white cursor-pointer rounded'
                                onClick={signOut}>
                            Log Out
                        </button> :
                        <button className='p-1.5 border-none bg-[#53c28b] text-white cursor-pointer rounded'
                            // onClick={router?.push('/dashboard/login')}
                        >
                            Log In
                        </button>
                }

            </div>
        </nav>
    );
};

export default Navbar;