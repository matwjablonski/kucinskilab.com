import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps {
  buttonType: 'button' | 'link';
  label: string;
  to: string;
}

const Button = ({ buttonType, label, to }: ButtonProps) => {

  if (buttonType === 'link') {
    return (
      <Link href={to}>
        <a className={styles.Button}>{label}</a>
      </Link>
    )
  }

  return null;
}

export default Button;
