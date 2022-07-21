import { ReactElement, useContext, useEffect } from "react";
import GetServerSidePropsContext from "next";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";

type Props = {
    guild: Guild;
}

const DashboardPage: NextPageWithLayout<Props> = ({ guild }) => {
    const {setGuild} = useContext(GuildContext);
    
    useEffect(() => {
        setGuild(guild);
    }, [])
    

    return (
        <div className="page">
            Dashboard Page
            <p>{guild.name}</p>
        </div>

    )
}

DashboardPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchGuild(context);
}

export default DashboardPage;    