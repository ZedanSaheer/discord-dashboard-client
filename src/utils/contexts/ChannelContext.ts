import { createContext } from "react";
import { Channel } from "../types";

type ChannelContextType = {
    channels?: Channel[];
    setChannels: (channels: Channel[]) => void;
}

//This is the context that stores the guilds fetched from the api , It has two methods one to store the guild and other to view the guild

export const ChannelContext = createContext<ChannelContextType>({
    setChannels: () => { }
});