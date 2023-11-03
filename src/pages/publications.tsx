import Container from '@components/Container';
import Page from '@components/Page';
import Layout from '@layouts/Main'
import PublicationHero from '@components/PageHero';
import SiImage from '@public/images/si.webp';
import { fetchEntries } from '../contentful';
import { GetServerSideProps } from 'next';
import Publication from '@components/Publication';
import styles from '@styles/pages/Publications.module.scss';

const PublicationsPage = ({ data }) => {
  return (
    <Layout page="publications">
      <Page>
        <PublicationHero image={SiImage} />
        <Container>
          <div className={styles.Publications}>
          <h2 className={styles.Title}>Publications</h2>
          {Object.keys(data).reverse().map((year) => (
            <section key={year} className={styles.YearSection}>
              <h3 className={styles.Year}>{year}</h3>
              {data[year].map(publication => <Publication {...publication} key={publication.doi} />)}
            </section>
          ))}
          </div>
        </Container>
      </Page>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageDataRes = await fetchEntries({
    content_type: 'publication',
    include: 2,
  });

  const publicationsData = await pageDataRes.data
    .map(p => p.fields)
    .sort((a, b) => a.publicationYear < b.publicationYear)
    .reduce((acc, curr) => {
      if (curr.publicationYear in acc) {
        acc[curr.publicationYear].push(curr);
      } else {
        acc[curr.publicationYear] = [curr];
      }

      return acc;
    }, {});

  return {
    props: {
      data: publicationsData,
    }
  }
}

export default PublicationsPage;
