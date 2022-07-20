import { ReactElement } from "react";
import { Appbar } from "../appbar/Appbar";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./index.module.scss";

export const DashboardLayout = ({ children }: { children: ReactElement }) => {

    return (
        <>
            <Sidebar />
            <div className={styles.layout}>
                <Appbar />
                <>{children}</>
            </div>
        </>
    )
}

