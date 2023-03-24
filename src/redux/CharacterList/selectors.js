import { createSelector } from "@reduxjs/toolkit";

const charactersState = (state) => state.characterList;

export const getCharacters = createSelector(
  charactersState,
  (characters) => characters.characters
);

export const getMyFilters = createSelector(
  charactersState,
  (characters) => characters?.filter
);

export const getNextPage = createSelector(
  charactersState,
  (characters) => characters?.page?.info?.next
);

export const getPages = createSelector(
  charactersState,
  (characters) => characters?.page?.info?.pages
);
