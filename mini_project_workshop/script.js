const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");

const jumlahNama = document.getElementById("jumlahNama");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");

const polaEmailWorkshop = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Fungsi 1: Menghitung karakter nama
namaWorkshop.addEventListener("input", function () {
    jumlahNama.textContent = namaWorkshop.value.length;
    pesanWorkshop.textContent = "";
});

// Fungsi 2: Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        ringkasanSesi.textContent = "Belum dipilih";
    } else {
        ringkasanSesi.textContent = sesiWorkshop.value;
    }

    pesanWorkshop.textContent = "";
});

// Fungsi 3: Validasi form pendaftaran
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    if (nama === "") {
        pesanWorkshop.textContent = "Nama lengkap wajib diisi.";
    } else if (!polaEmailWorkshop.test(email)) {
        pesanWorkshop.textContent = "Masukkan alamat email yang valid.";
    } else if (sesi === "") {
        pesanWorkshop.textContent = "Silakan pilih sesi workshop.";
    } else {
        pesanWorkshop.textContent =
            "Pendaftaran berhasil! Nama: " + nama +
            ", Email: " + email +
            ", Sesi: " + sesi + ".";

        formWorkshop.reset();
        jumlahNama.textContent = "0";
        ringkasanSesi.textContent = "Belum dipilih";
    }
});

// Fungsi 4: Mengosongkan form menggunakan tombol reset
formWorkshop.addEventListener("reset", function () {
    jumlahNama.textContent = "0";
    ringkasanSesi.textContent = "Belum dipilih";
    pesanWorkshop.textContent = "";
});