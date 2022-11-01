import React from 'react';

import { ReactComponent as Plus } from '../../assets/images/plus.svg';

import styled from './Button.module.scss';

interface IProps {
  title: string;
  handleClick?: () => void;
  type: 'submit' | 'button' | 'reset';
}

const Button: React.FC<IProps> = ({ title, handleClick, type }) => {
  return (
    <button onClick={handleClick} className={styled.container} type={type}>
      <span className={styled.text}>{title}</span>
      <Plus className={styled.icon} />
    </button>
  );
};

export { Button };
