import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllProducts = ({allproduct}) => {
    console.log(allproduct)
    const {title, id, images, price, description} = allproduct
    return (
        <div className="card w-[370px] h-[30rem] bg-base-100 shadow shadow-slate-300 m-auto" data-aos="fade-up"
        data-aos-easing="center-bottom"
        data-aos-duration="2000">
        <figure>
        <img src={images[0]} alt="food" />
</figure>
<div className="card-body text-left">
 <h2 className="card-title font-bold">{title}</h2>
 <p className='text-rose-500 font-serif'>Price: ${price}</p>
 <>{description.length > 100 ?
           <p>{description.slice(0, 100) + '...'}</p>
           :
           <p className='text-gray-600'>{description}</p>
         
         }</>
         <div className="card-actions justify-center">
         <Link to = {`/checkout/${id}`}>
      <button className="btn btn-error text-white">Order Now</button>

      </Link>
   </div>
</div>
</div>
    );
};

export default ShowAllProducts;