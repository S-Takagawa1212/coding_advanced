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
        }
      })
      .catch((err) => {
        console.log("bootstrapの読み込み失敗", err);
      });
  }, []);

  return null;
}
