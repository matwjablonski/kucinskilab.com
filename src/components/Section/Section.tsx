import { forwardRef, ReactNode } from "react";
import cx from 'classnames';
import styles from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
  withTopSpacing?: boolean;
  fullHeight?: boolean;
}

const SectionComponent = ({ children, withTopSpacing = false, fullHeight = false }: SectionProps, ref) => (
  <section className={cx(styles.Section, withTopSpacing && styles.SectionWithTop, fullHeight && styles.SectionFullHeight)} ref={ref}>
    {children}
  </section>
);

const Section = forwardRef(SectionComponent);

export default Section;
