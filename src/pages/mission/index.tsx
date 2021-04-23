import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'

const pageMeta: PageMetaProps = {
  title: 'Bankless Mission',
  description: 'This is the mission page',
  url: 'https://www.bankless.community/mission',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => <div>Mission</div>

export default Page
