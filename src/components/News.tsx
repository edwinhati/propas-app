import Link from "next/link";
import Image from "next/image";

export default function News() {
  const news = [
    {
      title:
        "Lakukan Kunker , Ketua DPD Propas Riau Bersama Jajaran Kali Ini Datangi Kantor DPC Propas Kota Selat Panjang",
      link: "https://www.berandaclik.com/lakukan-kunker-ketua-dpd-propas-riau-bersama-jajaran-kali-ini-datangi-kantor-dpc-propas-kota-selat-panjang/",
      date: "Senin, 4 Desember 2023",
      content:
        "Selat Panjang – Terus lakukan upaya pengembangan struktur Propas Indonesia sampai ke pelosok desa , Kali Ini Ketua DPD Propas Riau Muhammad Yuslizal bersama rombongan kunjungi Kantor DPC Propas Selat Panjang yang beralamat di Jalan tebing tinggi no.08, kelurahan kota Selat Panjang Kabupaten Meranti Provinsi Riau.",
    },
    {
      title:
        "Propas Indonesia DPC Kabupaten Tuban Jawa Timur, Siap Berjuang Untuk Prabowo-Gibran Satu Putaran",
      link: "https://www.memoterkini.com/berita/9489/propas-indonesia-dpc-kabupaten-tuban-jawa-timur-siap-berjuang-untuk-prabowo-gibran-satu-putaran",
      date: "Senin, 4 Desember 2023",
      content:
        "Tuban,memoterkini – Acara Pembukaan Konsulidasi DPC Kabupaten Tuban, Tim Relawan Pemenang Prabowo – Gibran Propas Ronggolawe yang dilaksanakan di Cafe Desa Prataan, Kec Parengan, Kab Tuban, Sabtu (02/12/23) Malam.",
    },
    {
      title:
        "Perlebar Sayap Propas Indonesia , Ketua Bidang Sosialisasi dan Pemenangan Pemilu Sugirno Adakan Sosialisasi Pembentukan Jaringan Propas Sampai Ke Desa – Desa ",
      link: "https://www.berandaclik.com/perlebar-sayap-propas-indonesia-ketua-bidang-sosialisasi-dan-pemenangan-pemilu-sugirno-adakan-sosialisasi-pembentukan-jaringan-propas-sampai-ke-desa-desa/",
      date: "Jumat, 1 Desember 2023",
      content:
        "Riau – Guna meneruskan arahan dari Ketua DPD Propas Riau dalam program pelebaran sayap Propas Indonesia sampai ke seluruh pelosok desa , Jum’ at , 1 Desember 2023 Ketua Bidang Sosialisasi dan Pemenangan Pemilu DPD Propas Riau agendakan giat sosialisasi di tengah Masyarakat.",
    },
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
          <Image
            src={`/poster.jpeg`}
            width={500}
            height={300}
            alt=""
            className="object-cover rounded-lg"
          />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KjfjdrYWJYo?si=XMQkJsS2A3tl49VG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <video className="w-full" controls>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Image
              key={index}
              src={`/sertifikasi/${item}.jpeg`}
              width={500}
              height={300}
              alt=""
              className="object-cover rounded-lg"
            />
          ))}

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
