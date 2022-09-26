import { forwardRef, ReactNode } from "react";
import styles from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
}

const SectionComponent = ({ children }: SectionProps, ref) => (
  <section className={styles.Section} ref={ref}>
    {children}
  </section>
);

const Section = forwardRef(SectionComponent);

export default Section;
