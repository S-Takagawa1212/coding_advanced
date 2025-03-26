"use client";

import Image from "next/image";

export default function StoreList() {
  type StoreList = {
    id: string;
    imageURL: string;
    address: string;
  };

  const Stores: StoreList[] = [
    {
      id: crypto.randomUUID(),
      imageURL: "/images/restaurant.jpg",
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
      <div className="container pt-3">
        <div className="">
          <h4 className="text-center">店舗一覧</h4>
        </div>
        <div className="d-flex">
          {Stores.map((store) => (
            <div
              key={store.id}
              className="ratio ratio-1x1 m-3 position-relative"
            >
              <div className="w-100 h-100">
                <Image
                  src={store.imageURL}
                  alt=""
                  fill
                  className="rounded-circle"
                />
              </div>
              <div>
                <p className="">
                  <i className="bi bi-geo-alt-fill"></i>
                  {store.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
