import "./Learn.css";
import logo from "./Pas Photo.jpeg";
import article from "./article.png";
import article1 from "./2.png";
import article2 from "./3.png";
import article3 from "./4.png";
import article4 from "./5.png";
import article5 from "./6.png";
import article6 from "./7.png";
import article7 from "./8.png";
import article8 from "./9.png";
import article9 from "./10.png";
import article10 from "./11.png";
import article11 from "./12.png";
import article12 from "./13.png";
import article13 from "./14.png";
import article14 from "./15.png";
import article15 from "./16.png";
import article16 from "./17.png";
import article17 from "./18.png";
import article18 from "./19.png";
import article19 from "./20.png";
import article20 from "./21.png";
import article21 from "./22.png";
import article22 from "./23.png";

export default function Learn() {
  return (
    <body>
      <header>
        <h1>MATERI GAS KROMATOGRAFI</h1>
      </header>
      <br></br>
      <article>
        <section>
          <h2>1. Pengertian Gas Kromatografi</h2>
          <p>
            Kromatografi gas (GC) adalah teknik analisis yang digunakan untuk
            memisahkan dan menganalisis sampel yang mudah menguap tanpa
            dekomposisi termal. Kromatografi gas (GC) adalah jenis kromatografi
            yang umum digunakan dalam kimia analitik untuk memisahkan dan
            menganalisis senyawa volatil tanpa dekomposisi.
          </p>
        </section>
        <br></br>
        <section>
          <h2>2. Fungsi Gas Kromatografi</h2>
          <ul>
            <li>
              Kromatografi gas digunakan sebagai pengujian untuk membantu
              mengidentifikasi komponen campuran cairan dan menentukan
              konsentrasi relatifnya.
            </li>
            <li>Untuk memisahkan dan memurnikan komponen campuran.</li>
            <li>
              Untuk menentukan tekanan uap, panas larutan, dan koefisien
              aktivitas.
            </li>
            <li>
              Industri sering menggunakannya untuk memantau proses untuk menguji
              kontaminasi atau memastikan proses berjalan sesuai rencana.
            </li>
            <li>
              Kromatografi dapat menguji alkohol darah, kemurnian obat,
              kemurnian makanan, dan kualitas minyak atsiri.
            </li>
            <li>
              GC dapat digunakan untuk menguji kemurnian suatu zat tertentu,
              atau untuk memisahkan komponen-komponen yang berbeda dari suatu
              campuran (jumlah relatif dari komponen-komponen tersebut juga
              dapat ditentukan).
            </li>
            <li>
              GC dapat digunakan untuk mengidentifikasi suatu senyawa.
              Kromatografi gas, berdasarkan fase gerak dan fase diam, merupakan
              kromatografi gas-cair.
            </li>
          </ul>
        </section>
        <br></br>
        <section>
          <h2>3. Komponen dalam Gas Kromatografi</h2>
          <p>
            <img src={article} alt="Copyright" />
          </p>
          <ul>
            <ul class="custom-counter">
              <li>
                Carrier Gas Supply : Komponen ini berfungsi sebagai supply gas
                pembawa atau fasa gerak pada kromatografi gas.
              </li>
              <li>
                Injection Port : Bagian injektor ini berfungsi sebagai tempat
                masuknya analit atau sampel yang akan dianalisis. Cairan analit
                dimasukkan menggunakan spuit dengan volume tertentu.
              </li>
              <li>
                Oven : Fungsi oven adalah untuk memanaskan analit sehingga
                analit berubah fasa menjadi fasa gas. Suhu pada oven ini dapat
                diatur atau diprogram sesuai dengan metode yang akan digunakan
                dalam proses identifikasi.
              </li>
              <li>
                Kolom Kapiler : Kolom kapiler adalah jalur yang dilalui analit
                melalui oven. Tiang-tiang ini ada yang panjangnya mencapai 30
                meter, ada pula yang hanya sepanjang 1 meter.
              </li>
              <li>
                Detektor : Bagian ini berfungsi sebagai pendeteksi komponen zat
                yang berhasil dipisahkan. Ada berbagai macam detektor yang dapat
                digunakan salah satunya adalah FID (Flame Ionization Detector).
                Detektor ini akan mendeteksi berdasarkan ion-ion yang terbentuk
                dari analit, dengan memanfaatkan nyala gas H2 dan gas O2.
              </li>
              <li>
                Recorder : Komponen ini berfungsi sebagai pencatat hasil deteksi
                yang terjadi pada detektor. Hasil pencatat ini biasa disebut
                dengan kromatogram, yaitu berupa puncak-puncak komponen yang
                terdapat pada campuran analit yang dianalisis.
              </li>
            </ul>
          </ul>
        </section>
        <br></br>
        <section>
          <h2>4. Prinsip Kerja Gas Kromatografi</h2>
          <ul>
            <li>
              Pertama, sampel cair disiapkan. Sampel dicampur dengan pelarut dan
              disuntikkan ke dalam kromatografi gas. Biasanya ukuran sampelnya
              kecil dalam kisaran mikroliter. Meskipun sampel awalnya berbentuk
              cair, sampel tersebut menguap menjadi fase gas. Gas pembawa inert
              juga mengalir melalui kromatografi. Gas ini seharusnya tidak
              bereaksi dengan salah satu komponen campuran.
            </li>
            <li>
              Gas pembawa yang umum termasuk argon, helium, dan terkadang
              hidrogen. Sampel dan gas pembawa dipanaskan dan dimasukkan ke
              dalam tabung panjang, yang biasanya digulung agar ukuran
              kromatografi dapat diatur. Tabung terbuka (disebut tubular atau
              kapiler) atau diisi dengan penyangga inert yang terbagi (dalam
              kolom padat). Tabungnya panjang untuk memungkinkan pemisahan
              komponen yang lebih baik.
            </li>
            <li>
              Di ujung tabung terdapat detektor yang mencatat jumlah sampel yang
              mengenainya. Sampel juga dapat diambil di akhir kolom. Sinyal dari
              detektordigunakan untuk menghasilkan grafik, kromatogram, yang
              menunjukkan jumlah sampel yang mencapai detektor pada sumbu y dan
              secara umum seberapa cepat sampel mencapai detektor pada sumbu x
              (tergantung pada apa sebenarnya yang dideteksi oleh detektor. .).
            </li>
            <li>
              Kromatogram menunjukkan serangkaian puncak. Besar kecilnya puncak
              berbanding lurus dengan jumlah masing-masing komponen, meskipun
              tidak dapat digunakan untuk menghitung jumlah molekul dalam
              sampel. Biasanya, puncak pertama berasal dari gas pembawa inert
              dan puncak berikutnya adalah pelarut yang digunakan untuk
              menyiapkan sampel. Puncak berikutnya mewakili senyawa dalam
              campuran. Untuk mengidentifikasi puncak pada kromatogram gas,
              grafiknya perlu dibandingkan dengan kromatogram campuran standar
              (yang diketahui), untuk melihat di mana puncak tersebut terjadi.
            </li>
            <li>
              Pada titik ini, kita mungkin bertanya-tanya mengapa
              komponen-komponen campuran terpisah ketika didorong sepanjang
              tabung. Bagian dalam tabung dilapisi dengan lapisan tipis cairan
              (fasa diam).
            </li>
            <li>
              Gas atau uap di bagian dalam tabung (fase uap) bergerak lebih
              cepat dibandingkan molekul yang berinteraksi dengan fase cair.
              Senyawa yang berinteraksi lebih baik dengan fasa gas cenderung
              memiliki titik didih lebih rendah (volatil) dan berat molekul
              rendah, sedangkan senyawa yang lebih menyukai fasa diam cenderung
              memiliki titik didih lebih tinggi atau lebih berat.
            </li>
            <li>
              Mekanisme kerja kromatografi gas adalah sebagai berikut. Gas dalam
              silinder baja bertekanan tinggi mengalir melalui kolom yang berisi
              fasa diam. Sampel berupa campuran yang akan dipisahkan, biasanya
              dalam bentuk suatu larutan, disuntikkan ke dalam aliran gas.
              Kemudian sampel dibawa oleh gas pembawa ke dalam kolom dan di
              dalam kolom tersebut terjadi proses pemisahan. Komponen-komponen
              campuran yang telah terpisah satu persatu keluar dari kolom.
              Detektor ditempatkan di ujung kolom untuk mendeteksi jenis dan
              jumlah setiap komponen campuran. Hasil deteksi dicatat dengan alat
              perekam dan disebut kromatogram yang terdiri dari beberapa puncak.
              Banyaknya puncak yang dihasilkan menunjukkan banyaknya komponen
              (senyawa) yang terkandung dalam campuran. Jika suatu kromatogram
              terdiri dari 5 puncak, maka terdapat 5 senyawa atau 5 komponen
              dalam campurannya. Sedangkan luas puncaknya bergantung pada
              banyaknya suatu komponen dalam campuran.Kromatografi gas sebaiknya
              menggunakan zat yang mudah menguap jika ingin memisahkan zat
              tersebut, karena zat tersebut perlu diuapkan ketika berada di
              kolom. Apabila zat tersebut tidak mudah menguap maka perlu
              dilakukan pencairan bunga es, namun pemisahan secara sempurna
              tidak dapat dilakukan sehingga harus dilakukan tahap selanjutnya
              dengan menggunakan sistem pemisahan yang lain.
            </li>
          </ul>
        </section>
        <section>
          <h2>5. Contoh Penerapan dalam Praktikum Gas Kromatografi</h2>
          <ul>
            <h3>A. TUJUAN PRAKTIKUM</h3>
            <ul class="custom-counter">
              <li>Mengoperasikan GC dengan tepat sesuai SOP.</li>
              <li>Memilih program suhu yang tepat, isoterm atau terprogram.</li>
              <li>
                Menentukan larutan standar yang tepat dan sesuai dengan
                cuplikan.
              </li>
              <li>
                Memilih metode yang paling tepat untuk digunakan dalam analisis.
              </li>
              <li>
                Melakukan pra-analisis cuplikan dengan benar, bilamana
                diperlukan.
              </li>
              <li>
                Melakukan analisis kuantitatif suatu cuplikan dengan tepat.
              </li>
            </ul>
            <h3>B. DASAR TEORI</h3>
            <ul class="custom-counter">
              <li>Dasar Teknik Pemisahan Kromatografi</li>
              <ul>
                <li>
                  Metode Kromatografi dipakai secara luas untuk pemisahan
                  analitik dan preparatif. Hampir setiap campuran kimia, dari
                  berat molekul rendah hingga tinggi, dapat dipisahkan menjadi
                  komponen-komponennya dengan beberapa metode kromatografi.
                  Beberapa sifat fisik umum dari molekul yang dipakai sebagai
                  dasar teknik pemisahan kromatografi adalah : adsorpsi,
                  kelarutan dan keatsirian.{" "}
                </li>
                <li>
                  Kromatografi adalah teknik pemisahan suatu campuran zat-zat
                  kimia berdasarkan pada perbedaan migrasi dari masing-masing
                  komponen campuran yang terpisah pada fasa diam di bawah
                  pengaruh fasa gerak. Terjadinya pemisahan komponen-komponen
                  dalam cuplikan disebabkan perbedaan afinitasnya terhadap kedua
                  fasa pada sistem keseimbangan yang dinamis.
                </li>
              </ul>

              <li>Analisis Kuantitatif Cuplikan</li>
              <ul>
                <li>
                  Di dalam analisis kuantitatif yang harus kita perhatikan
                  adalah luas puncak kromatografi (luas kromatogram) dari setiap
                  komponen yang akan kita analisis. Luas setiap puncak yang
                  terbentuk berbanding lurus dengan konsentrasi atau besar
                  setiap puncak tersebut. Sehingga dapat digunakan untuk
                  menentukan konsentrasi yang tepat dari setiap komponen
                  cuplikan.
                </li>
                <li>
                  Bila luas kromatogram disebut A, besarnya setiap puncak adalah
                  Q, maka berdasarkan pernyataan tersebut diatas,<br></br>{" "}
                  <p> Q=A</p> <br></br> Di dalam analisis kuantitatif diperlukan
                  larutan standar. Larutan standar yang akan digunakan harus
                  memenuhi syarat sebagai berikut :
                </li>
                <ul>
                  <ul class="custom-counter">
                    <li>
                      {" "}
                      Dapat bercampur dengan cuplikan yang akan dianalisis
                    </li>
                    <li>Tidak boleh bereaksi dengan komponen cuplikan </li>
                    <li>
                      {" "}
                      Hanya memberikan satu puncak dan tidak tumpang tindih
                      (overlap) dengan puncak-puncak komponen cuplikan
                    </li>
                    <li>
                      {" "}
                      Mempunyai waktu retensi (RT) yang tidak jauh berbeda
                      dengan waktu retensi komponen cuplikan
                    </li>
                  </ul>
                </ul>
                <li>
                  Ketelitian analisis kuantitatif dengan kromatografi gas sangat
                  bergantung pada kelinieran detektor. Setiap detektor memberi
                  tanggapan yang berbeda terhadap setiap komponen cuplikan.
                  Faktor tanggapan ini harus kita ketahui, disamping itu jika
                  kondisi kerja alat berubah, tanggapan detektor pun akan
                  berubah.
                </li>
                <li>
                  Pada detektor yang peka terhadap konsentrasi, seperti detektor
                  daya hantar (TCD), harus dijaga agar kecepatan alir gas
                  pembawa tetap.
                </li>
                <li>
                  Untuk memperoleh hasil analisis yang akurat, maka kemurnian
                  gas pembawa, kecepatan alir gas pembawa, suhu detektor, arus
                  kawat pijar, tahanan dan tekanan di dalam detektor harus
                  selalu tetap. Jika salah satu kondisi ini berubah secara
                  drastis, kinerja detektor pun akan berubah.
                </li>
                <li>
                  {" "}
                  Beberapa metode penting yang dapat digunakan untuk analisis
                  kuantitatif :
                </li>
                <ul>
                  <h5> a. % Luas (% AREA, %AR)</h5>
                  <li>
                    {" "}
                    Metode ini menyebutkan bahwa konsentrasi setiap komponen
                    dalam cuplikan berbanding lurus dengan luas kromatogram dari
                    komponen tersebut.
                  </li>
                  <img src={article1} />
                  <li>Ket:</li>
                  <li> Atotal = jumlah luas semua kromatogram </li>
                  <li> An = luas kromatogram komponen n</li>
                  <li> Qn = konsentrasi komponen n</li>
                  <li>
                    {" "}
                    Kekurangan dari metode ini adalah tidak ada koreksi untuk
                    kepekaan detektor terhadap setiap komponen cuplikan.
                    Akibatnya , kesalahan analisis berkisar antara 10 – 15%.
                  </li>

                  <h5>b. Normalisasi (NORM)</h5>
                  <li>
                    {" "}
                    Dalam metode ini koreksi terhadap kepekaan detektor sudah
                    diperhitungkan. Rumus yang digunakan adalah sebagai berikut
                    :
                  </li>
                  <img src={article2} />
                  <br></br>
                  <h5>c. Metode Standar Dalam (ISTD, Internal Standard)</h5>
                  <li>
                    {" "}
                    Dalam metode ini digunakan larutan standar yang sudah
                    memenuhi persyaratan. Ke dalam cuplikan ditambahkan suatu
                    larutan standar yang sudah diketahui konsentrasinya (Qst)
                    dan membentuk campuran yang homogen.{" "}
                  </li>
                  <li>
                    {" "}
                    Metode ini dapat juga dilakukan dengan menggunakan kurva
                    standar. Karena konsentrasi larutan standar yang ditamahkan
                    diketahui, dengan mudah kita dapat menghitung banyaknya
                    senyawa yang dianalisis.
                  </li>
                </ul>
              </ul>
            </ul>
          </ul>
          <ul>
            <h3>C. ALAT DAN BAHAN</h3>
            <br></br>
            <img src={article3} />
          </ul>
          <ul>
            <h3>D. CARA KERJA</h3>
            <br></br>
            <img src={article4} />
          </ul>
          <ul>
            <h3>E. KESELAMATAN KERJA</h3>
            <ul>
              <ul class="custom-counter">
                <li> Melaksanakan prosedur kerja dengan cermat</li>
                <li>
                  {" "}
                  emastikan tidak ada kebocoran pada saluran gas, bila perlu
                  gunakan cairan sabun untuk memeriksa
                </li>
                <li>
                  {" "}
                  Memastikan kabel-kabel listrik, konektor/sambungan terpasang
                  dengan kokoh
                </li>
                <li>
                  {" "}
                  Gas-gas yang digunakan adalah yang mudah terbakar, maka perlu
                  dijauhkan dari api/pemantik
                </li>
                <li>
                  {" "}
                  Syringe adalah jenis alat suntik presisi tinggi, pergunakan
                  sesuai tujuannya dengan cermat dan hati-hati
                </li>
              </ul>
            </ul>
          </ul>
          <ul>
            <h3>F. DATA PENGAMATAN</h3>
          </ul>
          <br></br>
          <img src={article5} />
          <img src={article6} />
          <img src={article7} />
          <img src={article8} />
          <img src={article9} />
          <img src={article10} />
          <img src={article11} />

          <img src={article12} />

          <img src={article13} />
          <img src={article14} />
          <img src={article15} />
          <img src={article16} />
          <img src={article17} />
          <ul>
            <h3>G. PENGOLAHAN DATA</h3>
          </ul>
          <img src={article18} />
          <img src={article19} />
          <img src={article20} />
          <img src={article21} />
          <ul>
            <h3>H. PEMBAHASAN</h3>
            <li> Kromatografi adalah suatu metode pemisahan yang didasarkan pada interaksi antara sampel dengan fasa diam dan fasa gerak. Pada gas kromatografi, yang berperan sebagai fasa diam adalah suatu senyawa polar dengan fasa gerak berupa gas inert (untuk analisis sampel polar). Komponen-komponen sampel akan dibawa fase gerak melalui kolom hingga menuju detektor dan hasilnya direkam oleh recorder. Detektor yang digunakan ialah detektor ionisasi nyala / FID (Flame Ionization Detector). Detektor ini bekerja berdasarkan pembakaran solut sehingga terjadi ionisasi. </li>
            <li> Gas yang dipakai dalam praktikum ini adalah gas hidrogen sebagai fuel gas, gas oksigen dari udara tekan sebagai oxidant gas dan  gas nitrogen sebagai carrier gas. Gas yang paling berbahaya adalah hidrogen, maka pada saat akan menghubungkan gas dengan alat GC, pembukaan tabung gas H2 dilakukan paling akhir. Dan sebaliknya ketika alat GC selesai digunakan, gas yang harus ditutup terlebih dahulu adalah gas yang paling berbahaya. </li>
            <li> Gas Hidrogen dan udara tekan akan bereaksi sehingga menghasilkan energi, yang mana energi tersebut digunakan untuk ionisasi sampel. Hasil samping dari reaksi tersebut adalah H2O. Maka dari itu untuk mengetahui bahwa H2 dan O2 telah bereaksi, digunakanlah lempengan alumunium untuk mengecek ada tidaknya uap air yang keluar dari detektor.</li>
            <li> Jika pada praktikum sebelumnya dilakukan analisis kualitatif, yaitu menentukan ada tidaknya etanol dalam sampel, maka kali ini dilakukan analisis kuantitatif, yaitu menentukan konsentrasi yang tepat dari etanol dalam sampel. Pada analisis kuantitatif ini, digunakan kondisi operasional yang sebelumnya telah dilakukan pada analisis kualitatif. Kondisi operasi ini digunakan karena kromatogram yang dihasilkan baik (tiap puncak terpisah dengan baik). Puncak kromatogram yang baik ini menjadi syarat utama pada analisis kuantitatif karena luas puncak kromatogram berbanding lurus dengan konsentrasi. Adapun program suhu yang digunakan (yang berdasar pada praktikum analisis kualitatif sebelumnya) yaitu metode suhu terprogram. </li>
            <li> Init temp yang digunakan adalah 75°C, final temp 120°C, rate 5°C/menit dan flowrate 19,9 mL/menit. Agar diperoleh hasil yang baik, maka kondisi operasi dijaga agar tetap sama. Jika salah satu variabel berubah secara drastis, maka kinerja detektor pun akan berubah. Hal ini dapat menyebabkan pengukuran tidak lagi akurat. Selain pengaruh perubahan kondisi operasi, ketidakakuratan pengukuran juga dapat disebabkan karena kelalaian praktikan, seperti tidak segera menekan tombol start pada GC dan integrator pada saat setelah menyuntik, adanya gelembung pada suntikan, larutan yang disuntikkan sudah menguap terlebih dahulu sebelum masuk ke injektor, dll.</li>
            <li> Metode penetapan kadar sampel pada praktikum ini yaitu metode % area dan ISTD (internal standar) dengan kurva standar. Metode % area ini digunakan untuk mengetahui perkiraan konsentrasi etanol dalam sampel karena pada metode ini kesalahan cukup besar (sekitar 10-15%) akibat tidak adanya faktor koreksi detektor. Namun data dari metode %area ini sangat berguna untuk membuat deret standar yang akan digunakan pada metode ISTD kurva standar agar konsentrasi standar yang dibuat tidak terlalu jauh dengan konsentrasi sampel. Adapun larutan yang digunakan yaitu etanol p.a dan standar internal yang dipakai yaitu propanol p.a. Larutan internal standar ini ditambahkan sebagai faktor koreksi. Larutan internal standar yang digunakan harus memenuhi beberapa syarat yaitu terpisah dengan baik dari senyawa yang dianalisis, tidak terdapat dalam sampel, waktu retensi yang hampir sama, mempunyai kemiripan sifat namun tidak secara kimiawi, stabil dan tidak bereaksi dengan sampel. </li>
            <li> Untuk mengefisienkan bahan maka dilakukan pengenceran 10x sehingga dalam pembuatan deret larutan standar, konsentrasi etanolnya yaitu 2%, 4%, 6%, 8%, dan 10%. Ditambahkan pula larutan standar internal propanol p.a sebanyak 10% dari total volume labu takar. Larutan sampel dibuat dengan perlakuan yang sama seperti larutan standar yaitu ditambahkan propanol 10%.</li>
            <li> Dari data-data pengukuran larutan standar yang diperoleh, dibuat kurva kalibrasi antara nisbah luas etanol dengan luas propanol terhadap konsentrasi etanol. Persamaan pada kurva tersebut yaitu  dengan nilai R2 = 0,966. Dilihat dari nilai regeresi liniernya, kurva kalibrasi ini tidak cukup linier (R2 tidak lebih dari 0,98), namun masih dapat diterima sehingga perhitungan konsentrasi sampel menggunakan persamaan ini masih terhitung akurat. Sampel yang dianalisis adalah parfum One billion. Dengan menginterpolasikan nilai area etanol per area propanol pada sampel, diperoleh konsentrasi etanol yang terkandung dalam sampel yaitu sebesar 55,85% untuk penyuntikan yang pertama dan 57,15 untuk penyuntikan sampel yang kedua. Sehingga jika dirata-ratakan dari pengukuran duplo tersebut, konsentrasi etanol dalam sampel yaitu 56,5%. Nilai konsentrasi yang diperoleh ini tidak berbeda terlalu jauh dengan konsentrasi yang diperoleh dengan metode % area yaitu sebesar 57,40%. </li>
          </ul>
          <ul>
            <h3>I. KESIMPULAN</h3>
            <li> Konsentrasi etanol dalam sampel dengan  metode % area yaitu sebesar 57,40%</li>
            <li> Konsentrasi etanol dalam sampel dengan  metode ISTD dengan kurva standar yaitu sebesar 56,50%</li>
          </ul>
        </section>
        <section>
        <h2>6. Daftar Pustaka</h2>
        <img src={article22} />
        </section>
        <br></br>
      </article>
      <footer>
        <section>
          <h2>7. Link Praktikum Gas Kromatografi</h2>
          <div class="card-container">
            <div class="card">
              <h2>Video 1</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lhj6ISITuZA"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div class="card">
              <h2>Video 2</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vzM-rFkNoos"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </footer>
      <footer>
        <p class="copyright">
          <img src={logo} alt="Copyright" />
          &nbsp; &copy; 2023 Rahma Safitri. Hak Cipta Dilindungi.
        </p>
        <p>
          Kontak:{" "}
          <a href="mailto:rsafitrihrp16@gmail.com">rsafitrihrp16@gmail.com</a>
        </p>
      </footer>
    </body>
  );
}
