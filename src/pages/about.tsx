import Layout from '@layouts/Main'
import Page from '@components/Page';
import { GetServerSideProps } from 'next';
import { fetchEntries } from '../contentful';
import Container from '@components/Container';
import AboutHero from '@components/AboutHero';
import Content from '@components/Content';


const AboutPage = ({ data }) => {
  return (
    <Layout page="about">
      <Page>
        <AboutHero />
        <Container>
          <Content title={data.title} content={data.about} />
        </Container>
      </Page>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageDataRes = await fetchEntries({
    content_type: 'aboutPage',
    include: 2,
  });

  const pageData = await pageDataRes.data.map(p => p.fields).shift();

  return {
    props: {
      data: pageData,
    }
  }
}

export default AboutPage;
