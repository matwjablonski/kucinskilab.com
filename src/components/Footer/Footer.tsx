import { memo } from "react";
import styles from './Footer.module.scss';

const Footer = memo(() => {
  const showYear = () => {
    const currentYear = new Date().getFullYear();

    if (currentYear === 2022) {
      return currentYear;
    }

    return `2022 - ${currentYear}`
  }
  return (
    <footer className={styles.Footer}>
     <section className={styles.ContactData}>
      <p><strong>dr. Krzysztof Kuciński</strong></p>
      <p>Department of Chemistry and Technology of Silicon Compounds</p>
      <p>Faculty of Chemistry</p>
      <p>Adam Mickiewicz University in Poznan</p>
      <p><strong>Email: </strong><a href="mailto:kucinski.k@amu.edu.pl">kucinski.k@amu.edu.pl</a></p>
     </section>
     <section className={styles.CopyData}>
      @{showYear()} Copyrights by Krzysztof Kuciński
     </section>
    </footer>
  )
})

export default Footer;