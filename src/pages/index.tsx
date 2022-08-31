import Layout from '@layouts/Main'
import { useIntl } from 'react-intl';

export default function Home({ allPostsData }) {
  const intl = useIntl();

  return (
    <Layout page="home">

    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      
    }
  }
}
