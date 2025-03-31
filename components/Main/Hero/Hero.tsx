"use client";

import styles from "./Hero.module.css";

// FIXME
// bootstrapとNextの<Image>タグのfilの相性が悪いため<image>を使用
// bootstrap.carouselとnextのSSRの相性も悪い模様
// 現在、インジケータと<>ボタンを明示的に初期化する処理をBootstrapClient.tsxに記述しているので、責務分離の観点からここに移植すべきです。
// そもそもbootstrapのcarousel以外のライブラリで実装すべきかもしれない

export default function Hero() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel-fade slide  position-relative"
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className={`${styles.carouselButtonDesign}`}
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-12 col-md-6 p-0">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="/images/food.jpg"
                />
              </div>
              <div className="col-12 d-none d-md-flex col-md-6 p-0">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="/images/food2.jpg"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-12 col-md-6 p-0 h-100">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="/images/food3.jpg"
                />
              </div>
              <div className="col-12 d-none d-md-flex col-md-6 p-0">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="/images/food4.jpg"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-12 col-md-6 p-0">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="/images/restaurant.jpg"
                />
              </div>
              <div className="col-12 d-none d-md-flex col-md-6 p-0">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="/images/restaurant2.jpg"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-12 col-md-6 p-0">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="/images/interior.jpg"
                />
              </div>
              <div className="col-12 d-none d-md-flex col-md-6 p-0">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="/images/restaurant3.jpg"
                />
              </div>
            </div>
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
        <style jsx>
          {/* bootstrapのcarouselによる動的なactive要素の追加は、jsxのclassName={``}記法の中には書けない。自前でisStateによる状態管理を実装し、三項演算子で分岐判断する必要がある。それではbootstrapを使う意味が薄いため、active
          に関する処理のみ<styles>でスタイルをあてる。 */}
          {/* TODO　スタイルをmodule.cssに切り出す*/}
          {`
          .carousel-indicators .active {
            background-color: #007bff !important;
          }
          .carousel-control-prev,
          .carousel-control-next {
            filter: brightness(0) saturate(100%) invert(30%) sepia(90%)
              saturate(1000%) hue-rotate(190deg);
            width: 3rem;
            height: 100%;
          }

          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            width: 4rem;
            height: 4rem;
            background-size: 100% 100%;
          }

          #carouselExampleIndicators {
            height: 500px;
          }
          .carousel-inner,
          .carousel-item,
          .row {
            height: 100%;
          }
          img {
            height: 100%;
            width: 100%;
          }
          // bootstrapのmdは768px
          @media (max-width: 767px) {
            img {
              padding: 5% 10%;
            }
          }
        `}</styles>
        ;
      </div>
    </>
  );
}
