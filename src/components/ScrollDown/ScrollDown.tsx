import ArrowIcon from '@public/icons/arrow-big.svg';
import cx from 'classnames';
import Image from 'next/image';
import { memo } from 'react';
import styles from './ScrollDown.module.scss';

interface ScrollDownProps {
  isHidden?: boolean;
}

const ScrollDown = memo(
  ({ isHidden }: ScrollDownProps) => {
    return (
      <button className={cx(styles.ScrollDown, isHidden && styles.isHidden)}>
        <Image src={ArrowIcon} />
      </button>
    )
  }
)

export default ScrollDown;
