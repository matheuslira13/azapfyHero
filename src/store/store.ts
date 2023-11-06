import { configureStore } from "@reduxjs/toolkit";
import { userActionsOne, userActionsTwo } from "./authSlice";

export const store = configureStore({
  reducer: {
    userOne: userActionsOne,
    userTwo: userActionsTwo,
  },
});
