import AboutSection from '@components/AboutSection';
import Hero from '@components/Hero';
import ProjectSection from '@components/ProjectSection';
import ScrollDown from '@components/ScrollDown';
import Layout from '@layouts/Main'
import { fetchEntries } from '../contentful';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';


const Home = ({ data: { heroText, projectTitle, projectDescription, projectButtonLabel, aboutText } }) => {
  let scrollInProgress = false;
  let previousScrollPos = 0;

  const intl = useIntl();

  const handleScroll = () => {
    const availableSections = 3;
    const windowHeight = window.innerHeight;
    const scrollPos = window.scrollY;
    const scrollPoint = window.innerHeight / 5;

    if (window.innerWidth <= 1152) {
      return null;
    }

    const sectionIndex = Math.floor(scrollPos / windowHeight);
    const currentSectionScrollPos = Math.floor(scrollPos % windowHeight);

    let nextSection = sectionIndex + 1;

    if (previousScrollPos > scrollPos) {
      nextSection = sectionIndex - 1;
    }
    
    if (currentSectionScrollPos > scrollPoint) {
      if (!scrollInProgress && nextSection >= 0 && nextSection < availableSections) {
        window.scroll({
          top: nextSection * windowHeight,
          left: 0,
          behavior: 'smooth'
        })
        scrollInProgress = true;
      }
    } else {
      scrollInProgress = false;
    }
    previousScrollPos = scrollPos;
  }

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <Layout page="home">
      <Hero text={heroText} />
      <ProjectSection title={projectTitle} text={projectDescription} label={projectButtonLabel} />
      <AboutSection content={aboutText} />
      <ScrollDown />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageDataRes = await fetchEntries({
    content_type: 'homePage',
    include: 2,
  });

  const pageData = await pageDataRes.data.map(p => p.fields).shift();

  return {
    props: {
      data: pageData,
    }
  }
}

export default Home;
