import Container from '@components/Container';
import Page from '@components/Page';
import Layout from '@layouts/Main';
import CollaborationsnHero from '@components/PageHero';
import CollaborationImage from '@public/images/collaboration.webp';
import styles from '@styles/pages/Collaborations.module.scss';
import { GetServerSideProps } from 'next';
import { fetchEntries } from '../contentful';
import AcademicCollaboration from '@components/AcademicCollaboration';

const CollaborationsPage = ({ data }) => {
  return (
    <Layout page="collaboration">
      <Page>
        <CollaborationsnHero image={CollaborationImage} />
        <Container>
          <div className={styles.Collaborations}>
            <h2 className={styles.Title}>Collaborations</h2>
            <div className={styles.List}>
              {data.map(collaboration => (
                <AcademicCollaboration {...collaboration} key={collaboration.name} />
              ))}
            </div>
          </div>
        </Container>
      </Page>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageDataRes = await fetchEntries({
    content_type: 'collaboration',
    include: 2,
  });

  const collaborationsData = await pageDataRes.data
    .map(p => p.fields);

  return {
    props: {
      data: collaborationsData,
    }
  }
}

export default CollaborationsPage;
