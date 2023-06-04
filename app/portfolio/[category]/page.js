import React from 'react';
import Image from "next/image";
import Button from "@/components/Button/Button";
import {items} from "@/app/portfolio/[category]/data";
import {notFound} from "next/navigation";


const getData = (cat) => {
    const data = items[cat];

    if (data) {
        return data;
    }

    return notFound();
};
const Category = ({params}) => {

    const data = getData(params.category)
    return (
        <section>
            <h1 className='text-[#53c28b] capitalize'>{params.category}</h1>
            <div>
                {data.map((item) => (
                    <div className='flex flex-col lg:flex-row gap-12 mt-12 mb-24' key={item.id}>
                        <div className='flex flex-1 flex-col gap-5 justify-center'>
                            <h1 className='text-5xl'>{item.title}</h1>
                            <p className='text-xl'>{item.desc}</p>
                            <Button text="See More" url="#"/>
                        </div>
                        <div className='w-full h-[300px] lg:w-1/2 md:h-[500px] relative'>
                            <Image
                                className='object-cover'
                                fill={true}
                                src={item.image}
                                alt={item.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Category;