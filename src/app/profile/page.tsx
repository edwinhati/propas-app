"use client"
import { Fragment } from "react";
import { useUser } from "@/context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Protected from "@/guard";

type UseUserResult = {
  user: any;
  loading: boolean;
};

const userField = [
  {
    name: "Nomor Anggota",
    field: "id",
  },
  {
    name: "Nama Lengkap",
    field: "full_name",
  },
  {
    name: "Email",
    field: "email",
  },
  {
    name: "Nomor Telepon",
    field: "phone_number",
  },
];

export default function Profile() {
  const { user, loading }: UseUserResult = useUser();

  const renderProfileContent = () => (
    <Fragment>
      <Header />
      <main className="container mx-auto">
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Informasi Anggota
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Detail pribadi dan kartu anggota.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              {userField.map((item) => (
                <div
                  key={item.field} // Add a unique key for each item
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                >
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {user[item.field]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>{" "}
        
      </main>
      <Footer />
    </Fragment>
  );

  return (
    <Protected>
      {user && !loading ? renderProfileContent() : <Loading />}
    </Protected>
  );
}
