import ArrowIcon from '@public/icons/arrow-big.svg';
import Image from 'next/image';
import { memo, useEffect } from 'react';
import styles from './ScrollDown.module.scss';

const ScrollDown = memo(
  () => {
    
  
    return (
      <button className={styles.ScrollDown}>
        <Image src={ArrowIcon} />
      </button>
    )
  }
)

export default ScrollDown;
