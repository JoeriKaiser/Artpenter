import React from 'react';

interface HeaderProps {
  classText: string;
  title: string;
}

export const Header = ({ classText, title }: HeaderProps) => {
  return (
    <div className={`header-container-${classText}`}>
      <p className={`header-${classText}`}>{title}</p>
    </div>
  );
};
