import { useTranslations } from "next-intl"

const page = () => {
    const t = useTranslations('Home')
  return (
    <div>{t('title')}</div>
  )
}

export default page