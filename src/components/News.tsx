import Link from "next/link";

export default function News() {
  return (
    <section className="bg-white" id="news">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
            Berita Terbaru
          </h2>
          {/* <p className="font-light text-gray-500 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p> */}
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Berita
              </span>
              <span className="text-sm">Selasa, 27 Juni 2023</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <Link href="https://jambiprima.com/read/2023/06/27/17040/sekretaris-umum-propas-ahmadi-hasibuan-siap-menangkan-prabowo-subianto-jadi-presiden-2024/">
                Sekretaris Umum Propas Ahmadi Hasibuan siap menangkan Prabowo
                Subianto Jadi Presiden 2024
              </Link>
            </h2>
            <p className="mb-5 font-light text-gray-500">
              Sekretaris Umum Propas Siap Berjuang bersama Letjen TNI Purn
              H.Prabowo Subianto Djoyojadikusuma Demi Indonesia Raya siap
              memenangkan Prabowo Subianto pada Pemilu 2024.
            </p>
            <div className="flex justify-between items-center">
              {/* <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Green avatar"
                />
                <span className="font-medium">Bonnie Green</span>
              </div> */}
              <Link
                href="https://jambiprima.com/read/2023/06/27/17040/sekretaris-umum-propas-ahmadi-hasibuan-siap-menangkan-prabowo-subianto-jadi-presiden-2024/"
                target="_blank"
                className="inline-flex items-center font-medium text-primary-600"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
