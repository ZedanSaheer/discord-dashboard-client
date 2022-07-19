import Image from "next/image";
import { FC } from "react";
import { getFirstLetters } from "../../../utils/helpers";
import { Guild } from "../../../utils/types"
import { Avatar } from "../GuildMenuItemAvatar/Avatar";
import styles from "./index.module.scss"

type Props = {
    guild: Guild;
};


export const GuildMenuItem: FC<Props> = ({ guild }) => {
    console.log(getFirstLetters(guild.name));

    return <div className={styles.container}>
        {guild.icon ?
            <Image height={55} width={55} className={styles.image} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} />
            :
            //Sets the custom avatar component if the guild icon is null or falsy value
            <Avatar name={guild.name} />
        }
        <p>{guild.name}</p>
    </div>
}