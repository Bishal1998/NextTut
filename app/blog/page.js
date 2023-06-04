import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {items} from "@/app/portfolio/[category]/data";

export const metadata = {
    title: 'Blog',
    description: 'NextTut is Full Stack App',
}

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const Blog = async () => {

    const data = await getData();
    return (
        <div className='flex flex-col  items-center gap-12 mb-12'>
            {data.map((item) => (
                <Link href={`/blog/${item._id}`} key={item.id} className='flex flex-col md:flex-row'>
                    <div>
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={250}
                            className='object-cover'
                        />
                    </div>
                    <div className='ml-2.5'>
                        <h1 className='mb-2.5 text-3xl font-semibold leading-tight'>{item.title}</h1>
                        <p className='text-lg text-[#999999]'>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Blog;