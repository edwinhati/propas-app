import { Fragment } from "react";

export default function FormSubmission({ setKtpFile, loading }: any) {
  return (
    <Fragment>
      {/* <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 "
          htmlFor="foto-ktp"
        >
          Upload KTP<span className="text-red-500">*</span>
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
          aria-describedby="foto-ktp_help"
          id="foto-ktp"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setKtpFile(e.target.files?.[0])}
          required
        />
        <div className="mt-1 text-sm text-gray-500 " id="foto-ktp_help">
          JPG/JPEG/PNG
        </div>
      </div> */}

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 "
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-gray-900 "
        >
          Dengan ini Saya menyatakan bahwa BENAR mengajukan diri sebagai Anggota
          PROPAS INDONESIA dan menyetujui persyaratan dengan sebenar-benarnya
          dan sadar, tanpa tekanan dari pihak manapun.
        </label>
      </div>
      {loading ? (
        <button
          type="button"
          disabled
          className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <div role="status" className="flex justify-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-200 animate-spin fill-red-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </button>
      ) : (
        <button
          type="submit"
          className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Lanjutan
        </button>
      )}
    </Fragment>
  );
}
