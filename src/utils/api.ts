import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { validateCookies } from "./helpers";
import { Guild } from "./types";

const API_URL = "http://localhost:5000/api";

export const fetchMutualGuilds = async (context: GetServerSidePropsContext) => {
    //Validates the session ID
    const headers = validateCookies(context);
    if (!headers) {
        //Returns to login screen if user is unauthenticated
        return {
            redirect: { destination: '/' }
        }
    }
    try {
        const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, { headers });
        //Returns the data of guilds 
        return { props: { guilds } }
    } catch (error) {
        console.log(error);
        //Returns to login screen if error occurs
        return {
            redirect: { destination: '/' }
        }
    }
}