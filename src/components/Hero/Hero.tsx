import Section from "@components/Section";
import styles from './Hero.module.scss';
import Image from 'next/image';
import Logo from '@public/images/logo.webp';
import Button from "@components/Button";
import { forwardRef } from "react";

const HeroComponent = ({}, ref) => (
  <Section ref={ref}>
    <div className={styles.Hero}>
      <div className={styles.HeroContent}>
        <div className={styles.HeroLogo}>
          <Image src={Logo} />
        </div>
        <p className={styles.HeroDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, blanditiis sunt, est inventore ex minus rem expedita ipsa fugiat, suscipit perferendis exercitationem numquam nobis cupiditate quia.</p>
        <Button buttonType="link" to="/" label="Read more" />
      </div>
    </div>
  </Section>
)

const Hero = forwardRef(HeroComponent);

export default Hero;
