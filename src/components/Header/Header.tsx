import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import logo from '../../assets/images/logo.svg';
import { ReactComponent as Bell } from '../../assets/images/bell.svg';
import { Navbar } from '../Navbar/Navbar';
import '../../utils/i18next';

import styled from './Header.module.scss';

const Header = () => {
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    function changeLanguage(lang: string): void {
      i18n.changeLanguage(lang);
    }
    changeLanguage(language);
  }, [i18n, language]);

  function toggleLanguage() {
    let lang = language === 'en' ? 'ua' : 'en';
    setLanguage(lang);
  }

  function redirectToDashboard() {
    navigate(`/dashboard`);
  }
  return (
    <header className={styled.container}>
      <img onClick={redirectToDashboard} className={styled.logo} src={logo} alt='logo' />
      <Navbar />
      <button className={styled.langBtn} onClick={toggleLanguage}>
        {t('language')}
      </button>
      <Bell className={styled.notification} />
    </header>
  );
};

export { Header };
