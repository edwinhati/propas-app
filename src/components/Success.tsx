import Link from "next/link";
import { Fragment } from "react";

export default function Success({ id }: any) {
  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Selamat Bergabung
        </h1>
        <p className="mb-6 text-lg text-justify font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Anda telah berhasil terdaftar menjadi ANGGOTA PROPAS dengan nomor
          anggota {id}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300"
        >
          Kembali ke Beranda
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </Fragment>
  );
}
