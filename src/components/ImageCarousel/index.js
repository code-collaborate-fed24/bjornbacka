import React from "react";
import Slider from "react-slick";
import "./image.css";

const MultipleItems = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 1200,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const divContainerStyle = { width: "90%", margin: "0 auto", height: 150 };
	const imgProps = {
		imgAddress: ["./Assets/Carousel/nature.svg", "./Assets/Carousel/TopViewBuilding.svg", "./Assets/Carousel/YogaCrew.svg"
		],
		width: 150,
		objectFit: "cover",
		alt: "mushroom",
	};
	console.log(imgProps.imgAddress[0]);
	return (
		<div style={divContainerStyle}>
			<Slider {...settings}>
				<div>
					<img
						src={imgProps.imgAddress[0]}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress[1]}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>

				<div>
					<img
						src={imgProps.imgAddress[2]}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress[0]}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress[1]}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress[2]}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
			</Slider>
		</div>
	);
};
export default MultipleItems;
