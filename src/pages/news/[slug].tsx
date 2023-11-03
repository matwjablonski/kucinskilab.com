import Page from '@components/Page'
import Layout from '@layouts/Main'
import NewsHero from '@components/PageHero';
import LabImage from '@public/images/lab.webp';
import Container from '@components/Container';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { fetchEntries } from '../../contentful';
import { ParsedUrlQuery } from 'querystring';
import Content from '@components/Content';

const NewsPage = ({ data }) => {
  console.log(data);
  return (
    <Layout page="news">
      <Page>
        <NewsHero image={LabImage} />
        <Container>
          <Content title={data.title} content={data.content} publicationDate={data.publicationDate}/>
        </Container>
      </Page>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
  const { slug } = context.params
  const pageDataRes = await fetchEntries({
    content_type: 'news',
    'fields.slug': slug,
    include: 2,
  });

  const newsData = await pageDataRes.data.map(p => p.fields).shift();

  return {
    props: {
      data: newsData,
    }
  }
}

export default NewsPage
