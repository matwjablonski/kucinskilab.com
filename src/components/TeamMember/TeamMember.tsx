import prepareAssetUrl from '@utils/prepareAssetUrl';
import Image from 'next/image';
import styles from './TeamMember.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className={styles.p}>{children}</p>
  }
};

const TeamMember = ({ name, image, description }) => (
  <div className={styles.TeamMember}>
    <div className={styles.Image}>
      <Image src={prepareAssetUrl(image.fields.file.url)} layout="fill" alt={name} />
    </div>
    <div>
      <h3 className={styles.Name}>{name}</h3>
      {documentToReactComponents(description, options)}
    </div>
  </div>
)

export default TeamMember;
