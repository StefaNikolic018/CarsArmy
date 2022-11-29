import React, { memo } from "react";
import StyledHeader from "./styled/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <a
        href="https://www.linkedin.com/in/stefanikolic18/"
        target="_blank"
        rel="noreferrer"
        id="stefanikolic"
      >
        stefaNikolic
        <span> &copy;</span>
      </a>
    </StyledHeader>
  );
};

export default memo(Header);
