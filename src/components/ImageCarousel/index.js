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
		imgAddress:
			"https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		width: 150,
		objectFit: "cover",
		alt: "mushroom",
	};
	return (
		<div style={divContainerStyle}>
			<Slider {...settings}>
				<div>
					<img
						src={imgProps.imgAddress}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
				<div>
					<img
						src={imgProps.imgAddress}
						alt={imgProps.alt}
						width={imgProps.width}
					/>
				</div>
			</Slider>
		</div>
	);
};
export default MultipleItems;
