import '../styles/global.css'
import { IntlProvider } from 'react-intl'
import en from '@lang/en.json';
import { useRouter } from 'next/router';

const messages = {
  en,
}

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default App;