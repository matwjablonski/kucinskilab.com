import Section from "@components/Section";
import styles from './Hero.module.scss';
import Image from 'next/image';
import Logo from '@public/images/logo.webp';
import Button from "@components/Button";
import { forwardRef } from "react";

interface HeroProps {
  text: string;
}

const HeroComponent = ({ text }: HeroProps, ref) => (
  <Section ref={ref}>
    <div className={styles.Hero}>
      <div className={styles.HeroContent}>
        <div className={styles.HeroLogo}>
          <Image src={Logo} alt="Logotype of Kucinski Lab" />
        </div>
        <p className={styles.HeroDescription}>{text}</p>
        <Button buttonType="link" to="/" label="Read more" />
      </div>
    </div>
  </Section>
)

const Hero = forwardRef(HeroComponent);

export default Hero;
