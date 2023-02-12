import React, { useEffect, useState } from 'react';
import ShowAllProducts from '../ShowAllProducts/ShowAllProducts';
import '../AllProducts/AllProducts.css'
import Pagination from '../Pagination/Pagination';

const AllProducts = () => {
    const [allproducts, setAllproducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const[postsPerPage, setPostsPerPage] = useState(6)
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setAllproducts(data.products))
        console.log(allproducts.brand)
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = allproducts.slice(firstPostIndex, lastPostIndex)
    return (
        <div>
            <div >
           <h1 className='text-design' data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Our Classic <br/>Phone Model</h1>
           </div>
           <div >
            <p className='text2-design' data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-14 lg:gap-8 lg:mx-20'>
                {
                    currentPosts?.map(allproduct => <ShowAllProducts
                    
                    key={allproduct.id}
                    allproduct={allproduct}
                    
                    ></ShowAllProducts>)
                    
                }
                 <Pagination totalPosts = {allproducts.length}
                  postsPerPage ={postsPerPage}
                  setCurrentPage = {setCurrentPage}
                  currentPage = {currentPage}
                  />
            </div>
        </div>
    );
};

export default AllProducts;