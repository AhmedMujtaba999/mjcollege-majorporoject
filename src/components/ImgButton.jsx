import React from 'react'
import { useNavigate } from 'react-router-dom';

function ImgButton() {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/try');
    };
    const handleClick2 = () => {
        navigate('/learn');
    };
    return (
        <>
            <img
                src="src/assets/try.jpeg"
                alt="Clickable"
                onClick={handleClick1}
                className="cursor-pointer absolute bottom-40 right-10 w-40 h-12 "
            />

            <img
                src="src/assets/learn.jpeg"
                alt="Clickable"
                onClick={handleClick2}
                className="cursor-pointer absolute bottom-20 right-5 w-40 h-12 "
            />

        </>
    )
}

export default ImgButton