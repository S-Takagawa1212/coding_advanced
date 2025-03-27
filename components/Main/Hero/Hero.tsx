"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel-fade slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className={`active ${styles.carouselButtonDesign}`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className={`${styles.carouselButtonDesign}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className={`${styles.carouselButtonDesign}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/images/food.jpg" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/food2.jpg" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/food3.jpg" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <style jsx>{`
          .carousel-indicators .active {
            background-color: #007bff !important;
          }
        `}</style>
        ;
      </div>
    </>
  );
}
