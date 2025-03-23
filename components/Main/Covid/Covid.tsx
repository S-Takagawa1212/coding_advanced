"use client"

import CovidDetail from "./CovidDetail";


export default function Covid() {
type CovidSection = {
  title: string;
  covidMeasuresList: string[];
};

const covidData: CovidSection[] = [
  {
    title: "衛生面に関して",
    covidMeasuresList: [
      "マスクを着用しての接客",
      "出勤前の検温の徹底",
      "レジカウンターやドリンク受け渡し口等への飛沫防止ガードの設置",
      "より頻度の高い手洗いの励行",
      "テーブルにお客様用の消毒用アルコールの設置",
      "従業員間の距離確保のため、休憩や研修時の客席利用",
    ],
  },
  {
    title: "お客様へのご協力のお願い",
    covidMeasuresList: [
      "店内では、飲食時以外のマスク着用をお願いいたします",
      "入店時の手指の消毒にご協力ください",
      "レジに並ぶ際、目安を示すフロアステッカーに沿った列感覚の確保にご協力ください",
      "多数でお越しの際は、お一人がまとめてご注文願います。(混雑時に入場制限をする場合がございます)",
      "発熱や体調不良の際は、ご入店をお控えください",
    ],
  },
  {
    title: "サービスに関して",
    covidMeasuresList: [
      "直接お渡しする商品の提供、金銭授受時にグローブの着用",
      "ドリンクやフードのサンプリング中止",
      "地域活動・イベントの中止",
      "混雑時間帯の客席の譲り合いへのご協力お願いの実施",
      "店内設置しているミルク、はちみつ、パウダー類の一時引き下げ",
      "混雑状況に応じたドライブスルーサービスの一時停止や店内客席利用の制限",
    ],
  },
];

    return (

    <>
        <h1>新型コロナウイルスに対する取り組みの最新情報をご案内</h1>
        {covidData.map((section, index) => (
        <CovidDetail
            key={index}
            title={section.title}
            covidMeasuresList={section.covidMeasuresList}
        />
        ))}
    </>
    );



}
