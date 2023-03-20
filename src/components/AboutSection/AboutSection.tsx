import Section from "@components/Section";
import Image from "next/image";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Document} from '@contentful/rich-text-types';
import styles from './AboutSection.module.scss';
import KImage from '@public/images/krzysztof.webp';
import Button from "@components/Button";

interface AboutProps {
  content: Document;
}

const AboutSection = ({ content }: AboutProps) => (
  <Section>
    <div className={styles.About}>
      <div className={styles.AboutContent}>
        <div className={styles.AboutBox}>
          <h2 className={styles.AboutTitle}>Krzysztof Kuciński</h2>
          <div className={styles.AboutInternal}>
            <div className={styles.AboutImage}>
              <Image src={KImage} layout="fill" objectFit="cover" />
            </div>
            <article className={styles.AboutText}>
              {documentToReactComponents(content, {})}
              <Button label="Read more" buttonType="link" to="/about"/>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default AboutSection;
