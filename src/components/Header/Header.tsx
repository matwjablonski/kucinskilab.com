import Image from "next/image";
import Logo from '@public/images/logo.webp';
import { memo } from "react";
import styles from './Header.module.scss';
import Link from "next/link";
import Nav from "@components/Nav";

const Header = memo(() => (
  <header className={styles.Header}>
    <Link href="/">
      <a>
        <Image src={Logo} height={47} width={130} alt="Logotype of Kucinski Lab" />
      </a>
    </Link>
    <Nav />
  </header>
));

export default Header;
