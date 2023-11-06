"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "../Typography";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Carrosel = () => {
  const dataMenu = [
    {
      imgBackground: "./ironMan.jpg",
      title: "Retorno do homem de ferro ?",
      subtitle:
        "Filmes da disney sofrem quedas de audiencia e quedas de ações, sera o homem de ferro a carta na manga da disney ",
    },
    {
      imgBackground: "./superman.jpg",
      title: "Super-man legacy um possivel nova era de ouro dos super herois",
      subtitle:
        "James Gunn tem a oportunidade de se torna a nova marvel dos cinemas",
    },
    {
      imgBackground: "./marveldc.jpg",
      title: "O que esta acontecendo com as HQs",
      subtitle:
        "Quadrinista Chuck Dixon comenta fato de Mangás venderem mais que Quadrinhos",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          width: "100vw",
          height: 700,
        }}
      >
        {dataMenu.map((item: any, index: any) => {
          return (
            <SwiperSlide
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                background: `linear-gradient(
                  to top,
                  rgba(0, 0, 0, 1) 5%,
                  rgba(0, 0, 0, 0) 100%
                ),url(${item.imgBackground})`,

                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
              key={index}
            >
              <div
                className="hidden max-sm:flex flex-col flex-1 h-full justify-end"
                style={{ paddingBottom: 50, paddingLeft: 50 }}
              >
                <Typography type="28" bold="bolder" color="white">
                  {item.title}
                </Typography>

                <Typography type="20" bold="bolder" color="orange">
                  {item.subtitle}
                </Typography>
              </div>

              <div
                className="flex flex-col flex-1 h-full justify-end max-sm:hidden "
                style={{ paddingBottom: 50, paddingLeft: 50 }}
              >
                <Typography type="32" bold="bolder" color="white">
                  {item.title}
                </Typography>

                <Typography type="24" bold="bolder" color="orange">
                  {item.subtitle}
                </Typography>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
