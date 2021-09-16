import { GetStaticProps } from 'next'
import { PageMetaProps } from '../components/global/Head'

const pageMeta: PageMetaProps = {
  title: 'Season 2',
  description: '',
  url: 'https://www.bankless.community/season2',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Season2 = (): JSX.Element => {
  // HACK: redirect to Notion
  if (typeof window !== 'undefined')
    window?.location.replace(
      'https://www.notion.so/bankless/Season-2-Launch-7d06aaf56df444d48cd0d551edadebdc'
    )
  return null
}

export default Season2
