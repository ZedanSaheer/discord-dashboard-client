import axios from "axios";
import { Channel } from "diagnostics_channel";
import GetServerSidePropsContext from "next";
import { validateCookies } from "./helpers";
import { Guild } from "./types";

export const LOGIN_URL = "http://localhost:5000/api/auth/discord"
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

export const fetchGuild = async (context: GetServerSidePropsContext) => {
    //Validates the session ID
    const headers = validateCookies(context);
    if (!headers) {
        //Returns to login screen if user is unauthenticated
        return {
            redirect: { destination: '/' }
        }
    }
    try {
        const { data: guild } = await axios.get<Guild>(`${API_URL}/guilds/${context.query.id}`, { headers });
        //Returning the guild data as props property
        return { props: { guild } };
    } catch (error) {
        console.log(error);
        //Returns to login screen if error occurs
        return {
            redirect: { destination: '/' }
        }
    }
}

export const fetchValidGuilds = async (id: string, headers: HeadersInit) => {
    //Sends a get request to fetch all valid guilds with the auth header
    return await fetch(`${API_URL}/guilds/${id}/permissions`, {
        headers,
    })
}

export const fetchChannels = async (context: GetServerSidePropsContext) => {
    //Validates the session ID
    const headers = validateCookies(context);
    if (!headers) {
        //Returns to login screen if user is unauthenticated
        return {
            redirect: { destination: '/' }
        }
    }
    try {
        const { data: channel } = await axios.get<Channel[]>(`${API_URL}/guilds/${context.query.id}/channels`, { headers });
        //Returning the Channels data as props property
        return { props: { channel } };
    } catch (error) {
        console.log(error);
        //Returns to login screen if error occurs
        return {
            redirect: { destination: '/' }
        }
    }
}

export const checkAuthStatus = async (context: GetServerSidePropsContext) => {
    //Validates the session ID
    const headers = validateCookies(context);
    if (headers) {
        //This function returns user to menu screen if he has an active session
        return {
            redirect: { destination: '/menu' }
        }
    }
}

export const logout = () => {
    //Calls the logout route to ends all sessions and remove all tokens
    return axios.get(`${API_URL}/auth/logout`);
} 