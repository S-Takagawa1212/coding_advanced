"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // bootstrapを動的に読み込む
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((bootstrap) => {
        const carouselElement = document.querySelector(
          "#carouselExampleIndicators"
        );
        if (carouselElement) {
          new bootstrap.Carousel(carouselElement, {
            interval: 6000,
            ride: "carousel", //自動再生
          });
          // Bootstrapのcarouselのインジケータと左右矢印がなぜか動かないので明示的に動かす。
          // 試したことは以下の４つ
          // 1.module.cssを削除して、レンダリング時のカスタムcssクラス名変更による影響の検証。カスタムcssを<styles>に移動させる検証も行った。
          // 2.JavaScriptとDOMの連携検証。上記自動再生は問題なく動いていたのでJavaScriptの読み込みは正常に行われている
          // 3.BootStrapの明示的初期化のコメントアウトによdata-bs-carouselとの競合の検証。
          // 4.<Hero>でのハイドレーション検証。最初にuseEffect()でクライアントサイドのレンダリングを保証。
          // FIXME
          // BootstrapとNextの相性問題でどこかでクリックイベントのバブリングが止められている可能性があるので検証すべき
          const carouselInstance = new bootstrap.Carousel(carouselElement);
          const indicators = document.querySelectorAll(
            ".carousel-indicators button"
          );
          indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
              carouselInstance.to(index);
            });
          });

          //　上記と同様の理由で><ボタンにも明示的にイベントリスナーをバインド
          const prevButton = document.querySelector(".carousel-control-prev");
          const nextButton = document.querySelector(".carousel-control-next");

          if (prevButton) {
            prevButton.addEventListener("click", () => {
              carouselInstance.prev();
            });
          }
          if (nextButton) {
            nextButton.addEventListener("click", () => {
              carouselInstance.next();
            });
          }
        }
      })
      .catch((err) => {
        console.log("bootstrapの読み込み失敗", err);
      });
  }, []);

  return null;
}
