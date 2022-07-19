import { ReactElement } from "react";

export const DashboardLayout = ({children}:{children:ReactElement}) => {

    return (
        <>
            <nav>Hello World!</nav>
            <>{children}</>
        </>
    )
}

