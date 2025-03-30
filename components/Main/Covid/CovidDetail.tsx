import { useState } from "react";

import styles from "./Covid.module.css";

type props = {
  id: string;
  title: string;
  covidMeasuresList: string[];
};

export default function CovidDetail({ id, title, covidMeasuresList }: props) {
  // 親コンポーネントでこのコンポーネントをmapで回しているため、各ループ毎に異なるインスタンスが作成されるため、コンポーネント内のstate管理は一つで良い。
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className={styles.h3} onClick={() => setIsOpen((prev) => !prev)}>
        ◾️{title}
      </h3>
      {/* 受け取った各項目の説明文をliとして展開する */}
      {isOpen &&
        covidMeasuresList.map((covidMeasure, index) => {
          return (
            <li key={`${id}` + `${index}`} className="mb-2">
              ・{covidMeasure}
            </li>
          );
        })}
    </>
  );
}
