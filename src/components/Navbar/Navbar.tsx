import { useTranslation } from 'react-i18next';

import { ReactComponent as Dashboard } from '../../assets/images/dashboard.svg';
import { ReactComponent as Create } from '../../assets/images/create.svg';
import { LinkElement } from './LinkElement/LinkElement';
import '../../utils/i18next';

import styled from './Navbar.module.scss';

export interface IRoute {
  id: number;
  icon: React.ReactNode;
  title: string;
  link: string;
}

const Navbar = () => {
  const { t } = useTranslation();

  const routes = [
    {
      id: 1,
      icon: <Dashboard />,
      title: t('header.dashboard'),
      link: 'dashboard',
    },
    {
      id: 2,
      icon: <Create />,
      title: t('header.create'),
      link: 'create',
    },
  ];

  return (
    <nav className={styled.container}>
      <ul className={styled.linkWrapper}>
        {routes.map((route: IRoute) => {
          return <LinkElement key={route.id} {...route} />;
        })}
      </ul>
    </nav>
  );
};

export { Navbar };
