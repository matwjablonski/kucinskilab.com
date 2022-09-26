import { ReactNode } from "react";
import styles from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <section className={styles.Section}>
    {children}
  </section>
);

export default Section;
