import Image from 'next/image';
import KImage from '@public/images/krzysztof.webp';
import styles from './AboutHero.module.scss';

const AboutHero = () => {
  return <div className={styles.AboutHero}>
    <Image src={KImage} layout="fill" objectFit="cover" />
  </div>
}

export default AboutHero;
