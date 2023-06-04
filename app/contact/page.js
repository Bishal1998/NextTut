import React from 'react';
import Image from 'next/image'
import Button from "@/components/Button/Button";

export const metadata = {
    title: 'Contact',
    description: 'NextTut is Full Stack App',
}

const Contact = ({url, text}) => {
    return (
        <section>
            <h1 className='text-3xl md:text-6xl mb-24 text-center'>Let&apos;s Keep in Touch</h1>
            <div className='flex items-center gap-24'>
                <div className='hidden lg:flex flex-1 h-[500px] relative'>
                    <Image
                        src="/contact.png"
                        alt=""
                        fill={true}
                        className='object-contain'
                    />
                </div>
                <form className='flex-1 flex flex-col gap-5  w-full'>
                    <input type="text" placeholder="name"
                           className='p-5 bg-transparent outline-none text-[#bbbbbb] border-2 border-solid border-[#bbbbbb] text-xl font-bold'/>
                    <input type="text" placeholder="email"
                           className='p-5 bg-transparent outline-none text-[#bbbbbb] border-2 border-solid border-[#bbbbbb] text-xl font-bold'/>
                    <textarea
                        className='p-5 bg-transparent outline-none text-[#bbbbbb] border-2 border-solid border-[#bbbbbb] text-xl font-bold'
                        placeholder="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <Button url="#" text="Send"/>
                </form>
            </div>
        </section>
    );
};

export default Contact;