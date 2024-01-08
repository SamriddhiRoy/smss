// pages/_app.js
import '@fontsource/roboto'; // Import the Roboto font

import Head from "next/head";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { DashboardLayout } from "@/dashboard/Layout";
import MainLayout from '../layout/MainLayout'
import AuthLayout from '../layout/AuthLayout'

function MyApp({ Component, pageProps }) {
  let CustomLayout = MainLayout;
  if(Component.layout ==="Authentication"){
    CustomLayout=AuthLayout
  }else if (Component.layout === "other") {
    CustomLayout = MainLayout;
  }

  return (
    <>
      <Head>
        <title> Dashboard </title>
      </Head>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </>
  );
}

export default MyApp;