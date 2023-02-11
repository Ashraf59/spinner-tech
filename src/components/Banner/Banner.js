import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Banner/Banner.css'

const Banner = () => {
    const settings = {
        
        fade:true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    }
    return (
        <Slider {...settings} className='hero__slider'>
        <div className="slider__item slider__item-01">
            <div className=''>
                <div className="slider__content" data-aos="fade-up"
         data-aos-easing="center-bottom"
         data-aos-duration="2000">
                    <h4 className="text-light mb-3">Price BDT 40,000.00 </h4>
                    <h1 className="text-light">Order Now & Get 10% Off</h1>
                       <p className="mb-4 text-center mx-auto leading-8">The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface</p> 
                    
                </div>
            </div>
        </div>
    
        <div className="slider__item slider__item-02">
            <div className=''>
                <div className="slider__content" data-aos="fade-up"
         data-aos-easing="center-bottom"
         data-aos-duration="2000">
                    <h4 className="text-light mb-3">Price BDT 70,000.00 </h4>
                    <h1 className="">Order Now & Get 15% Off</h1>
                    <p className="mb-4 text-center mx-auto leading-8">The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface</p> 
    
                    
                </div>
            </div>
        </div>
    
        <div className="slider__item slider__item-03">
            <div className=''>
                <div className="slider__content" data-aos="fade-up"
         data-aos-easing="center-bottom"
         data-aos-duration="2000">
                    <h4 className="text-light mb-3">Price BDT 90,000.00 </h4>
                    <h1 className="">Order Now & Get 15% Off</h1>
                    <p className="mb-4 text-center mx-auto leading-8">The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface</p> 
    
                    
                </div>
            </div>
        </div>
      </Slider>
    );
};

export default Banner;