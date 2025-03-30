"use client";

import Image from "next/image";

import FramerMotionWrapper from "../../Wrappers/framerMotionWrapper";

export default function StoreInfo() {
  return (
    <div className="container">
      <FramerMotionWrapper>
        <div className="bg-black text-white container mt-3">
          <div className="row">
            <div className="col-12 p-3 col-md-6">
              <h4 className="pt-3 ps-2">Address</h4>
              <p>681 XXXX Drive. XXXXX XXXX #01 - 06 000000 Opening Hours</p>
              <h4 className="ps-2">Mondays - Friday: 10am - 9pm</h4>
              <p>Saturdays, Sundays & Public Holidays: 9am- 9pm</p>
            </div>
            <div className="col-md-6 p-0">
              <div className="ratio ratio-4x3">
                <Image
                  src="/images/barista.jpg"
                  alt=""
                  fill
                  className="p-0 p-md-2"
                />
              </div>
            </div>
          </div>
        </div>
      </FramerMotionWrapper>
    </div>
  );
}
