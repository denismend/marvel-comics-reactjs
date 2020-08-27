import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <Container>
    <div className="row">
      <div className="col-sm-6 col-xs-12">
        <Link to="/">
          <img
            className="logo"
            height="40"
            src="/img/MarvelLogoAPI.svg"
            role="presentation"
          />
        </Link>
      </div>
    </div>
  </Container>
);

export default Header;
