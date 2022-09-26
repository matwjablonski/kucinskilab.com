import Hero from '@components/Hero';
import ScrollDown from '@components/ScrollDown';
import Layout from '@layouts/Main'
import { useIntl } from 'react-intl';

export default function Home({ allPostsData }) {
  const intl = useIntl();

  return (
    <Layout page="home">
      <Hero />
      <ScrollDown />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      
    }
  }
}
