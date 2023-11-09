import Image from 'next/image';
import styles from './AcademicCollaboration.module.scss';
import prepareAssetUrl from '@utils/prepareAssetUrl';

const AcademicCollaboration = ({ name, university, universityLogo, photo }) => {
  const parsedName = () => {
    const nameAsArray = name.split(' ');
    const nameComponents = nameAsArray.map((str, index) => {
      if (index === nameAsArray.length - 1) {
        return <strong>{str}</strong>        
      }

      return <span>{str} </span>;
    });

    return <>
      {nameComponents}
    </>
  }
  return (
    <div className={styles.Academic}>
      <div className={styles.Photo}>
        <Image src={prepareAssetUrl(photo.fields.file.url)} alt="" layout="fill" />
      </div>
      <h3 className={styles.Name}>{parsedName()}</h3>
      <div className={styles.Org}>
        <div className={styles.OrgImage}>
          <Image src={prepareAssetUrl(universityLogo.fields.file.url)} alt="" layout="fill" />
        </div>
        <p className={styles.OrgName}>{university}</p>
      </div>
    </div>
  )
}

export default AcademicCollaboration;
