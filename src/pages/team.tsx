import Container from '@components/Container'
import Page from '@components/Page'
import Layout from '@layouts/Main'
import TeamHero from '@components/PageHero'
import SiImage from '@public/images/si.webp';
import { GetServerSideProps } from 'next';
import { fetchEntries } from '../contentful';
import styles from '@styles/pages/Team.module.scss';
import TeamMember from '@components/TeamMember';

const TeamPage = ({ data }) => {
  return (
    <Layout page="team">
      <Page>
        <TeamHero image={SiImage} />
        <Container>
          <div className={styles.Page}>
            <h2 className={styles.Title}>My Team</h2>
            <div>
              {data.map(teamMember => (
                <TeamMember 
                  key={teamMember.name}
                  name={teamMember.name}
                  description={teamMember.description}
                  image={teamMember.image}
                />
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
    content_type: 'teamMember',
    include: 2,
  });

  const teamMembersData = await pageDataRes.data.map(p => p.fields);

  return {
    props: {
      data: teamMembersData,
    }
  }
}

export default TeamPage;
