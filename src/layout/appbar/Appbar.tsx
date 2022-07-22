import styles from "./index.module.scss";
import { RiMenu3Line } from "react-icons/ri"
import { useRouter } from "next/router";
import { FC } from "react";
import { Guild } from "../../utils/types";

type Props = {
    guild?: Guild;
}

export const Appbar:FC<Props> = ({guild}) => {
    const router = useRouter();

    return <div className={styles.appbar}>
        <div className={styles.menu} onClick={() => router.push("/menu")}>
            <RiMenu3Line size={65} />
            <p>Menu</p>
        </div>
        <div>
            <p>{guild?.name}</p>
        </div>
    </div>
}