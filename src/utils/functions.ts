export const IsEmailValid = (email: string) => {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (reg.test(email)) {
    return true;
  } else {
    return false;
  }
};
type StatsHero = {
  combat: number;
  durability: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
};
export const moreStrong = (data: StatsHero) => {
  const morerStrong =
    data.power * data.combat +
    data.intelligence +
    data.speed +
    data.durability +
    data.strength;
  return morerStrong;
};
