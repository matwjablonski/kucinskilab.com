import Image, { StaticImageData } from 'next/image';
import styles from './PageHero.module.scss';
import { FC } from 'react';

const PageHero: FC<{ image: StaticImageData }> = ({ image }) => {
  return <div className={styles.PageHero}>
    <Image src={image} layout="fill" objectFit="cover" />
  </div>
}

export default PageHero;
