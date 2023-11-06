"use client";
import { TypeHero } from "@/screen/_types";
import { IsEmailValid, moreStrong } from "@/utils/functions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedHeroTwo,
  updateSelectedHeroOne,
  initialState,
} from "../store/authSlice";

export const useHome = () => {
  const [search] = useState(["name"]);
  const [findInList, setFindInList] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const getFilter = (items: any) => {
    return items.filter((item: any) => {
      return search.some((newItem) => {
        return (
          item[newItem]
            ?.toString()
            ?.toLowerCase()
            ?.indexOf(findInList.toLowerCase()) > -1
        );
      });
    });
  };
  const dispatch = useDispatch();

  const [result, setResult] = useState([]);
  const [winner, setWinner] = useState({ valor: 0, char: 0 });

  const getData = async () => {
    const res = await fetch(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );

    const data = await res.json();
    setResult(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const verifyHowIsBetter = (item: any) => {
    if (heroOne.id != null && item.id != null) {
      const characterOne = moreStrong(heroOne.powerstats);
      const characterTwo = moreStrong(item.powerstats);
      if (characterOne > characterTwo) {
        console.log("Aquiiiii", characterOne, characterTwo);
        setWinner({ valor: characterOne, char: 1 });
      } else {
        console.log("Aquiiiii", characterOne, characterTwo);

        setWinner({ valor: characterTwo, char: 2 });
      }
    }
  };

  const saveData = (e: TypeHero) => {
    console.log("chama");
    if (heroOne.id != null) {
      dispatch(
        updateSelectedHeroTwo({
          data: {
            id: e.id,
            name: e.name,
            slug: e.slug,
            powerstats: {
              combat: e.powerstats.combat,
              durability: e.powerstats.durability,
              intelligence: e.powerstats.intelligence,
              power: e.powerstats.power,
              speed: e.powerstats.speed,
              strength: e.powerstats.strength,
            },
            appearance: {
              gender: e.appearance.gender,
              race: e.appearance.race,
              height: e.appearance.height.map((item: string) => item),
              weight: e.appearance.weight.map((item: string) => item),
              eyeColor: e.appearance.eyeColor,
              hairColor: e.appearance.hairColor,
            },
            biography: {
              fullName: e.biography.fullName,
              alterEgos: e.biography.alterEgos,
              aliases: e.biography.aliases.map((item: string) => item),
              placeOfBirth: e.biography.placeOfBirth,
              firstAppearance: e.biography.firstAppearance,
              publisher: e.biography.publisher,
              alignment: e.biography.alignment,
            },
            work: {
              occupation: e.work.occupation,
              base: e.work.base,
            },
            connections: {
              groupAffiliation: e.connections.groupAffiliation,
              relatives: e.connections.relatives,
            },
            images: {
              xs: e.images.xs,
              sm: e.images.sm,
              md: e.images.md,
              lg: e.images.lg,
            },
          },
        })
      );
      verifyHowIsBetter(e);
    } else {
      dispatch(
        updateSelectedHeroOne({
          data: {
            id: e.id,
            name: e.name,
            slug: e.slug,
            powerstats: {
              combat: e.powerstats.combat,
              durability: e.powerstats.durability,
              intelligence: e.powerstats.intelligence,
              power: e.powerstats.power,
              speed: e.powerstats.speed,
              strength: e.powerstats.strength,
            },
            appearance: {
              gender: e.appearance.gender,
              race: e.appearance.race,
              height: e.appearance.height.map((item: string) => item),
              weight: e.appearance.weight.map((item: string) => item),
              eyeColor: e.appearance.eyeColor,
              hairColor: e.appearance.hairColor,
            },
            biography: {
              fullName: e.biography.fullName,
              alterEgos: e.biography.alterEgos,
              aliases: e.biography.aliases.map((item: string) => item),
              placeOfBirth: e.biography.placeOfBirth,
              firstAppearance: e.biography.firstAppearance,
              publisher: e.biography.publisher,
              alignment: e.biography.alignment,
            },
            work: {
              occupation: e.work.occupation,
              base: e.work.base,
            },
            connections: {
              groupAffiliation: e.connections.groupAffiliation,
              relatives: e.connections.relatives,
            },
            images: {
              xs: e.images.xs,
              sm: e.images.sm,
              md: e.images.md,
              lg: e.images.lg,
            },
          },
        })
      );
    }
  };

  const eraseData = () => {
    dispatch(updateSelectedHeroTwo(initialState));
    dispatch(updateSelectedHeroOne(initialState));
    setWinner({ valor: 0, char: 0 });
  };

  const heroOne: TypeHero = useSelector(({ userOne }) => userOne.data);

  const heroTwo: TypeHero = useSelector(({ userTwo }) => userTwo.data);

  const buttonState = () => {
    if (userName.length > 1 && IsEmailValid(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return {
    setFindInList,
    setUserName,
    setEmail,
    setOpenModal,
    getFilter,
    result,
    winner,
    saveData,
    eraseData,
    heroOne,
    heroTwo,
    buttonState,
    isDisabled,
    openModal,
    userName,
    email,
  };
};
