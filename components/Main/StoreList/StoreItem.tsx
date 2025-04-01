import Image from "next/image";

import FramerMotionWrapper from "../../Wrappers/framerMotionWrapper";

type props = {
  id: string;
  imageURL: string;
  address: string;
};

export default function StoreItem({ id, imageURL, address }: props) {
  return (
    <>
      <div key={id} className="ratio ratio-1x1 m-3 position-relative">
        <FramerMotionWrapper>
          <div className="">
            <Image src={imageURL} alt="" fill className="rounded-circle" />
          </div>
          <div>
            <p className="position-absolute top-100 w-100 text-center">
              <i className="bi bi-geo-alt-fill"></i>
              {address}
            </p>
          </div>
        </FramerMotionWrapper>
      </div>
    </>
  );
}
