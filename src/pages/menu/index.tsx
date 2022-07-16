import type {  GetServerSidePropsContext, NextPage } from "next";
import { fetchMutualGuilds } from "../../utils/api";

const Menu: NextPage = () => {

    return <div className="page aligned-center">

    </div>;
};

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
   return await fetchMutualGuilds(context);
}

export default Menu;
