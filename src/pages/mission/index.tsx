import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'

import BodySection from 'src/components/pages/Mission/Body'

const pageMeta: PageMetaProps = {
  title: 'Bankless DAO Mission | Bankless DAO',
  description: 'The mission for Bankless DAO.',
  url: 'https://www.bankless.community/mission',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return <BodySection />
}
export default Page
