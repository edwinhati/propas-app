import Link from "next/link";

export default function News() {
  const news = [
    {
      title: "DPD PROPAS Sumut Siap Menangkan Prabowo – Gibran Satu Putaran",
      link: "https://orbitdigitaldaily.com/dpd-propas-sumut-siap-menangkan-prabowo-gibran-satu-putaran/",
      date: "Sabtu, 25 November 2023",
      content:
        "Struktur kepengurusan Pro Prabowo Subianto (PROPAS) Indonesia Dewan Pimpinan Daerah (DPD) Provinsi Sumatera Utara terbentuk secara musyawarah dan mufakat. Jimmi Simanjuntak terpilih menjadi pucuk pimpinan DPD Sumut, Jumat (24/11/2023).",
    },
    {
      title:
        "Sekretaris Umum Propas Ahmadi Hasibuan siap menangkan Prabowo Subianto Jadi Presiden 2024",
      link: "https://jambiprima.com/read/2023/06/27/17040/sekretaris-umum-propas-ahmadi-hasibuan-siap-menangkan-prabowo-subianto-jadi-presiden-2024/",
      date: "Selasa, 27 Juni 2023",
      content:
        "Sekretaris Umum Propas Siap Berjuang bersama Letjen TNI Purn H.Prabowo Subianto Djoyojadikusuma Demi Indonesia Raya siap memenangkan Prabowo Subianto pada Pemilu 2024.",
    },
  ];
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
          {news.map((item, index) => (
            <article
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
              key={index}
            >
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
                <span className="text-sm">{item.date}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                <Link href={item.link}>{item.title}</Link>
              </h2>
              <p className="mb-5 font-light text-gray-500">{item.content}</p>
              <div className="flex justify-between items-center">
                
                <Link
                  href={item.link}
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
          ))}
        </div>
      </div>
    </section>
  );
}
