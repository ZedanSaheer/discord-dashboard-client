import { FC } from "react";
import { Guild } from "../../../utils/types"
import { ShowAvatar } from "../../UI/Avatar/ShowAvatar/ShowAvatar";
import styles from "./index.module.scss"

type Props = {
    guild: Guild;
};


export const GuildMenuItem: FC<Props> = ({ guild }) => {
    return <div className={styles.container}>
        <ShowAvatar className="menu"/>
        <p>{guild.name}</p>
    </div>
}