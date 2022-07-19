import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type Guild = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permission: string;
    features: string[];
}

export type NextPageWithLayout = NextPage & {
    //The next page type with an optional get layout function that returns a page
    getLayout?: (page: ReactElement) => ReactNode;
}

export type AppPropsWithLayout = AppProps & {
    Component : NextPageWithLayout;
  }
  