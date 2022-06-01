import React from 'react';

type Props = {
    name: string;
    price: number;
    soldOut?: boolean;
    imgSrc: string;
}

const ProductItem : React.FC<Props> = ({name, price, imgSrc, soldOut=false}) => {

    return (
        <div className='text-center'>
            <div className='bg-[#f6f6f6] py-[20px] flex justify-center'>
                <img src={imgSrc} />
            </div>
            <div className='py-[13px]'>
                <span>{name}</span>
                <span className='px-[6px]'>-</span>
                <span className='font-bold'>${price}</span>
            </div>
        </div>
    )
}

export default ProductItem;