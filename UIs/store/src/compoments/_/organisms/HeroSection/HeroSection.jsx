import React from "react";
import PropTypes from "prop-types";
import appImage from "../../../../images/main-app-icon.png";
import styles from "./HeroSection.module.css";
import StarRatings from "react-star-ratings";

const HeroSection = props => (
  <section className={styles.heroSection}>
    <div className={styles.imageSection}>
      <picture className={styles.heroImageWrapper}>
        <img className={styles.heroImage} src={props.imageSrc} alt={"hero"} />
      </picture>
    </div>
    <header className={styles.infoSection}>
      <h1 className={styles.header}>{props.header}</h1>
      <h2 className={styles.subHeader}>{props.subHeader}</h2>
      <StarRatings
        rating={props.starRating}
        starDimension={12}
        starSpacing={1}
        starRatedColor="yellow"
        numberOfStars={5}
        name="rating"
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Launch this Cito</button>
      </div>
    </header>
  </section>
);

HeroSection.propTypes = {
  imageSrc: PropTypes.string,
  header: PropTypes.string,
  subHeader: PropTypes.string,
  starRating: PropTypes.number,
  ctaButtonText: PropTypes.string
};

HeroSection.defaultProps = {
  imageSrc: appImage,
  header: "Adobe Acrobat Reader for PDF",
  subHeader: "Adobe Inc.",
  starRating: 4.5,
  ctaButtonText: "Launch this Cito"
};

export default HeroSection;
