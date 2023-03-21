import { createSelector } from "@reduxjs/toolkit";

const charactersState = (state) => state.characterList;

export const getCharacters = createSelector(
  charactersState,
  (characters) => characters.characters
);
