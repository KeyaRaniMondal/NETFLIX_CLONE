import React from 'react';
import logo from "../assets/logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardList = () => {
    // Sample data for cards just for demonstration
    const data = [
        {
            id: 1,
            title: "card1",
            description: "this is card one",
            imgUrl: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            title: "card2",
            description: "this is card two",
            imgUrl: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "card3",
            description: "this is card three",
            imgUrl: "https://via.placeholder.com/150"
        }
    ]
    return (
        <div className="text-white md:px-4">
            <h2 className="pt-10 pb-5 text-lg font-medium">Upcoming</h2>
            <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id} className="max-w-72">
                            <img src={logo} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </SwiperSlide >
                    ))
                }
            </Swiper>
        </div>
    )
}
export default CardList;