# 🌡️ Sistem Monitoring Temperatur dan Kelembaban Otomatis untuk Greenhouse Cabai

## 📌 Deskripsi Proyek

Proyek ini bertujuan untuk merancang dan mengembangkan sistem monitoring suhu dan kelembaban otomatis pada greenhouse tanaman cabai. Sistem ini menggabungkan:

- Sensor IoT (SHT20 via Modbus RTU)
- Visualisasi data real-time (InfluxDB & Grafana)
- Integrasi dengan **Blockchain** untuk transparansi dan traceability data budidaya

Proyek ini mendukung pertanian presisi dan meningkatkan efisiensi serta keamanan data dalam budidaya cabai di Indonesia.

## 🌱 Latar Belakang

Indonesia sebagai negara agraris menghadapi tantangan dalam budidaya cabai karena kondisi lingkungan yang tidak stabil. Greenhouse menjadi solusi, namun pengelolaannya masih manual.

Dengan **IoT dan blockchain**, sistem ini:

- Mengotomatiskan monitoring suhu dan kelembaban
- Menjamin keabsahan data melalui pencatatan berbasis blockchain
- Meningkatkan kepercayaan konsumen melalui traceability budidaya

## 🎯 Tujuan Proyek

- Merancang sistem monitoring otomatis berbasis Modbus RTU
- Menyimpan & menampilkan data secara real-time menggunakan InfluxDB + Grafana
- Mengintegrasikan blockchain dan smart contract untuk jaminan transparansi data

## 🔧 Komponen Utama

| Teknologi         | Fungsi                                                                 |
|-------------------|------------------------------------------------------------------------|
| SHT20             | Sensor suhu dan kelembaban di greenhouse                               |
| Modbus RTU        | Protokol komunikasi industri antar perangkat                            |
| InfluxDB          | Basis data time-series untuk menyimpan data                            |
| Grafana           | Visualisasi data suhu & kelembaban secara real-time                     |
| Blockchain        | Penyimpanan transparan dan tidak dapat dimanipulasi                     |
| Smart Contract    | Otomatisasi logika traceability dan validasi data budidaya              |

## 📊 Fitur Sistem

- Monitoring suhu & kelembaban secara otomatis dan real-time
- Dashboard visualisasi kondisi greenhouse (Grafana)
- Penyimpanan data pada blockchain untuk jaminan keamanan & transparansi
- Dukung traceability hasil budidaya cabai

## ✅ Manfaat

- Efisiensi & ketepatan pengelolaan lingkungan greenhouse
- Minim risiko gagal panen akibat respons yang lambat
- Kepercayaan konsumen meningkat
- Mendorong pertanian presisi di Indonesia

## ⚙️ Arsitektur Sistem
Sensor (SHT20)
│
Modbus RTU
│
Mikrokontroler (Rust)
│
TCP/IP
│
TCP Server ─► InfluxDB ─► Grafana
│
└────► Smart Contract (Blockchain)

### Lapisan Sistem

- **Hardware Layer**: Sensor SHT20 (Modbus RTU)
- **Middleware Layer**: Modbus Client & TCP Server (Rust)
- **Backend & Frontend Layer**: InfluxDB, Grafana, Qt GUI, Blockchain

### Integrasi Blockchain

- Smart Contract dibangun dengan **Solidity**
- Data dapat diakses melalui **Web3.js** / **Ethers.js**
- DApp untuk menampilkan data & audit publik

## 🗂️ Struktur Proyek

greenhouse-monitoring/
├── modbus_client/ # Client pembaca sensor (Rust)
├── tcp_server/ # Server penerima data & penyimpan InfluxDB (Rust)
├── qt_desktop_app/ # Aplikasi GUI lokal (Qt)
├── smart_contract/ # Kontrak pintar Blockchain (Solidity)
├── dapp/ # Aplikasi Web untuk verifikasi data (Web3.js)
└── README.md # Dokumentasi proyek

## 🔄 Alur Kerja Sistem

1. Sensor SHT20 membaca suhu & kelembaban → dikirim via Modbus RTU
2. Modbus Client → parsing data ke JSON → kirim ke TCP Server
3. TCP Server → simpan ke InfluxDB
4. Data divisualisasikan di Grafana
5. Data juga dicatat ke Blockchain via Smart Contract
6. DApp memungkinkan publik melakukan verifikasi data

---

## 👨‍💻 Anggota Tim
**Kelompok 9 - Kelas 4A**
- Muhammad Ali Makki (2042231023)
- Aireka Maulana Erawan (2042231047)
- Syahira Arliya Putri Subekti (2042231051)


