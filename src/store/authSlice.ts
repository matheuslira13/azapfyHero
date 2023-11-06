import { TypeHero } from "../app/(home)/_types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserStoreState = {
  data: TypeHero;
};
export const initialState: UserStoreState = {
  data: {
    id: null,
    name: "",
    slug: "",
    powerstats: {
      combat: 0,
      durability: 0,
      intelligence: 0,
      power: 0,
      speed: 0,
      strength: 0,
    },
    appearance: {
      gender: "",
      race: "",
      height: [""],
      weight: [""],
      eyeColor: "",
      hairColor: "",
    },
    biography: {
      fullName: "",
      alterEgos: "",
      aliases: [""],
      placeOfBirth: "",
      firstAppearance: "",
      publisher: "",
      alignment: "",
    },
    work: {
      occupation: "",
      base: "",
    },
    connections: {
      groupAffiliation: "",
      relatives: "",
    },
    images: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
    },
  },
};

export const heroUpdateOne = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    updateSelectedHeroOne: (state, action: PayloadAction<UserStoreState>) => {
      state.data = action.payload.data;
    },
  },
});

export const heroUpdateTwo = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    updateSelectedHeroTwo: (state, action: PayloadAction<UserStoreState>) => {
      state.data = action.payload.data;
    },
  },
});

export const { updateSelectedHeroOne } = heroUpdateOne.actions;
export const { updateSelectedHeroTwo } = heroUpdateTwo.actions;
export const userActionsOne = heroUpdateOne.reducer;
export const userActionsTwo = heroUpdateTwo.reducer;
