import React from 'react'

export default function Card({ feature }) {
    return (
        <div className="bg-custom-purple border border-gray-200 rounded-lg ">
            <p className='text-custom text-6xl font-bold'>{feature.highlight}</p>
            <p className='text-3xl'>{feature.text}</p>
        </div>
    );
}