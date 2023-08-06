import { createContext } from "react";

const INITTIAL_SATE = {
    city:undefined,
    dates:[],
    options: {
        adult: undefined,
        children:undefined,
        room: undefined,
    },
};

export const SearchContext=createContext(INITTIAL_SATE)