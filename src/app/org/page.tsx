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
      {/* <div className="container mx-auto my-8 shadow">
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
            <tbody>
              <tr>
                <td className="border px-4 py-2">I.</td>
                <td className="border px-4 py-2">Ketua Dewan Pembina</td>
                <td className="border px-4 py-2">
                  MAYJEN TNI (Purn) Musa Bangun
                </td>
                <td className="border px-4 py-2">Dewan Pembina</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1.</td>
                <td className="border px-4 py-2">Wakil Ketua Dewan Pembina</td>
                <td className="border px-4 py-2">Simon Aloysius Mantiri</td>
                <td className="border px-4 py-2">Dewan Pembina</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2.</td>
                <td className="border px-4 py-2">Wakil Ketua Dewan Pembina</td>
                <td className="border px-4 py-2">Imelda Sari</td>
                <td className="border px-4 py-2">Dewan Pembina</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3.</td>
                <td className="border px-4 py-2">Anggota</td>
                <td className="border px-4 py-2">Arief Rosyid Hasan </td>
                <td className="border px-4 py-2">Dewan Pembina</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4.</td>
                <td className="border px-4 py-2">Anggota</td>
                <td className="border px-4 py-2">Drs. Bambang Ari</td>
                <td className="border px-4 py-2">Dewan Pembina</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5.</td>
                <td className="border px-4 py-2">Anggota</td>
                <td className="border px-4 py-2">Mangantur Simanjuntak, S.T</td>
                <td className="border px-4 py-2">Dewan Pembina</td>
              </tr>
              <p></p>
              <tr>
                <td className="border px-4 py-2">II.</td>
                <td className="border px-4 py-2">Ketua Dewan Penasehat</td>
                <td className="border px-4 py-2">
                  MAYJEN TNI (Purn) Adi Sudaryanto
                </td>
                <td className="border px-4 py-2">Dewan Penasehat</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1.</td>
                <td className="border px-4 py-2">Anggota</td>
                <td className="border px-4 py-2">
                  H. Rudy Gunawan, S.H., M.H., MP.
                </td>
                <td className="border px-4 py-2">Dewan Penasehat</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2.</td>
                <td className="border px-4 py-2">Anggota</td>
                <td className="border px-4 py-2">H. Wisnu Soehardjo</td>
                <td className="border px-4 py-2">Dewan Penasehat</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3.</td>
                <td className="border px-4 py-2">Anggota</td>
                <td className="border px-4 py-2">Ir. Esthon L. Foenay, M.Si</td>
                <td className="border px-4 py-2">Dewan Penasehat</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4.</td>
                <td className="border px-4 py-2">Anggota</td>
                <td className="border px-4 py-2">Gasper Tiran</td>
                <td className="border px-4 py-2">Dewan Penasehat</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5.</td>
                <td className="border px-4 py-2">Anggota</td>
                <td className="border px-4 py-2">Yeremias Ndoen</td>
                <td className="border px-4 py-2">Dewan Penasehat</td>
              </tr>
              <p></p>
              <tr>
                <td className="border px-4 py-2">III.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat </td>
                <td className="border px-4 py-2">
                  BRIGJEN TNI (PURN) Drs. SINDU TIKNO SAPUTRO, M.Si.(Han)
                </td>
                <td className="border px-4 py-2">Ketua Umum</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">
                  Wilmard Donall Abineno, S.Sos
                </td>
                <td className="border px-4 py-2">Wakil Ketua Umum I</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">
                  Dr. Hasan Bin Musad, S.Sos, M.H.
                </td>
                <td className="border px-4 py-2">Wakil Ketua Umum II</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Heru Cokro, S.Psi., M.Psi</td>
                <td className="border px-4 py-2">Wakil Ketua Umum III</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">
                  Karolus Rogger Evantino.,St.,M.Han(Cand)
                </td>
                <td className="border px-4 py-2">Sekretaris Jendral</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Asep Samsul Bakhri, M.Kom</td>
                <td className="border px-4 py-2">Wakil Sekretaris I</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Ir. Charly Irnawati</td>
                <td className="border px-4 py-2">Wakil Sekretaris I</td>
              </tr>
              <p></p>
              <tr>
                <td className="border px-4 py-2">7.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Ahmadi Hasibuan</td>
                <td className="border px-4 py-2">Bendahara Umum</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">8.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Muchammad Arif</td>
                <td className="border px-4 py-2">Wakil Bendahara I</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">9.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Alfian, S.H</td>
                <td className="border px-4 py-2">Wakil Bendahara II</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Delfi Tasar</td>
                <td className="border px-4 py-2">
                  Ketua Bid Organisasi Satuan Tugas & Pembinaan Daerah
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">11.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">T. Mufli Simanjuntak</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bid Organisasi Satuan Tugas & Pembinaan Daerah
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">12.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Marson Dedi Foni</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Kerjasama dan Hubungan Antar Lembaga
                </td>
              </tr>
              <p></p>
              <tr>
                <td className="border px-4 py-2">13.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Yosep Remi Hutagalung</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Kerjasama dan Hubungan Antar Lembaga
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">14.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Khairul Sahnan.,S.H.,M.H.</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Advokasi dan Hukum
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">15.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Jonathan Sianturi, S.H</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Advokasi dan Hukum
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">16.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Risyam Ahmad, S.H</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Advokasi dan Hukum
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">17.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">M. Sopian, S.H</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Sosial dan Pengabdian Masyarakat
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">18.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Nanang Khairul Dai</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Sosial dan Pengabdian Masyarakat
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">19.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Tridira Yofika, S.E.</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Kewirausahaan dan Ekonomi Kreatif
                </td>
              </tr>
              <p></p>
              <tr>
                <td className="border px-4 py-2">20.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Ahmad Waluyo</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Kewirausahaan dan Ekonomi Kreatif
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">21.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Dr. Ahmad Syukron, M.Pd</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Penelitian dan Pengembangan
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">22.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Muhamad Agung Hardiyanto</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Penelitian dan Pengembangan
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">23.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Mustafa Helim </td>
                <td className="border px-4 py-2">
                  Ketua Bidang Agama dan Seni Budaya{" "}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">24.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Richard Simanjuntak</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Agama dan Seni Budaya{" "}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">25.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Fitriana, S.H</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Pemberdayaan Perempuan dan Perlindungan Anak
                </td>
              </tr>
              <p></p>
              <tr>
                <td className="border px-4 py-2">26.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Yulianti Wiwit Wulandari</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Pemberdayaan Perempuan dan Perlindungan
                  Anak
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">27.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Alimbara</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Pengembangan Sumber Daya Manusia dan Diklat
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">28.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Iwa Kustiwa</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Pengembangan Sumber Daya Manusia dan Diklat
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">29.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Tengku Agung Kurniawan</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Lingkungan Hidup dan Energi Baru Terbarukan
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">30.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Frely Rahmawati</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Lingkungan Hidup dan Energi Baru Terbarukan
                </td>
              </tr>
              <p></p>
              <tr>
                <td className="border px-4 py-2">31.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Aby Azy Taufik Rochman</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Humas, Publikasi dan Dokumentasi
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">32.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Afprianto</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Humas, Publikasi dan Dokumentasi
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">33.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Job Fredrianto Sabuin</td>
                <td className="border px-4 py-2">
                  Ketua Bidang Teknologi Informasi dan Komunikasi
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">34.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Aldi Heraldi</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Teknologi Informasi dan Komunikasi
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">35.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">
                  Kristopel Parulian Simbolon
                </td>
                <td className="border px-4 py-2">
                  Ketua Bidang Pemuda dan Olahraga
                </td>
              </tr>
              <p></p>
              <tr>
                <td className="border px-4 py-2">36.</td>
                <td className="border px-4 py-2">Dewan Pengurus Pusat</td>
                <td className="border px-4 py-2">Jack Bligren</td>
                <td className="border px-4 py-2">
                  Wakil Ketua Bidang Pemuda dan Olahraga
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      {/* End of New Section */}

      <Footer />
      <Footer />
    </Fragment>
  );
}
