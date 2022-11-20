import './styles.css';

import React, { ReactNode } from 'react';

import AsideFooter from '../../components/AsideFooter';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';

type mainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: mainLayoutProps) => {
  return (
    <div className="main-layout-container">
      <aside>
        <Header classText="main-title" title="ArtPenter" />
        <Nav />
        <AsideFooter />
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
