import { createSelector } from "@reduxjs/toolkit";

const charactersState = (state) => state.characterItem;

export const getCharacterItem = createSelector(
  charactersState,
  (item) => item.item
);
