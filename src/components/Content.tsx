/* eslint-disable react/no-unescaped-entities */
import React, { memo } from "react";

import Header from "./Header";
import Grid from "./Cars/Grid";
import SearchWrap from "./Search/Wrap";
import StyledContainer from "./styled/StyledContainer";
import GlobalContextProvider from "../contexts/GlobalContext";

const Content = () => {
  return (
    <GlobalContextProvider>
      <StyledContainer>
        <Header />
        <SearchWrap />
        <Grid />
      </StyledContainer>
    </GlobalContextProvider>
  );
};

export default memo(Content);
