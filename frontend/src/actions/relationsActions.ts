import { ADD_PERSON } from "./types";

export const addPerson = (personName: string) => {
    return {
        type: ADD_PERSON,
        payload: personName
    }
}