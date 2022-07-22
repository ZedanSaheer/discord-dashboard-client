import { ReactElement, useContext } from "react";
import { GuildContext } from "../../utils/contexts/GuildContext";
import { Appbar } from "../appbar/Appbar";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./index.module.scss";

export const DashboardLayout = ({ children }: { children: ReactElement }) => {
    const { guild } = useContext(GuildContext);

    return (
        <>
            <Sidebar guild={guild}/>
            <div className={styles.layout}>
                <Appbar guild={guild}/>
                <>{children}</>
            </div>
        </>
    )
}

