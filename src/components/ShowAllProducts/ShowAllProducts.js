import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllProducts = ({allproduct}) => {
    console.log(allproduct)
    const {title, brand, images, price, description} = allproduct
    return (
        <div className="card w-[370px] h-[30rem] bg-base-100 shadow shadow-slate-300 m-auto">
        <figure>
        <img src={images[0]} alt="food" />
</figure>
<div className="card-body">
 <h2 className="card-title">{title}</h2>
 <p>Price: ${price}</p>
 <>{description.length > 100 ?
           <p>{description.slice(0, 100) + '...'}</p>
           :
           <p className='text-gray-600'>{description}</p>
         
         }</>
         <div className="card-actions justify-center">
   <Link to='#'><button className="btn btn-error mx-auto text-white">Order Now</button></Link>
   </div>
</div>
</div>
    );
};

export default ShowAllProducts;