import Button from "@components/Button";
import Section from "@components/Section";
import { forwardRef } from "react";
import styles from './ProjectSection.module.scss';

const ProjectSectionComponent = ({}, ref) => (
  <Section ref={ref}>
    <div className={styles.Project}>
      <div className={styles.ProjectContent}>
        <h2 className={styles.ProjectTitle}>Sonata Project</h2>
        <p className={styles.ProjectDescription}>The project entitled “Synthesis of Organosilicon Compounds - From Classical Catalysis to Electrocatalysis” aims to develop novel and efficient synthetic methods, that will enable the selective construction of organosilicon derivatives, fully exploiting the enormous potential of the Earth-abundant 3d metal coordination compounds (Cu, Ni) and electrochemistry (electrosynthesis/electrocatalysis).</p>
        <Button buttonType="link" to="/" label="About Sonata Project" />
      </div>
    </div>
  </Section>
)

const ProjectSection = forwardRef(ProjectSectionComponent);

export default ProjectSection;
