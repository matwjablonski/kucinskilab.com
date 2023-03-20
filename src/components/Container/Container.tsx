import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.Container}>
    {children}
  </div>
}

export default Container;