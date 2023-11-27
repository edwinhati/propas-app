import { Fragment } from "react";

export default function PopUp({ isOpen, id }: any) {
  return (
    <Fragment>
      <div
        id="timeline-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`
        ${isOpen ? "flex" : "hidden"}
        overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full justify-center items-center bg-black bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">
                Selamat bergabung
              </h3>
            </div>

            <div className="p-4 md:p-5">
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-5">
                Anda telah berhasil terdaftar menjadi ANGGOTA PROPAS dengan nomor anggota{" "}
                {id}
              </div>
              <button className="text-white inline-flex w-full justify-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Kembali ke beranda
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
