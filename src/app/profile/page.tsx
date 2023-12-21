"use client";
import { Fragment } from "react";
import { useUser } from "@/context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Protected from "@/guard";
import MemberCard from "@/components/MemberCard";

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

function generateMemberId(id: number) {
  const idString = id.toString();
  const prefix = "PROPAS0000000";
  return prefix.substring(0, prefix.length - idString.length) + idString;
}

export default function Profile() {
  const { user, loading }: UseUserResult = useUser();

  if (user) {
    user.id = generateMemberId(user.id);
  }

  const renderProfileContent = () => (
    <Fragment>
      <Header />
      <main className="container mx-auto border p-4 rounded-lg">
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
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Kartu Anggota
                </dt>
                <div className="mt-4 sm:mt-0">
                  <MemberCard user={user} />
                </div>
              </div>
            </dl>
          </div>
        </div>{" "}
      </main>
       <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
          </form>
      <Footer />
    </Fragment>
  );

  return (
    <Protected>
      {user && !loading ? renderProfileContent() : <Loading />}
    </Protected>
  );
}
