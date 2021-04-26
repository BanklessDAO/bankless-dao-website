import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'

import CardFormSection from 'src/components/pages/Claim/CardForm'

const pageMeta: PageMetaProps = {
  title: 'Claim BANK Tokens | Bankless DAO',
  description:
    'Connect your Ethereum wallet to redeem and claim your BANK community tokens.',
  url: 'https://www.bankless.community/claim',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return <CardFormSection />
}
export default Page
