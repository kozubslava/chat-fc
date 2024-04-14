import SlideImg1 from "../../images/hero.jpg";
import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <> 
    <div className={styles.hero}>
      <img src='https://envybox.io/blog/wp-content/uploads/2020/04/%D0%92%D0%B8%D0%B4%D1%8B-%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82%D0%BE%D0%B2.png' alt={`baner`} />
    </div>

    </>
  );
}
export default HomePage;