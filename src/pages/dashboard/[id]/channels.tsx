import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import type GetServerSidePropsContext from "next";
import styles from './channel.module.scss'
import { Channel, NextPageWithLayout } from "../../../utils/types";
import { fetchChannels } from "../../../utils/api";
import { ChannelContext } from "../../../utils/contexts/ChannelContext";
import ChannelItem from "../../../components/channels/channelItem/ChannelItem";

type Props = {
    channels: Channel[];
}

const ChannelPage: NextPageWithLayout<Props> = ({ channels }: Props) => {
    const { setChannels } = useContext(ChannelContext);

    useEffect(() => { setChannels(channels) }, []);

    return (
        <div className="page">
            <h1>Channels Page</h1>
            <p>"No Information Yet" implies the server being inactive</p>
            <div className={styles.channel_container}>
                {channels.map((channel) => <ChannelItem channel={channel} />)}
            </div>
        </div>
    )
}

ChannelPage.getLayout = function (page: ReactElement) {
    //Sets the layout for this page that includes the sidebar and appbar
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    //SSR for channel data based on guild (id)
    return fetchChannels(context);
}

export default ChannelPage;    