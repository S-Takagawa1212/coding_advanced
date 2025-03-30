import styles from "./Covid.module.css";

type props = {
  id: string;
  title: string;
  covidMeasuresList: string[];
};

export default function CovidDetail({ id, title, covidMeasuresList }: props) {
  return (
    <>
      <h3 className={styles.h3}>◾️{title}</h3>
      {/* 受け取った各項目の説明文をliとして展開する */}
      {covidMeasuresList.map((covidMeasure, index) => {
        return (
          <li key={`${id}` + `${index}`} className="mb-2">
            ・{covidMeasure}
          </li>
        );
      })}
    </>
  );
}
