import Head from 'next/head'
import styles from './Main.module.scss'
import { ReactNode } from 'react'
import { useIntl } from 'react-intl';
import Footer from '@components/Footer';
import Header from '@components/Header';

interface MainLayoutProps {
  children: ReactNode;
  page: 'home' | 'about' | 'team' | 'news';
}

const MainLayout = ({ children, page }: MainLayoutProps) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.page}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={formatMessage({ id: `page.${page}.head.description`})}
        />
        <meta name="og:title" content={formatMessage({ id: `page.${page}.head.title`})} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{formatMessage({ id: `page.${page}.head.title`})} :: {formatMessage({ id: `page.${page}.head.subtitle`})}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout;
