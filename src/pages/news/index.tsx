import Page from '@components/Page';
import Layout from '@layouts/Main';
import NewsHero from '@components/PageHero';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Container from '@components/Container';
import LabImage from '@public/images/lab.webp';
import styles from '@styles/pages/News.module.scss'
import { fetchEntries } from '../../contentful';
import { GetServerSideProps } from 'next';
import SingleNews from '@components/SingleNews';

const News = ({ data }) => {
  return (
    <Layout page="news">
      <Page>
        <NewsHero image={LabImage} />
        <Container>
          <div className={styles.Page}>
            <div className={styles.Content}>
              <h2 className={styles.Title}>News</h2>
              <div>
                {data.map(article => (
                  <SingleNews key={article.title} {...article} />
                ))}
              </div>
            </div>
            <div className={styles.Twitter}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="SiRCH_Kucina"
                // @ts-ignore-next-line
                width="100%"
                options={{ height: 900 }}
              />
            </div>
          </div>
        </Container>
      </Page>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageDataRes = await fetchEntries({
    content_type: 'news',
    include: 2,
  });

  const newsData = await pageDataRes.data.map(p => p.fields);

  return {
    props: {
      data: newsData,
    }
  }
}

export default News;
