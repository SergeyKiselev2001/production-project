import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const BugButton = () => {
  const [isError, setIsError] = useState(false)
  const { t } = useTranslation()

  const toggleError = () => {
    setIsError(!isError)
  }

  useEffect(() => {
    if (isError) {
      throw new Error('hahaha0')
    }
  }, [isError])

  return <button onClick={toggleError}>{t('Вызвать ошибку')}</button>
}

export default BugButton
