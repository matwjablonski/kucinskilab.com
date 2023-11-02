import Layout from '@layouts/Main'
import Page from '@components/Page';
import { GetServerSideProps } from 'next';
import { fetchEntries } from '../contentful';
import Container from '@components/Container';
import AboutHero from '@components/PageHero';
import Content from '@components/Content';
import KImage from '@public/images/krzysztof.webp';

const AboutPage = ({ data }) => {
  return (
    <Layout page="about">
      <Page>
        <AboutHero image={KImage} />
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
