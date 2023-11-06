import Layout from '@layouts/Main'
import Page from '@components/Page';
import { GetServerSideProps } from 'next';
import { fetchEntries } from '../contentful';
import Container from '@components/Container';
import ProjectHero from '@components/PageHero';
import Content from '@components/Content';
import LabImage from '@public/images/project.webp';

const SonataProjectPage = ({ data }) => {
  return (
    <Layout page="sonata">
      <Page>
        <ProjectHero image={LabImage} />
        <Container>
          <Content title={data.title} content={data.description} />
        </Container>
      </Page>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageDataRes = await fetchEntries({
    content_type: 'sonataProjectPage',
    include: 2,
  });

  const pageData = await pageDataRes.data.map(p => p.fields).shift();

  return {
    props: {
      data: pageData,
    }
  }
}

export default SonataProjectPage;
