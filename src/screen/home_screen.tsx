"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Carrosel,
  Typography,
  Card,
  TextInput,
  CombatCard,
  WinnerCharacter,
  ModalNewsLetter,
} from "../components";
import { Button } from "../components/Button";
import styles from "./style.module.scss";
import { TypeHero } from "./_types";

import Link from "next/link";

type HomePageProps = {
  setFindInList: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  eraseData: () => void;
  getFilter: (e: TypeHero[]) => TypeHero[];
  saveData: (e: TypeHero) => void;
  buttonState: () => void;
  heroOne: TypeHero;
  heroTwo: TypeHero;
  winner: { valor: number; char: number };
  result: TypeHero[];
  isDisabled: boolean;
  email: string;
  userName: string;
  openModal: boolean;
};

export default function Home({
  setFindInList,
  setUserName,
  setEmail,
  setOpenModal,
  eraseData,
  getFilter,
  saveData,
  buttonState,
  heroOne,
  heroTwo,
  winner,
  result,
  isDisabled,
  email,
  openModal,
  userName,
}: HomePageProps) {
  return (
    <main className={styles.container} id="home">
      <Carrosel />
      <section className={styles.subContainer}>
        <Typography color="white" type="24">
          Aqui na azapfy nos importamos em saber quem e o mais forte
        </Typography>
        <Typography color="white" type="24">
          Curioso tambem ? desenvolvemos um sistema de batalha aonde voce pode
          selecionar dois herois e descobri é mais forte
        </Typography>

        <TextInput onChange={setFindInList} placeholder="Pesquise seu heroi" />

        <div className={styles.subContainerContent} id="batle">
          {getFilter(result).map((item: TypeHero) => {
            return (
              <Card
                key={item.id}
                url={item.images.sm}
                name={item.name}
                onClick={() => saveData(item)}
              />
            );
          })}
        </div>

        <div className={styles.containerVsmode}>
          {heroOne.id != null && (
            <>
              <CombatCard
                img={heroOne.images.sm}
                name={heroOne.name}
                combat={heroOne.powerstats.combat}
                durability={heroOne.powerstats.durability}
                intelligence={heroOne.powerstats.intelligence}
                power={heroOne.powerstats.power}
                race={heroOne.appearance.race}
                speed={heroOne.powerstats.speed}
                strength={heroOne.powerstats.strength}
              />
              <Image src="/vs.png" alt="Versus" width={150} height={150} />
            </>
          )}
          {heroTwo.id != null && (
            <CombatCard
              img={heroTwo.images.sm}
              name={heroTwo.name}
              combat={heroTwo.powerstats.combat}
              durability={heroTwo.powerstats.durability}
              intelligence={heroTwo.powerstats.intelligence}
              power={heroTwo.powerstats.power}
              race={heroTwo.appearance.race}
              speed={heroTwo.powerstats.speed}
              strength={heroTwo.powerstats.strength}
            />
          )}

          {winner.char === 1 && (
            <div className={styles.containerWinner}>
              <Button onClick={eraseData} text="Limpar pesquisa" icon="trash" />

              <WinnerCharacter img={heroOne.images.sm} name={heroOne.name} />
            </div>
          )}
          {winner.char === 2 && (
            <div className={styles.containerWinner}>
              <Button onClick={eraseData} text="Limpar pesquisa" icon="trash" />

              <WinnerCharacter img={heroTwo.images.sm} name={heroTwo.name} />
            </div>
          )}
        </div>
      </section>
      <section className={styles.containerEmailDiv} id="newsletter">
        <div className={styles.InfoEmail}>
          <p className={`${styles.titleNewsLetter} font-hero`}>Assine</p>
          <p className={`${styles.titleNewsLetter} font-hero`}> nossa </p>
          <p className={`${styles.titleNewsLetterColor} font-hero`}>
            {" "}
            newsletter
          </p>
          <img src={"/spider.png"} className={styles.imgNewsLetter} />
        </div>
        <form className={styles.containerForm} action="">
          <TextInput
            placeholder="Nome"
            onChange={(e: string) => {
              buttonState();
              setUserName(e);
            }}
            type="normal"
          />

          <TextInput
            placeholder="Email"
            onChange={(e: string) => {
              buttonState();
              setEmail(e);
            }}
            type="email"
          />
          <Button
            isDisabled={isDisabled}
            onClick={() => {
              setOpenModal(true);
            }}
            text="Send"
          />
        </form>
        <ModalNewsLetter
          email={email}
          name={userName}
          onClose={setOpenModal}
          openModal={openModal}
        />
      </section>
      <footer
        className={styles.containerFooter}
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 0) 100%
          )`,
          backgroundColor: "#dc5c20",
        }}
      >
        <Link href="#home" className={styles.wrapLogoFooter}>
          <Image
            width={230}
            height={50}
            alt="logo"
            className={`cursor-pointer`}
            src="https://www.azapfy.com.br/wp-content/uploads/2020/08/NOVA-LOGO-AZAPFY_03.png"
          />
        </Link>
        <h3 className={styles.emailFooter}>matheus_lira13@hotmail.com</h3>
        <div className={styles.socialMidias}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/matheus-lira-barbosa-b6133438/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className={styles.iconFooter} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/matheuslira13"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className={styles.iconFooter} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
