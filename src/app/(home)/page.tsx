"use client";
import { useHome } from "../../hooks/useHome";
import HomeScreem from "../../screen/home_screen";

const HomePage = () => {
  const {
    eraseData,
    getFilter,
    saveData,
    setFindInList,
    setOpenModal,
    buttonState,
    setUserName,
    setEmail,
    heroOne,
    heroTwo,
    result,
    winner,
    isDisabled,
    email,
    userName,
    openModal,
  } = useHome();
  return (
    <HomeScreem
      eraseData={eraseData}
      getFilter={getFilter}
      saveData={saveData}
      setFindInList={setFindInList}
      setUserName={setUserName}
      setOpenModal={setOpenModal}
      setEmail={setEmail}
      buttonState={buttonState}
      heroOne={heroOne}
      heroTwo={heroTwo}
      result={result}
      winner={winner}
      isDisabled={isDisabled}
      email={email}
      userName={userName}
      openModal={openModal}
    />
  );
};
export default HomePage;
