import { createContext } from "react";
import { Guild } from "../types";

type GuildContextType = {
    guild?: Guild;
    setGuild: (guild: Guild) => void;
}

//This is the context that stores the guilds fetched from the api , It has two methods one to store the guild and other to view the guild

export const GuildContext = createContext<GuildContextType>({
    setGuild: () => { }
});