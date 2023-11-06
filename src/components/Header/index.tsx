"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

export const transferInformationState = (e?: boolean) => {
  return e;
};

export const Header = () => {
  const [OnOff, setOnOff] = useState(true);
  const [mobile, setMobile] = useState("hidden");
  const [iconMenu, setIconMenu] = useState("");

  const dataMenu = [
    {
      imgBackground: "iron",
      title: "Retorno do homem de ferro ?",
      subtitle:
        "Filmes da disney sofrem quedas de audiencia e quedas de ações, sera o homem de ferro a carta na manga da disney ",
    },
    {
      imgBackground: "man",
      title: "Super-man legacy um possivel nova era de ouro dos super herois",
      subtitle:
        "James Gunn tem a oportunidade de se torna a nova marvel dos cinemas",
    },
    {
      imgBackground: "dcmarvel",
      title: "O que esta acontecendo com as HQs",
      subtitle:
        "Quadrinista Chuck Dixon comenta fato de Mangás venderem mais que Quadrinhos",
    },
  ];

  const handleChangeMenuState = () => {
    transferInformationState(!OnOff);
    setOnOff(!OnOff);
    if (OnOff) {
      setMobile(
        "fixed flex  bg-black h-screen justify-start items-start right-0 "
      );
      setIconMenu("hidden");
    } else {
      setMobile("hidden");
      setIconMenu("");
    }
  };

  return (
    <div
      className={
        "fixed bg-transparent py-9 justify-between px-10 backdrop-blur-md  w-full items-center bg-orange-500 z-10"
      }
    >
      <div className="flex items-center justify-between">
        <Link href="#home">
          <Image
            width={230}
            height={50}
            alt="logo"
            className={`cursor-pointer ${iconMenu}`}
            src="https://www.azapfy.com.br/wp-content/uploads/2020/08/NOVA-LOGO-AZAPFY_03.png"
          />
        </Link>
        <GiHamburgerMenu
          className={"hidden max-sm:block text-orange-500"}
          onClick={handleChangeMenuState}
        />

        <nav className="hidden sm:block">
          <ul className="list-none flex justify-around items-center">
            {dataMenu.map((item: any, index: any) => {
              return (
                <li
                  key={index}
                  className="text-slate-50 px-2 transition-colors duration-150 hover:text-orange-700"
                >
                  <Link href={"item.pathRef"}>{"item.item"}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className={mobile} style={{ width: 200 }}>
        <nav>
          <IoClose
            className="text-orange-500 transition-colors duration-150 hover:text-stone-50"
            onClick={handleChangeMenuState}
          />
          <ul>
            {dataMenu.map((item: any, index: any) => {
              return (
                <li
                  key={index}
                  className="text-orange-500 px-2 transition-colors duration-150 hover:text-stone-50"
                >
                  <Link href={"item.pathRef"}>{"item.item"}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
