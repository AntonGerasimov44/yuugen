import { NavLink } from 'react-router-dom';

import { IRoute } from '../Navbar';

import styled from './LinkElement.module.scss';

interface IProps extends IRoute {}

const LinkElement: React.FC<IProps> = ({ icon, link, title }) => {
  return (
    <li className={styled.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styled.activeLink}` : `${styled.notActiveLink}`
        }
        to={link}>
        <div>{icon}</div>
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export { LinkElement };
