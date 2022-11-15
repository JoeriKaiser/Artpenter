import React, { ReactNode } from 'react';

type mainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: mainLayoutProps) => {
  return (
    <>
      <p>wdwd efw</p>
      <aside></aside>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
