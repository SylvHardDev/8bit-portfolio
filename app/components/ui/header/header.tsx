"use client";
import { useState } from "react";

export default function Header() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <header className="flex w-full justify-end p-5">
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={() => setIsShowModal(!isShowModal)}
      >
        <i className="nes-icon trophy"></i>
      </button>

      {isShowModal && (
        <div className="nes-dialog absolute top-24 bg-white z-10">
          <div
            className="flex justify-end"
            onClick={() => setIsShowModal(false)}
          >
            <button>
              <i className="nes-icon close is-small"></i>
            </button>
          </div>
          <div className="p-3 flex items-center flex-col gap-2">
            <p className="title text-sm text-black">
              Contact the Mighty Horde!
            </p>
            <div className="flex items-center justify-center gap-2">
              <a href="#" type="button" className="nes-btn">
                <i className="nes-icon facebook is-small"></i>
              </a>
              <a href="#" type="button" className="nes-btn">
                <i className="nes-icon github is-small"></i>
              </a>
              <a href="#" type="button" className="nes-btn">
                <i className="nes-icon gmail is-small"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
