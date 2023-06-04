import React from 'react';
import Image from "next/image";
import {notFound} from "next/navigation";

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}

export async function generateMetadata({params}) {

    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc
    };
}

const BlogPost = async ({params}) => {

    const data = await getData(params.id);

    return (
        <section>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1 flex flex-col justify-between'>
                    <h1 className='text-4xl'>{data.title}</h1>
                    <p className='text-lg font-light'>
                        {data.desc}
                    </p>
                    <div className='flex items-center gap-2.5'>
                        <Image
                            src={data.img}
                            alt=""
                            width={40}
                            height={40}
                            className='object-cover rounded-full w-10 h-10 hidden md:flex'
                        />
                        <span>{data.username}</span>
                    </div>
                </div>
                <div className='flex-1 h-[300px] relative'>
                    <Image
                        src={data.img}
                        alt=""
                        fill={true}
                        className='object-cover flex'
                    />
                </div>
            </div>
            <div className='mt-12 text-xl font-light text-[#999999] text-justify'>
                <p>
                    {data.content}
                </p>
            </div>
        </section>
    );
};

export default BlogPost;