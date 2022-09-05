import { ReactElement } from "react";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import type GetServerSidePropsContext from "next";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import { fetchGuild } from "../../../utils/api";

type Props = {
    guild: Guild;
}

const SettingsPage: NextPageWithLayout<Props> = ({guild}) => {
    return (
        <h1 className="page">Settings Page</h1>
    )
}

SettingsPage.getLayout = function (page: ReactElement) {
      //Sets the layout for this page that includes the sidebar and appbar
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await fetchGuild(context);
}

export default SettingsPage;    