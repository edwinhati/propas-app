import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Fragment } from "react";

export default function Organization() {
  return (
    <Fragment>
      <Header />
      <section className="bg-white container mx-auto p-8 shadow">
        <div className="max-w-screen-md flex items-center">
          {/* <img src="Foto/prabowo.jpg" alt="Selayang Pandang" className="w-1/2 h-auto mr-6" />  */}
          <div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              SELAYANG PANDANG
            </h2>
            <p className="mb-8 font-light text-gray-500 sm:text-lg text-justify">
              Indonesia adalah negara kepulauan terbesar di dunia, memiliki
              keragaman budaya, suku, agama, bahasa, dan sumberdaya alam yang
              melimpah. Namun, dengan keberagaman ini, tantangan yang sering
              muncul adalah mempertahankan persatuan dan kesatuan bangsa. Guna
              mempertahankan persatuan dan kesatuan bangsa Indonesia yang
              beragam diperlukan sosok pemimpin yang dihormati, berani,
              berkualitas, dan tegas. Pemilihan pemimpin bangsa/Presiden
              dilaksanakan melalui mekanisme pemilihan Presiden. Prabowo-Gibran
              adalah salah satu pasangan calon Presiden 2024. Untuk itu
              dirumuskan Visi dan Misi Propas Indonesia melihat, sosok pasangan
              Prabowo-Gibran adalah pasangan pemimpin yang tepat untuk memimpin
              Indonesia yang memiliki keanekaragaman sumberdaya yang menjadi
              kekayaan Bangsa Indonesia.
            </p>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              VISI DAN MISI PROPAS INDONESIA
            </h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl text-justify">
              Visi: Mewujudkan Pasangan Prabowo - Gibran Menjadi Presiden dan
              Wakil Presiden RI 2024 - 2029
            </p>
            <ol className="list-decimal mb-8 ml-5 font-light text-gray-500 sm:text-xl text-justify">
              <li>
                Membantu tim pemenangan mengawal kelancaran pendaftaran pasangan
                calon capres-cawapres RI 2024
              </li>
              <li>
                Membantu tim pemenangan mengawal kelancaran penetapan peserta
                Pilpres RI 2024
              </li>
              <li>Membantu tim pemenangan mengawal Penetapan Nomor Urut</li>
              <li>
                Membantu tim pemenangan melaksanakan kampanye virtual melalui
                medsos dan kampanye fisik
              </li>
              <li>
                Membantu tim pemenangan pada pelaksanaan pencoblosan,
                penghitungan suara, dan pengawalan kotak suara
              </li>
              <li>
                Membantu tim pemenangan dalam melaksanakan pencatatan riil
                penghitungan suara di tiap TPS yang dapat dipertanggungjawabkan
              </li>
            </ol>
          </div>
        </div>
      </section>
      <div className="container mx-auto my-8 shadow">
        <h4 className="text-center text-2xl font-semibold mb-4">
          Struktur Organisasi Kepengurusan DPP PROPAS INDONESIA
        </h4>

        <div className="box-body overflow-x-auto">
          <table className="table-auto border-collapse border w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">No</th>
                <th className="border px-4 py-2">Disposisi Struktural</th>
                <th className="border px-4 py-2">Nama</th>
                <th className="border px-4 py-2">Jabatan Struktural</th>
              </tr>
            </thead>
            <tbody>{/* ... (your table content) ... */}</tbody>
          </table>
        </div>
      </div>
      {/* End of New Section */}

      <Footer />
      <Footer />
    </Fragment>
  );
}
