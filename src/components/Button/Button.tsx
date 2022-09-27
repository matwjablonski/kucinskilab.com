import Link from 'next/link';
import cx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  buttonType: 'button' | 'link';
  label: string;
  to: string;
  reversed?: boolean;
}

const Button = ({ buttonType, label, to, reversed = false }: ButtonProps) => {

  if (buttonType === 'link') {
    return (
      <Link href={to}>
        <a className={cx(styles.Button, reversed && styles.isReversed)}>{label}</a>
      </Link>
    )
  }

  return null;
}

export default Button;
