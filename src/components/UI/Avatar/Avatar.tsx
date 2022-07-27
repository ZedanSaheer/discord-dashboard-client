import { FC } from "react";
import { getFirstLetters } from "../../../utils/helpers";
import styles from "./index.module.scss"

type Props = {
    sidebar:boolean; //Sidebar is a boolean flag to add different styles for sidebar
    name: string;
}

//This is a custom avatar component using a helper function to map first letters of the names of the guilds to the icon section

export const Avatar: FC<Props> = ({ name,sidebar }) => {
    const firstLetters = getFirstLetters(name);
    //This function above returns an array of first letters for the provided param

    return <div className={sidebar ? styles.sidebarIcon : styles.icon}>
        {firstLetters.map((letter,i) => {
            //Returns each first letter 
            return <span key={i}>{letter}</span>
        })}
    </div>
}