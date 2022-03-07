import Head from "next/head";
import { FC } from "react";

const MainContainer: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
