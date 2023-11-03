import Image from "next/image";
import cx from 'classnames';
import Link from "next/link";
import AtomIcon from '@public/icons/atom.svg';
import AtomActiveIcon from '@public/icons/atom-active.svg';
import styles from './Nav.module.scss';
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(prevValue => !prevValue);
  }

  return (
    <nav className={styles.Nav}>
      <div className={styles.NavMobileBtn} onClick={handleOpenMenu}>
        <Image src={isOpen ? AtomActiveIcon : AtomIcon} layout="fill" />
      </div>
      <ul className={cx(styles.NavList, isOpen && styles.NavIsOpen)}>
        <li className={styles.NavItem}>
          <Link href="/about">
            <a>About me</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/">
            <a>Sonata Project</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/publications">
            <a>Publications</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/team">
            <a>Team</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
