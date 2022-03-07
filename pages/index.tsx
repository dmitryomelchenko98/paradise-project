import { Typography } from "@mui/material";
import type { NextPage } from "next";
import MainContainer from "../app/components/MainContainer";
// import { useGetProductsQuery } from "../app/store/product/product.api";

const Home: NextPage = () => {
  // const { data, isLoading, error } = useGetProductsQuery();

  return (
    <MainContainer>
      <Typography component="h1" variant="h1">
        Paradise Project 👋
      </Typography>
    </MainContainer>
  );
};

export default Home;
