import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { TextError } from './TextError/TextError';
import { Button } from '../Button/Button';
import { todoAPI } from '../../api/api';
import '../../utils/i18next';

import styled from './CreateForm.module.scss';

type StatusType = 'draft' | 'overdue' | 'finished' | 'in progress';

interface IInitialValues {
  title: string;
  status: StatusType;
  description: string;
}

const initialValues: IInitialValues = {
  title: '',
  status: 'draft',
  description: '',
};

const CreateForm = () => {
  const { t }: any = useTranslation();

  function onSubmit(values: IInitialValues): void {
    todoAPI
      .postTodoData(values.title, values.status, values.description)
      .then((res) => {})
      .catch((error) => console.log(error));
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, t('validation.min'))
      .max(100, t('validation.max'))
      .required(t('required'))
      .matches(/\d/, t('validation.number'))
      .matches(/[A-Z]/, t('validation.upperLetter')),

    status: Yup.string().required(t('required')),

    description: Yup.string().min(10, t('validation.min')).required(t('required')),
  });

  return (
    <div className={styled.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}>
        {({ errors, touched }) => (
          <Form className={styled.formWrapper}>
            {/* input */}
            <div className={styled.fieldWrapper}>
              <label htmlFor='title'>{t('create.title')}</label>
              <Field
                className={
                  errors.title && touched.title ? styled.errorInput : styled.input
                }
                type='text'
                id='title'
                name='title'
              />
              {errors.title && touched.title ? (
                <TextError>{errors.title}</TextError>
              ) : null}
            </div>

            {/* select */}
            <div className={styled.fieldWrapper}>
              <label htmlFor='description'>{t('create.status')}</label>
              <Field as='select' id='status' name='status' className={styled.select}>
                <option value='draft'>{t('create.options.draft')}</option>
                <option value='overdue'>{t('create.options.overdue')}</option>
                <option value='finished'>{t('create.options.finished')}</option>
                <option value='in progress'>{t('create.options.inProgress')}</option>
              </Field>
            </div>

            {/* textarea */}
            <div className={styled.fieldWrapper}>
              <label htmlFor='description'>{t('create.description')}</label>
              <Field
                className={
                  errors.description && touched.description
                    ? styled.errorTextarea
                    : styled.textarea
                }
                as='textarea'
                type='text'
                id='description'
                name='description'
                placeholder={t('create.placeholderDescription')}
              />
              {errors.description && touched.description ? (
                <TextError>{errors.description}</TextError>
              ) : null}
            </div>

            <Button title='Create' type='submit' />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { CreateForm };
