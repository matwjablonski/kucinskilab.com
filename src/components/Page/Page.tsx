import Section from '@components/Section';
import { FC, PropsWithChildren } from 'react';
import styles from './Page.module.scss';

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Section withTopSpacing fullHeight>
      <div className={styles.Page}>
        {children}
      </div>
    </Section>
  );
}

export default Page;
