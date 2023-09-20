import { ADD_PERSON } from "./types";

export const addPerson = (personName) => {
    return {
        type: ADD_PERSON,
        payload: personName
    }
}