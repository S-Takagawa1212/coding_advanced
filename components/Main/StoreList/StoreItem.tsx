import Image from "next/image";

type props = {
  id: string;
  imageURL: string;
  address: string;
};

export default function StoreItem({ id, imageURL, address }: props) {
  return (
    <>
      <div key={id} className="ratio ratio-1x1 m-3 position-relative">
        <div className="w-100 h-100">
          <Image src={imageURL} alt="" fill className="rounded-circle" />
        </div>
        <div>
          <p className="">
            <i className="bi bi-geo-alt-fill"></i>
            {address}
          </p>
        </div>
      </div>
    </>
  );
}
