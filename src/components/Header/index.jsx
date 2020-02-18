import React from "react";
import { Link } from "react-router-dom";

import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/">Blog Programador</Link>
        <Link to="/login">Entrar</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
