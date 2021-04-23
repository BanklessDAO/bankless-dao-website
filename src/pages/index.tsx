import { GetStaticProps } from 'next'

const pageMeta = {
  title: 'Homepage',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Home = (): JSX.Element => <div className="container">Hello</div>

export default Home
