import AboutSection from '@components/AboutSection';
import Hero from '@components/Hero';
import ProjectSection from '@components/ProjectSection';
import ScrollDown from '@components/ScrollDown';
import Layout from '@layouts/Main'
import { fetchEntries } from '../contentful';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import News from '@components/News';
import { formatDate } from '@utils/formatDate';

const Home = ({ data: { heroText, projectTitle, projectDescription, projectButtonLabel, aboutText }, news }) => {
  let scrollInProgress = false;
  let previousScrollPos = 0;

  const [isScrollHidden, setIsScrollHidden] = useState(false);

  const intl = useIntl();

  const handleScroll = () => {
    const availableSections = 4;
    const windowHeight = window.innerHeight;
    const scrollPos = window.scrollY;
    const scrollPoint = window.innerHeight / 5;

    if (window.innerWidth <= 1152) {
      return null;
    }

    if (scrollPos > ((availableSections - 1) * windowHeight)) {
      setIsScrollHidden(true);
    } else {
      setIsScrollHidden(false);
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
      <News news={news} />
      <AboutSection content={aboutText} />
      <ScrollDown isHidden={isScrollHidden} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageDataRes = await fetchEntries({
    content_type: 'homePage',
    include: 2,
  });

  const newsRes = await fetchEntries({
    content_type: 'news',
    include: 2,
    limit: 6,
    order: '-fields.publicationDate',
    'fields.publicationDate[lte]': new Date(),
  });

  const pageData = await pageDataRes.data.map(p => p.fields).shift();

  const news = await newsRes.data.map(p => ({
    ...p.fields,
    createdDate: formatDate({
      dateObject: p.fields?.createdDate,
      formatString: 'dd MMMM yyyy'
    })
  }));

  return {
    props: {
      data: pageData,
      news,
    }
  }
}

export default Home;
