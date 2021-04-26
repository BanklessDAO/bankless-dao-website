import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'

import CardFormSection from 'src/components/pages/Claim/CardForm'

const pageMeta: PageMetaProps = {
  title: 'Claim BANK',
  description: 'This is the claim page',
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
