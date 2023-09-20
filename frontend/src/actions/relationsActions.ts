import { ADD_FRIEND, ADD_PERSON } from "./types";

const addPerson = (personName: string) => {
  return {
    type: ADD_PERSON,
    payload: personName,
  };
};

const addFriend = (start: number, end: number) => {
  return {
    type: ADD_FRIEND,
    payload: { start: start, end: end },
  };
};

export { addFriend, addPerson };
