import React from 'react';
import { Link } from 'react-router-dom';

import MovieLogo from '../../images/movie-logo.png';
import PageLogo from '../../images/page_logo.png';

import { Wrapper, Content, LogoImg, PageLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={MovieLogo} alt='movie-logo' />
      </Link>
      <PageLogoImg src={PageLogo} alt='page-logo' />
    </Content>
  </Wrapper>
);

export default Header;
