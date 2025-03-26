"use client";

import StoreItem from "./StoreItem";

export default function StoreList() {
  type StoreList = {
    id: string;
    imageURL: string;
    address: string;
  };

  const Stores: StoreList[] = [
    {
      id: crypto.randomUUID(),
      imageURL: "/images/restaurant2.jpg",
      address: "東京都渋谷区 xxxxx xxxxx",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "/images/restaurant3.jpg",
      address: "千葉県松戸市 xxxxx xxxxx",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "/images/restaurant4.jpg",
      address: "神奈川県横浜市 xxxxx xxxxx",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "/images/restaurant5.jpg",
      address: "埼玉県川越市 xxxxx xxxxx",
    },
  ];

  return (
    <>
      <div className="container pt-3 pb-5 d-none d-md-block">
        <div className="">
          <h4 className="text-center">店舗一覧</h4>
        </div>
        <div className="d-flex">
          {Stores.map((store) => (
            <StoreItem
              key={store.id}
              id={store.id}
              imageURL={store.imageURL}
              address={store.address}
            />
          ))}
        </div>
      </div>
    </>
  );
}
