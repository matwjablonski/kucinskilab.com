import Section from "@components/Section";
import Image from "next/image";
import styles from './AboutSection.module.scss';
import KImage from '@public/images/krzysztof.webp';
import Button from "@components/Button";

const AboutSection = () => (
  <Section>
    <div className={styles.About}>
      <div className={styles.AboutContent}>
        <div className={styles.AboutBox}>
          <h2 className={styles.AboutTitle}>Krzysztof Kuciński</h2>
          <div className={styles.AboutImage}>
            <Image src={KImage} layout="fill" objectFit="cover" />
          </div>
          <article className={styles.AboutText}>
            <p>Born in Inowrocław, Krzysztof received his M.S. degree from Adam Mickiewicz University in Poznań (AMU) in 2014 under the supervision of Prof. dr. Bogdan Marciniec. His Ph.D. work was done at the same institution under the direction of Prof. dr. Grzegorz Hreczycho. Krzysztof Kuciński has been an assistant professor in the Department of Chemistry and Technology of Silicon Compounds at AMU since March 2019.</p>
            <p>In 2020, he moved to Germany for a postdoctoral fellowship with Prof. dr. Lutz Ackermann. In 2021, he returned and began the project entitled “Synthesis of Organosilicon Compounds - From Classical Catalysis to Electrocatalysis”. His main research interests include organoboron and organosilicon chemistry with a strong emphasis on the sustainability of the processes.</p>
            <Button label="Read more" buttonType="link" to="/"/>
          </article>
        </div>
      </div>
    </div>
  </Section>
)

export default AboutSection;
