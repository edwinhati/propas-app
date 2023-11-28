import { Fragment } from "react";
import Image from "next/image";

export default function MemberCard({ user }: any) {
  return (
    <Fragment>
      <div className="w-96 h-56 m-auto bg-red-900 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
        <div className="w-full flex items-left ml-5 py-4 space-x-2">
          <Image
            className="w-12 h-12 rounded-full"
            src="/logo.jpeg"
            alt="Member Card"
            width={500}
            height={500}
          />
          <p>
            Kartu Anggota <br /> PROPAS INDONESIA
          </p>
        </div>
        <div className="w-full px-8 mt-12 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light">Nomor Anggota</p>
              <p className="font-medium tracking-widest">{user.id}</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="font-light">Nama Lengkap</p>
            <p className="font-medium tracking-more-wider">{user.full_name}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
