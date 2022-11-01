import React from 'react';

import styled from './Layout.module.scss'

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};

export { Layout };
