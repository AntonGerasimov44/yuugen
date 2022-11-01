import { useTranslation } from 'react-i18next';

import { CreateForm } from '../../components/CreateForm/CreateForm';
import '../../utils/i18next';

import styled from './Create.module.scss';

const Create = () => {
  const { t } = useTranslation();

  return (
    <div className={styled.container}>
      <h4 className={styled.header}>{t('create.createNew')}</h4>

      <CreateForm />
    </div>
  );
};

export { Create };
