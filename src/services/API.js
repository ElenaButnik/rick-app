import axios from "axios";

export const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  /* headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6Ik9sZW5hIEJ1dG55ayIsImlhdCI6MTY0MjE3NzY0NCwiZXhwIjoxNjQ3MzYxNjQ0fQ.mrQIR-zTcH94OAeUnqL50Cn5NvOdyLTmYT0LbCOPvM4',
  },*/
});

export function FetchCharacters() {
  return instance.get(`/character`);
}

export function FetchCharacterById(id) {
  return instance.get(`/character/${id}`);
}

export function FetchByName(searchValue) {
  return instance.get(`/character/?name=${searchValue}`);
}

export function FetchPages(page) {
  return instance.get(`/character/?page=${page}`);
}
