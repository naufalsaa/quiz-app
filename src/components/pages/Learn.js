import "./Learn.css";
import logo from "./Pas Photo.jpeg";
import article from "./article.png";

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
            Kromatografi gas (GC) atau kromatografi gas adalah teknik analisis
            yang digunakan untuk memisahkan dan menganalisis sampel yang mudah
            menguap tanpa dekomposisi termal. Kromatografi gas (GC) adalah jenis
            kromatografi yang umum digunakan dalam kimia analitik untuk
            memisahkan dan menganalisis senyawa volatil tanpa dekomposisi.
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
          <p><img src={article} alt="Copyright"/></p>
          <ul>
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
              Oven : Fungsi oven adalah untuk memanaskan analit sehingga analit
              berubah fasa menjadi fasa gas. Suhu pada oven ini dapat diatur
              atau diprogram sesuai dengan metode yang akan digunakan dalam
              proses identifikasi.
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
        <br></br>
      </article>
      <footer>
        <section>
          <h2>5. Link Praktikum Gas Kromatografi</h2>
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
      <p class="copyright"><img src={logo} alt="Copyright"/>&nbsp; &copy; 2023 Rahma Safitri. Hak Cipta Dilindungi.</p>
        <p>Kontak: <a href="mailto:rsafitrihrp16@gmail.com">rsafitrihrp16@gmail.com</a></p>
    </footer>
    </body>
  );
}
