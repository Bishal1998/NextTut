import React from 'react';
import Image from 'next/image'
import Button from "@/components/Button/Button";

export const metadata = {
    title: 'About',
    description: 'NextTut is Full Stack App',
}

const About = () => {
    return (
        <section>
            <div className='w-full h-72 relative'>
                <Image
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt="About Us"
                    className='object-cover grayscale'
                />
                <div className=' absolute bottom-5 left-5 text-white bg-[#53c28b] p-1.5'>
                    <h1>Digital Storytellers</h1>
                    <h2>
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-24'>
                <div className='flex-1 mt-12 flex flex-col gap-7'>
                    <h1>Who Are We?</h1>
                    <p className='text-lg font-light text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br/>
                        <br/>
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div className='flex-1 mt-12 flex flex-col gap-7'>
                    <h1>What We Do?</h1>
                    <p className='text-lg font-light text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br/>
                        <br/> - Dynamic Websites
                        <br/>
                        <br/> - Fast and Handy
                        <br/>
                        <br/> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact"/>
                </div>
            </div>
        </section>
    );
};

export default About;