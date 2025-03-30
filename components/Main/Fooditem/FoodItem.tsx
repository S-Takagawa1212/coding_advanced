"use client";

import Image from "next/image";

type MenuData = {
  id: string;
  title: string;
  imageURL: string;
  explanation: string;
};

const Menus: MenuData[] = [
  {
    id: crypto.randomUUID(),
    title: "Signature Food",
    imageURL: "/images/food.jpg",
    explanation:
      "サーモンは刺身やカルパッチョで食べるのが実味しいですが、リッチな気分になれるサーモンステーキがおすすめです。サーモンの美味しさを引き立てる2種のソースも絶品です！",
  },
  {
    id: crypto.randomUUID(),
    title: "Our Coffee",
    imageURL: "/images/barista.jpg",
    explanation:
      "当店のコーヒー豆が厳選して世界中から買い付けています。そして、そのコーヒー豆のおいしさを最大限に引き出すために自社のロータリーで焙煎せいています。",
  },
  {
    id: crypto.randomUUID(),
    title: "Our Food",
    imageURL: "/images/food3.jpg",
    explanation:
      "当店は何よりまずは衛生管理に気をつけています。「安全・安心」をお届けするために日々継続的な努力を惜しみません",
  },
];
export default function FoodItem() {
  return (
    <>
      {Menus.map((menu) => (
        <div key={menu.id} className="container">
          <h3 className="mt-5 mb-3">{menu.title}</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="ratio ratio-4x3">
                <Image src={menu.imageURL} alt="" fill className="col-md-6" />
              </div>
            </div>
            <div className="col-md-6">
              <p className="p-3">{menu.explanation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
