import { Fragment } from "react";

export default function PersonalInformation({
  formData,
  handleInputChange,
  handleRadioChange,
}: any) {
  return (
    <Fragment>
      <div className="mb-6">
        <label
          htmlFor="nik"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          NIK<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="nik"
          placeholder="Nomor Induk Kependudukan"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
          value={formData.nik}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="fullName"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Nama Lengkap<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Nama Lengkap"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="placeOfBirth"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Tempat Lahir<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="placeOfBirth"
          placeholder="Tempat Lahir"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
          value={formData.placeOfBirth}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="dateOfBirth"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Tanggal Lahir<span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="dateOfBirth"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-3 py-2"
          placeholder="Pilih tanggal"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />
      </div>

      <fieldset className="mb-6">
        <legend className="sr-only">gender</legend>
        <label
          htmlFor="gender"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Jenis kelamin<span className="text-red-500">*</span>
        </label>
        <div className="flex items-center mb-4">
          <input
            id="gender-option-1"
            type="radio"
            name="gender"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-red-300 "
            checked={formData.gender === "M"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="gender-option-1"
            className="block ml-2 text-sm font-medium text-gray-900 "
          >
            Laki-laki
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="gender-option-2"
            type="radio"
            name="gender"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-red-300 "
            checked={formData.gender === "F"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="gender-option-2"
            className="block ml-2 text-sm font-medium text-gray-900 "
          >
            Perempuan
          </label>
        </div>
      </fieldset>
      <fieldset className="mb-6">
        <legend className="sr-only">Married</legend>
        <label
          htmlFor="married"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Status Pernikahan<span className="text-red-500">*</span>
        </label>

        <div className="flex items-center mb-4">
          <input
            id="married-option-2"
            type="radio"
            name="maritalStatus"
            value="Belum Menikah"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-red-300 "
            checked={formData.maritalStatus === "Belum Menikah"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="married-option-2"
            className="block ml-2 text-sm font-medium text-gray-900 "
          >
            Belum Menikah
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="married-option-1"
            type="radio"
            name="maritalStatus"
            value="Menikah"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-red-300 "
            checked={formData.maritalStatus === "Menikah"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="married-option-1"
            className="block ml-2 text-sm font-medium text-gray-900 "
          >
            Menikah
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="married-option-3"
            type="radio"
            name="maritalStatus"
            value="Pernah Menikah"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-red-300 "
            checked={formData.maritalStatus === "Pernah Menikah"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="married-option-3"
            className="block ml-2 text-sm font-medium text-gray-900 "
          >
            Pernah Menikah
          </label>
        </div>
      </fieldset>
    </Fragment>
  );
}
