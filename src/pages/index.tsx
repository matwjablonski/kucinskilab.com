import Hero from '@components/Hero';
import ProjectSection from '@components/ProjectSection';
import ScrollDown from '@components/ScrollDown';
import Layout from '@layouts/Main'
import { useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';


export default function Home({ allPostsData }) {
  let scrollInProgress = false;
  let previousScrollPos = 0;

  const intl = useIntl();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPos = window.scrollY;
    const scrollPoint = window.innerHeight / 5;

    const sectionIndex = Math.floor(scrollPos / windowHeight);
    const currentSectionScrollPos = Math.floor(scrollPos % windowHeight);

    let nextSection = sectionIndex + 1;

    if (previousScrollPos > scrollPos) {
      nextSection = sectionIndex - 1;
    }
    
    if (currentSectionScrollPos > scrollPoint) {
      if (!scrollInProgress && nextSection >= 0 && nextSection < 2) {
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
      <Hero />
      <ProjectSection />
      <ScrollDown />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      
    }
  }
}
