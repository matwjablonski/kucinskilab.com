import Button from "@components/Button";
import Section from "@components/Section";
import { forwardRef } from "react";
import styles from './ProjectSection.module.scss';

interface ProjectSectionProps {
  text: string;
  title: string;
  label: string;
}

const ProjectSectionComponent = ({ title, text, label }: ProjectSectionProps, ref) => (
  <Section ref={ref}>
    <div className={styles.Project}>
      <div className={styles.ProjectContent}>
        <h2 className={styles.ProjectTitle}>{title}</h2>
        <p className={styles.ProjectDescription}>{text}</p>
        <Button buttonType="link" to="/" label={label} />
      </div>
    </div>
  </Section>
)

const ProjectSection = forwardRef(ProjectSectionComponent);

export default ProjectSection;
