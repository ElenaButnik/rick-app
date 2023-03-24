import axios from "axios";

export const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export function FetchCharacters(params) {
  return instance.get(`/character`, { params });
}

export function FetchCharacterById(id) {
  return instance.get(`/character/${id}`);
}
