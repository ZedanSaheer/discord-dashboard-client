import { MdSpaceDashboard } from "react-icons/md"
import { BsTerminal } from "react-icons/bs"
import { FaWrench } from "react-icons/fa"
import { RiLogoutCircleLine } from "react-icons/ri"
import styles from "./index.module.scss"
import { useRouter } from "next/router"

//Creating an array of object for routes
const routes = [
    {
        name: "dashboard",
        icon: <MdSpaceDashboard size={48}/>,
        getPath: (id: string) => `/dashboard/${id}`,
    },
    {
        name: "commnads",
        icon: <BsTerminal size={48}/>,
        getPath: (id: string) => `/dashboard/${id}/commands`,
    },
    {
        name: "settings",
        icon: <FaWrench size={48}/>,
        getPath: (id: string) => `/dashboard/${id}/settings`,
    },
]

export const Sidebar = () => {
    const router = useRouter();
    const id = router.query.id;

    return <div className={styles.sidebar}>
        {/* <Image src={ } height={80} width={80} alt={Avatar} className={styles.avatar} /> */}
        <div>
            {routes.map((route) => {
                return <div key={route.name} onClick={() => router.push(route.getPath(router.query?.id!.toString()))} className={styles.icons}>
                    {route.icon}
                </div>
            })}
        </div>
        <div>
            <RiLogoutCircleLine size={48} />
        </div>
    </div>
}