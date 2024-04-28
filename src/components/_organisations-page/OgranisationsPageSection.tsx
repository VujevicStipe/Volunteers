import BannerComponent from '../banner/BannerComponent'
import styles from './OgranisationsPageSection.module.css'

const OgranisationsPageSection = () => {
const title = 'Connect with Other Organizations'
  return (
    <div className={styles.organisationsPageSection}>
        
      <BannerComponent pic="organisations" title={title} />
    </div>
  )
}

export default OgranisationsPageSection