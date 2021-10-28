import Slider from "slick-carousel";

const WriterSlider = () => {
    let settings= {
        dot:true,
        infinite:true,
        speed:true,
        slideToshow:3,
        slideToScroll:1,
        cssease:"linear"
    }
    return (
        <Slider {...settings}>

        </Slider>
    )
}

export default WriterSlider
