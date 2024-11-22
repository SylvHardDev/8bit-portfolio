"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <footer className="fixed bottom-5 left-5">
      <button type="button" onClick={() => setIsShowModal(!isShowModal)}>
        <i className="nes-icon star"></i>
      </button>
      {isShowModal && (
        <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center  text-sm">
          <div className="nes-dialog w-[40rem] bg-white">
            <button onClick={() => setIsShowModal(false)}>
              <i className="nes-icon close is-small"></i>
            </button>
            <div className="p-3 flex items-center flex-col gap-2 text-black">
              <i className="snes-jp-logo"></i>
              <p>My projects:</p>

              <Link href={"#"}>
                <div className="nes-container is-dark with-title">
                  <p className="title">
                    Application de Gestion d&apos;Ordonnances
                  </p>
                  <p>
                    Application mobile permettant la numérisation
                    d&apos;ordonnances
                  </p>
                </div>
              </Link>

              <Link href={"#"}>
                <div className="nes-container with-title">
                  <p className="title">
                    Application de Consultation Médicale en ligne et Mobil{" "}
                  </p>
                  <p>
                    Applications cross-platform pour la communication patient et
                    professionnel de santé.
                  </p>
                </div>
              </Link>

              <Link href={"#"}>
                <div className="nes-container is-dark with-title">
                  <p className="title">Gestion Financière</p>
                  <p>
                    Application web permettant de suivre les finances de notre
                    école.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
