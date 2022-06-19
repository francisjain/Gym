import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./Homeslider.css"

function Homeslider() {
    const settings = {
      dots: false   ,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed:2000
    };
  return (
    <div>
        <Slider className="Slider" {...settings}>
            <div className="sliderdiv">
                <div >
                    <img src="./images/image.jpg" alt="" />
                </div>
            </div>
            <div className="sliderdiv">
                <div >
                    <img src="./images/image1.jpg" alt="" />
                </div>
            </div>
            <div className="sliderdiv">
                <div>
                    <img src="./images/image3.jpg" alt="" />
                </div>
            </div>
            <div className="sliderdiv">
                <div >
                    <img src="./images/image4.jpg" alt="" />
                </div>
            </div>
        </Slider>
        
    </div>
  )
}

export default Homeslider