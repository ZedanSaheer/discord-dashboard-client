import { ReactElement } from "react";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import { NextPageWithLayout } from "../../../utils/types";

const DashboardPage: NextPageWithLayout = () => {
    return (
        <div className="page">Dashboard Page</div>
    )
}

DashboardPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export default DashboardPage;    