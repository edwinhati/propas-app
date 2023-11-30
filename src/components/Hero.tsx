import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link
          href="/register"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full"
          role="alert"
        >
          <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3">
            Daftar
          </span>
          {""}
          <span className="text-sm font-medium">sebagai anggota</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Sepenggal kata
        </h1>
        <div className="item-body mb-8 text-xs text-justify font-ligt text-gray-500 lg:text-sm sm:px-16 xl:px-48">
          <Image
            src="/Ketum.jpg"
            width={200}
            height={200}
            alt="Ketua Umum"
            className="rounded-sm mr-2 float-left"
          />
          <p>
            Keterlibatan masyarakat dalam menyongsong pesta demokrasi atau
            Pemilihan Umum (Pemilu) khususnya pemilihan presiden tahun 2024
            adalah sebuah harapan sekaligus semangat untuk melibatkan semua
            elemen anak bangsa dalam derap langkah dan dinamika demokrasi
            sembari terus mengawal proses demokrasi yang bermartabat dan mampu
            menghasilkan pemimpin bangsa yang diharapkan mampu membawa arah
            perjalanan bangsa Indonesia seperti yang termaktub dalam
            Undang-Undang Dasar 1945 dan cita-cita pendiri bangsa. <br />
            <br /> Organisasi Masyarakat atau Ormas yang dibentuk ini
            berorientasi pada kerja politik dan kesukarelaan menjadi bagian dari
            team pemenangan calon presiden dan wakil presiden, khususnya Bapak
            Let.Jend. TNI (Pun) H. Prabowo Subianto Djojohadikusumo dan Bapak
            Gibran Rakabuming Raka yang telah resmi mendaftarkan diri sebagai
            pasangan calon presiden dan wakil presiden untuk pemilihan presiden
            pada 14 Februari 2024 mendatang. Dengan berkembangnya dinamika
            persaingan antar pendukung yang semakin kompleks, semua pihak
            termasuk para pemangku kepentingan (stakeholders) dan para analis
            kebijakan, akademisi, praktisi maupun masyarakat yang memiliki
            kesamaan cita-cita harus bekerjasama dan terlibat langsung dalam
            langkah pemenangan dimaksud dengan berbagai strategi dan taktik yang
            tetap menghormati hakikat dari pada kompetisi dan demokrasi itu
            sendiri agar dapat melahirkan pemimpin yang berkualitas bagi bangsa
            Indonesia. <br />
            <br /> Untuk mengoptimalkan potensi dan peran masyarakat yang
            memiliki kesamaan pikiran agar Indonesia dapat dipimpin oleh sosok
            pemimpin yang tegas, berkarakter, nasionalis, paham strategi dan geo
            politik kawasan, visioner, mampu menjaga persatuan, patriot dan
            berorientasi pada kepentingan rakyat serta kolaborasi antara
            generasi post millennial dan generasi millennial untuk kesinambungan
            dan regenerasi kepemimpinan masa depan, maka dipandang perlu untuk
            dibentuknya sebuah Organisasi Masyarakat atau ormas bernama RELAWAN
            PRO PRABOWO SUBIANTO. <br />
            <br />
            Organisasi ini disingkat PROPAS, didirikan sebagai wadah berhimpun
            nya masyarakat dari seluruh pelosok negeri yang berafiliasi akan
            kepentingan kemenangan Bapak Let.Jend. TNI (Pun) H. Prabowo Subianto
            Djojohadikusumo dan Bapak Gibran Rakabuming Raka, untuk bersinergi
            dan bergerak bersama seluruh elemen dan unsur pemenangan, meminta
            mandat dari rakyat Indonesia demi menghantarkan kedua putera terbaik
            bangsa ini untuk duduk pada tampuk kekuasaan tertinggi pemimpin
            negeri, sehingga dapat menyongsong INDONESIA EMAS 2045 yang
            dibingkai dalam kemajuan di segala bidang.
            <br />
            <br />
            Salam Hormat <br />
            Brigjen TNI (Purn) Drs. Sindu Tikno Seputro, M.Si.(Han) <br />
            Ketua Umum PROPAS INDONESIA<br />
          </p>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
