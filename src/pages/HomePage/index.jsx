import SlideImg1 from "../../images/hero.jpg";
import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <> 
    <div className={styles.hero}>
      <h1>Chat-FC</h1>
      <img src={ SlideImg1} alt={`baner`} />
    </div>

    </>
  );
}
export default HomePage;