import { createSelector } from "@reduxjs/toolkit";

const pageState = (state) => state.page;

export const getPage = createSelector(pageState, (page) => page.pages);
