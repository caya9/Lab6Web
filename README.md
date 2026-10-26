
<br>

![Praktikum](https://img.shields.io/badge/PRAKTIKUM-06-2563EB?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-STYLING-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-DOM%20%26%20EVENT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**LAPORAN PRAKTIKUM PEMROGRAMAN WEB**

*Teknik Informatika · Universitas Pelita Bangsa*

</div>

---

## 👩🏻‍💻 IDENTITAS MAHASISWA

<div align="center">

| Identitas | Keterangan |
|:---|:---|
| **Nama** | Chaya Aulia |
| **NIM** | 312510197 |
| **Kelas** | I251B |
| **Program Studi** | Teknik Informatika |
| **Universitas** | Universitas Pelita Bangsa |
| **Mata Kuliah** | Pemrograman Web |
| **Praktikum** | 6 — JavaScript DOM dan Event Handling |

</div>

> 💙 *Learning, Exploring, and Building with JavaScript.*

---

## 🎯 01 — TUJUAN PRAKTIKUM

Praktikum ini bertujuan untuk memahami penggunaan **DOM (Document Object Model)** dan **Event Handling** pada JavaScript.

Melalui praktikum ini, mahasiswa mempelajari cara memilih dan mengubah elemen HTML, mengubah tampilan elemen, menangani interaksi pengguna, melakukan validasi formulir, serta membuat daftar tugas sederhana.

## 🧰 02 — ALAT DAN BAHAN

| No. | Alat dan Bahan | Kegunaan |
|:---:|---|---|
| 1 | Visual Studio Code | Menulis dan mengedit kode program |
| 2 | HTML | Membuat struktur halaman web |
| 3 | CSS | Mengatur warna dan tampilan halaman |
| 4 | JavaScript | Mengatur interaksi halaman web |
| 5 | Web Browser | Menampilkan dan menguji halaman web |
| 6 | Live Server | Menjalankan halaman web secara lokal |

---

## 📁 03 — STRUKTUR FOLDER

```text
lab6_dom_event/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

**Keterangan file:**

- `index.html` — berisi struktur halaman web.
- `style.css` — berisi kode untuk mengatur tampilan halaman.
- `script.js` — berisi kode JavaScript untuk menjalankan fungsi dan menangani event.
- `README.md` — berisi laporan dan dokumentasi praktikum.

---

## 🚀 04 — LANGKAH-LANGKAH PRAKTIKUM

1. Membuka aplikasi Visual Studio Code.
2. Membuat folder bernama `lab6_dom_event`.
3. Membuat file `index.html`, `style.css`, dan `script.js`.
4. Menghubungkan file CSS dan JavaScript ke HTML.
5. Menuliskan kode program sesuai instruksi setiap latihan.
6. Menyimpan kode menggunakan `Ctrl + S`.
7. Menjalankan `index.html` menggunakan Live Server.
8. Menguji fungsi program melalui browser.
9. Memeriksa Console jika terjadi kesalahan pada JavaScript.

---

## 🧪 05 — LATIHAN PRAKTIKUM

### 💠 Latihan 1 — Memilih dan Mengubah Elemen DOM

Pada latihan pertama, JavaScript digunakan untuk memilih elemen HTML berdasarkan ID menggunakan `document.getElementById()`.

Selanjutnya, properti `textContent` digunakan untuk mengubah teks pada elemen judul dan paragraf.

**Hasil yang diharapkan:**

- Judul berubah menjadi *Belajar JavaScript DOM*.
- Isi paragraf berubah menjadi *Konten berhasil diubah oleh JavaScript.*
<img width="1920" height="1080" alt="HasilLatihan1" src="https://github.com/user-attachments/assets/34296a9c-da16-4941-864b-361a131f7b88" />


Latihan ini membantu memahami cara JavaScript mengakses dan mengubah isi elemen HTML.

### 💠 Latihan 2 — Event Handling dengan Click

Pada latihan kedua, digunakan metode `addEventListener()` untuk menangani peristiwa klik pada tombol.

Ketika tombol diklik, JavaScript mengubah isi paragraf dan menampilkan waktu klik menggunakan `new Date().toLocaleTimeString()`.

**Hasil yang diharapkan:**

- Tombol dapat diklik.
- Teks paragraf berubah setelah tombol ditekan.
- Waktu saat tombol diklik ditampilkan pada halaman web.
<img width="1920" height="1080" alt="HasilLatihan2" src="https://github.com/user-attachments/assets/ce460afa-0aaa-4297-8de1-15a02df336ce" />


### 💠 Latihan 3 — Mengubah Gaya dengan classList

Pada latihan ketiga, JavaScript digunakan untuk menambahkan atau menghapus class CSS menggunakan `classList.toggle()`.

Class CSS digunakan untuk mengubah warna teks, warna latar belakang, garis di sebelah kiri paragraf, padding, dan ukuran teks.

**Hasil yang diharapkan:**

- Tampilan paragraf berubah ketika tombol diklik.
- Warna teks dan latar belakang berubah.
- Ukuran teks menjadi lebih besar.
- Gaya dapat diaktifkan dan dinonaktifkan kembali.
<img width="1920" height="1080" alt="HasilLatihan3" src="https://github.com/user-attachments/assets/1c77f2a2-b0d2-4124-9e8b-47ffc7d0e793" />


### 💠 Latihan 4 — Menghitung Jumlah Karakter

Pada latihan keempat, dibuat input teks untuk memasukkan nama. JavaScript menggunakan event `input` untuk menghitung jumlah karakter yang sedang diketik pengguna.

Jumlah karakter ditampilkan secara langsung pada halaman web.

**Hasil yang diharapkan:**

- Pengguna dapat memasukkan teks.
- Jumlah karakter bertambah saat pengguna mengetik.
- Jumlah karakter berkurang saat pengguna menghapus teks.
<img width="1920" height="1080" alt="HasilLatihan4" src="https://github.com/user-attachments/assets/653a5018-08cf-4914-bcf8-e9aa23b90b25" />


### 💠 Latihan 5 — Validasi Formulir

Pada latihan kelima, dibuat formulir pendaftaran yang berisi input nama, email, dan usia.

JavaScript menangani pengiriman formulir menggunakan event `submit` dan metode `preventDefault()` agar halaman tidak langsung dimuat ulang.

Validasi yang dilakukan meliputi:

1. Memastikan nama sudah diisi.
2. Memeriksa format email.
3. Memastikan usia sudah diisi.
4. Memastikan usia berupa bilangan bulat.
5. Memastikan usia berada dalam rentang 17–100 tahun.

**Hasil :**

- Pesan kesalahan muncul jika data belum lengkap.
  <img width="1920" height="1080" alt="HasilLatihan5-Nama kosong" src="https://github.com/user-attachments/assets/7e7590e6-4a7a-4852-9f0f-0e25598fad33" />

- Email dengan format yang tidak sesuai ditolak.
  <img width="1920" height="1080" alt="HasilLatihan5-Email tidak valid" src="https://github.com/user-attachments/assets/3928e925-99ea-4c7e-a335-c3bab847d267" />

- Usia di luar rentang yang ditentukan ditolak.
  <img width="1920" height="1080" alt="HasilLatihan5-Usia di bawah 17 tahun" src="https://github.com/user-attachments/assets/e6d75cd3-a5fd-4814-b0c6-51f9a4823540" />

- Pesan keberhasilan muncul jika seluruh data valid.
  <img width="1920" height="1080" alt="HasilLatihan-Semua data valid" src="https://github.com/user-attachments/assets/6f0882c8-47df-4693-abca-90f20bb6f67e" />


### 💠 Latihan 6 — Membuat To-Do List

Pada latihan keenam, dibuat daftar tugas sederhana menggunakan JavaScript DOM dan Event Handling.

Pengguna dapat memasukkan tugas, menambahkan tugas ke dalam daftar, serta menandai tugas yang sudah selesai.

Konsep JavaScript yang digunakan antara lain:

- `addEventListener()` untuk menangani klik.
- `document.createElement()` untuk membuat elemen HTML baru.
- `textContent` untuk mengatur teks.
- `classList.toggle()` untuk mengubah status tugas.
- `appendChild()` untuk menambahkan elemen ke daftar.
- `focus()` untuk mengembalikan fokus ke input.

**Hasil:**

- Pengguna dapat menambahkan tugas.
- Input kosong tidak ditambahkan sebagai tugas.
- Tugas dapat ditandai selesai.
- Tugas yang selesai ditampilkan dengan teks tercoret.
- Status tugas dapat diubah kembali.
<img width="1920" height="1080" alt="HasilLatihan6" src="https://github.com/user-attachments/assets/b034fe0f-33a5-4d3f-bd7c-4acfa4c128b4" />


---

## 💻 06 — MINI PROJECT

Mini project pada modul berupa formulir pendaftaran workshop yang menerapkan konsep DOM dan Event Handling.

Fitur yang dapat diterapkan meliputi:

- Input nama peserta.
- Input email peserta.
- Pemilihan sesi workshop.
- Penghitungan karakter secara langsung.
- Validasi data sebelum formulir dikirim.
- Ringkasan sesi yang dipilih.
- Pesan keberhasilan atau kesalahan.
- Fitur reset formulir.
<img width="1920" height="1080" alt="Tampilanketikanamasedangdiketik" src="https://github.com/user-attachments/assets/297207a8-9931-4e95-b43a-241bdc2506b0" />
<img width="1920" height="1080" alt="Tampilanpendaftaranberhasil" src="https://github.com/user-attachments/assets/31322b85-430b-42df-8349-f97a167eb68c" />
<img width="1920" height="1080" alt="Tampilanpesankesalahan" src="https://github.com/user-attachments/assets/1e92b53d-49ec-4786-b769-82db48cc0613" />

---

## 🔍 07 — EKSPERIMEN MANDIRI

Eksperimen tambahan bertujuan memperdalam pemahaman tentang DOM dan Event Handling.

| No. | Eksperimen | Penjelasan |
|:---:|---|---|
| 1 | Menghapus tugas | Menambahkan tombol untuk menghapus tugas dari daftar |
| 2 | Validasi nama | Memastikan nama memiliki minimal tiga karakter |
| 3 | Event dropdown | Menggunakan event `change` untuk mendeteksi perubahan pilihan |
| 4 | Sembunyikan teks | Mengatur visibilitas paragraf menggunakan class CSS |
| 5 | Pengujian `defer` | Mengamati pengaruh atribut `defer` pada pemuatan JavaScript |

-Eksperimen 1 — Menambahkan Tombol Hapus pada To-do List
<img width="1920" height="1080" alt="Eksperimen 1 — Menambahkan Tombol Hapus pada To-do List" src="https://github.com/user-attachments/assets/a253926c-904c-472b-9d09-45d0951f7947" />

-Eksperimen 2 — Nama Minimal Tiga Karakter
<img width="332" height="144" alt="Eksperimen 2 (Berhasil) — Nama Minimal Tiga Karakter" src="https://github.com/user-attachments/assets/88e7d2ee-5073-47ee-8659-26567906df0a" />
<img width="350" height="142" alt="Eksperimen 2 (Ditolak)— Nama Minimal Tiga Karakter" src="https://github.com/user-attachments/assets/1ca1c032-1505-4fcb-aba2-ef4b14c1418e" />

-Eksperimen 3 — Event Change pada Dropdown Workshop
<img width="1920" height="1080" alt="Eksperimen 3 — Event Change pada Dropdown Workshop" src="https://github.com/user-attachments/assets/60f8936a-fcb8-47b1-a9d2-d6a76b556629" />

-Eksperimen 4 — Tombol Sembunyikan dan Tampilkan Paragraf

<img width="310" height="71" alt="Eksperimen 4 — Tombol Sembunyikan" src="https://github.com/user-attachments/assets/a11543f5-3174-42b0-8071-96a7dff62b71" />

<img width="362" height="91" alt="Eksperimen 4 — Tombol Tampilkan Paragraf" src="https://github.com/user-attachments/assets/b7d75b88-e8b6-43b6-bd55-519d7ffc185e" />

---

## 📝 11 — KESIMPULAN

Berdasarkan praktikum JavaScript DOM dan Event Handling, dapat dipahami bahwa JavaScript dapat digunakan untuk mengubah konten HTML, mengatur tampilan elemen, dan menangani berbagai interaksi pengguna pada halaman web.

DOM memudahkan JavaScript dalam memilih, membuat, dan mengubah elemen HTML. Sementara itu, Event Handling memungkinkan halaman web merespons tindakan pengguna, seperti klik tombol, mengetik teks, mengubah pilihan, dan mengirim formulir.

Melalui latihan praktikum ini, mahasiswa dapat memahami hubungan antara HTML, CSS, dan JavaScript dalam pengembangan website. Ketiga teknologi tersebut saling melengkapi untuk menghasilkan halaman web yang terstruktur, menarik, dan interaktif.

---

<div align="center">

<img src="https://img.shields.io/badge/THANK%20YOU-💙-2563EB?style=for-the-badge" alt="Thank You">

**PRAKTIKUM 6 — JAVASCRIPT DOM & EVENT HANDLING**

*Teknik Informatika · Universitas Pelita Bangsa*

</div>
