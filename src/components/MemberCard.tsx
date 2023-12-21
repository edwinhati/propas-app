import { Fragment } from "react";
import Image from "next/image";

export default function MemberCard({ user }: any) {
  return (
    <Fragment>
      <div className="w-96 h-56 m-auto bg-[#0cc1e0] rounded-xl relative text-black shadow-2xl transition-transform transform hover:scale-110">
        <div className="w-full flex items-center justify-center ml-5 py-2 space-x-2">
          <div className="flex flex-col">
            <p className="text-center">Kartu Anggota</p>
            <p className="text-center">PROPAS INDONESIA</p>
          </div>
          <Image
            className="w-12 h-12 rounded-full"
            src="/logo.jpeg"
            alt="Member Card"
            width={500}
            height={500}
          />
        </div>
        <hr className="w-full h-1 bg-red-500 border-0 rounded" />
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
