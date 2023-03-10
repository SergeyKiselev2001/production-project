import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reload = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [])}>
      <p>{t('Ошибка страницы')}</p>
      <button onClick={reload}>{t('Перезагрузить')}</button>
    </div>
  )
}

export default PageError
