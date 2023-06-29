import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props)=>
{
    const { posters , title , subTitle , isDark , config } = props;
     const settings = 
     {
        infinite : false , 
        speed : 500 , 
        slidesToShow : 5 ,
        slidesToScroll : 4 ,
        responsive : [
            {breakpoint  : 1024 ,
            settings : {
                slidesToScroll : 3,
                slidesToShow : 2,
                
            },
            
            },
           
            {breakpoint : 600,
            settings :{
                slidesToScroll : 3,
                slidesToShow : 1,
                initialSlide : 1,
            },
        }  ,

{
    breakpoint: 480,
    settings : {
        slidesToScroll :2,
        slidesToShow : 1,
    },
},

        ]

    };
    return (
    <>
    Style
    <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
                <p className={`text-sm  ${isDark ? 'text-white' : 'text-gray-800'}`}>{subTitle}</p>
    </div>
    <Slider {...settings}>
    {posters.map((each , index)=>
    (
        <Poster {...each} isDark= {isDark} key = {index}/>
    ))}
    {/* <Poster/> */}
        </Slider>
    
    </>
    )
    
}
export default PosterSlider;