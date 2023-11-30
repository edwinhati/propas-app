import { useState, Fragment } from "react";

export default function AccountInformation({
  formData,
  handleInputChange,
}: any) {
  const [isCreateAccount, setIsCreateAccount] = useState(true);

  return (
    <Fragment>
      <div className="mb-6">
        <label
          htmlFor="phoneNumber"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Nomor Telepon<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="phoneNumber"
          placeholder="0812xxxxxx"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-1">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
          {isCreateAccount && <span className="text-red-500">*</span>}
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
          placeholder="nama@email.com"
          value={formData.email}
          onChange={handleInputChange}
          required={isCreateAccount}
        />
      </div>
      {/* <div className="mb-6 flex items-center">
        <input
          id="makeaccount"
          type="checkbox"
          onChange={() => setIsCreateAccount(!isCreateAccount)}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300"
        />
        <label
          htmlFor="makeaccount"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Buat akun
        </label>
      </div> */}

      {isCreateAccount && (
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kata sandi<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            required
          />
        </div>
      )}
    </Fragment>
  );
}
