import { GetStaticProps } from 'next'
import { PageMetaProps } from '../components/global/Head'

const pageMeta: PageMetaProps = {
  title: 'Homepage',
  description: 'This is the homepage',
  url: 'https://www.bankless.community/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Home = (): JSX.Element => <div>Homepage</div>

export default Home
