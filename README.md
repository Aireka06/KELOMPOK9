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

##Langkah langkah

### 1. Klik kanan pada folder kemudian klik ‘Open in Terminal’
kemudian masukkan command cd sensor kemudian enter, lalu masukkan command 
```
cargo run
```
lalu enter, untuk membaca kemudian mengirimkan data dari bacaan sensor ke Rust TCP Server. Maka tampilannya akan seperti berikut:
![WhatsApp Image 2025-06-19 at 01 49 57_04ee2861](https://github.com/user-attachments/assets/1a3b32ee-89fe-4a1e-be3f-ec3af137b3ac)
terlihat pada tampilan awal tertera “Gagal baca sensor: Permission denied.

### 2. Lalu buat tab baru untuk terminal, 
kemudian masukkan command berikut
```
sudo dmesg | grep ttyUSB*
```
berguna untuk mengidentifikasi koneksi dari USB konverter dari modbus sensor SHT20
kemudian command
```
sudo chmod a+rw /dev/ttyUSB0
(sesuaikan dengan deteksi yang ditampilkan)
```
untuk mendapatkan permission untuk membaca data dari sensor

![image](https://github.com/user-attachments/assets/05124d78-52aa-4365-b2fd-a28afc1d9c35)

Maka setelah itu tampilan dari Terminal dari sensor akan berubah menjadi berikut:

![image](https://github.com/user-attachments/assets/9f869be4-cba3-4ebb-8f3a-35911d182e3e)

### 3. Lalu buat tab baru untuk terminal,
kemudian masukkan command ```ganache``` , kemudian akan muncul tampilan seperti gambar berikut:

![image](https://github.com/user-attachments/assets/d581a9a3-fae3-463e-9ee6-c331ff982113)

setelah itu salin salah satu Private Keys yang diberikan dari tampilan tersebut

![image](https://github.com/user-attachments/assets/3ec94ad9-442f-49e2-924b-0cbe87a82cb5)

### 4. Kemudian buka file main.rs yang terdapat di /Server/src. Kemudian ganti local wallet yang ada di bawah “let wallet: LocalWallet =” kemudian save progressnyaa.
![Untitled](https://github.com/user-attachments/assets/b212145f-03f1-4e57-b902-573a3b5c8dfe)


### 5. Ganti Influx Token yanga ada pada File main.rs di Sensor/Src/
kemudian sesuaikan bagian yang disorot dengan Influx Token yang dimiliki

![Untitled-1](https://github.com/user-attachments/assets/7536568d-7c3e-401e-8795-89b2ba8b1e90)


Kemudian sesuaikan dengan mengganti org dan bucket yang ada pada "/write?org=ITS&bucket=ISImonitor&precision=s" dengan yang dimiliki dan dipakai saat ini

![Untitled](https://github.com/user-attachments/assets/5c49b2e8-dd02-40cc-8a6e-d025ed40e195)


### 6. Klik untuk tambahkan tab baru dari Terminal
kemudian masukkan command cd Server kemudian enter, lalu masukkan command
```bash
cargo run
```
lalu enter, untuk menjalankan Rust TCP Server dan mengirimkan data dari bacaan sensor yang dikirim ke TCP Server juga dikirimkan ke InfluxDB. Tampilan terminal akan seperti berikut:

![image](https://github.com/user-attachments/assets/dfb52371-1eed-4b9b-a284-0ffb6e22edb4)

Setelah itu salin Smart contract yang tertera pada hasil tampilan terminal

### 7. Kemudian buka script.js yang ada di /Web3 with features
ganti contract Adress yang ada di dalamnya(yang sudah disorot) dengan Smart contract yang sudah disalin tadi lalu save progressnya.

![Untitled-1](https://github.com/user-attachments/assets/b184a133-f5c4-4b6b-a1b8-a9ca54b0f59b)


### 8. Kemudian klik kanan pada Folder ‘Web3’ lalu klik open in terminal, 
kemudian jalankan command 
```
python3 -m http.server 8788
```
kemudian enter, untuk menjalankan halaman Web3 dari program sistem.

![Untitled](https://github.com/user-attachments/assets/a6a3e411-80fa-43b8-aa50-aba0b3d3d874)


setelah itu klik kanan pada (http://0.0.0.0:8788/) kemudian open link


### 10. Kemudian klik pada extension di dalam firefox lalu klik pada Metamask untuk menghubungkan blockchain.
![image](https://github.com/user-attachments/assets/a6790be1-3915-41dd-8612-9491e4dc6831)

- Setelah itu klik pada tampilan kiri,
  
  ![image](https://github.com/user-attachments/assets/9d57de3e-00f2-4e0f-8c09-efacb16652d0)
  
- Lalu klik ‘add a custom network’
  
  ![image](https://github.com/user-attachments/assets/b3b51564-827e-4f1b-809c-e18b07553858)
  
- Lalu sesuaikan dengan yang ada digambar berikut:
  
  ![image](https://github.com/user-attachments/assets/4e920acf-051e-4ec4-8e30-5c36edfd10b0)
  
  kemudian klik save.
  
- kemudian klik panah ke bawah di sebelah account, lalu klik ‘add account or hardware wallet, lalu klik private keys, Kemudian isikan Private Keys yang didapatkan dari ganache, kemudian klik import.
  
  ![image](https://github.com/user-attachments/assets/8781ffcd-6e33-4f0e-8572-05757b45d4cc)

### 9. Kemudian akan diarahkan ke pada Web3 tampilan berikut.
lalu klik muat data sensor dan tampilan akan menjadi seperti ini
![Untitled-1](https://github.com/user-attachments/assets/c1181d58-dd8a-4adc-a54a-285e723a4a5c)

### 12. Untuk membuka Database dari hasil bacaan sensor
- Buka http://localhost:8086 untuk menuju tampilan web InfluxDB
  ![Untitled](https://github.com/user-attachments/assets/93bef2d2-6d2a-40c5-a21d-ddfb2684bb71)

- Kemudian beri checklist pada
  1) From Bucket: ali4
  2) _measurement: monitoring
  3) _field: humidity dan temperature
  4) Filter:  i. location: Green House Cabai
             ii. sensor_id: SHT20-Monitoring-001
  5) Kemudian atur Window Period menjadi:
     custom:5s, Aggregate Function Auto, kemudian bagian penampilan menjadi 'last', setelah itu Submit.

  ### Buka bagian 'script editor' dan salin semua query untuk bisa menampilkan grafik pada grafana

### 13. Untuk menghubungkan ke Grafana.
- Pastikan Grafana service sudah berjalan, dengan memasukkan command berikut
  ```
  sudo systemctl status grafana-server
  ```
- Lalu buka http://localhost:3000, dan tampilan web Grafana akan ditampilkan.
- Setelah itu ke bagian ‘Connections’ klik ‘add new connection’, kemudian pilih influxDB
- 
  ![Screenshot 2025-06-23 081001](https://github.com/user-attachments/assets/e70135ae-582c-4e6c-b635-770d205443c1)
  
- Klik ‘add new data source’
  
  ![image](https://github.com/user-attachments/assets/2456b78f-3665-4b45-a368-67b91b394c91)
  
- Kemudian dalam settingnya ubah Query Languagenya menjadi Flux, kemudian dalam HTTPnya masukkan URL dari InfluxDB
  
  ![image](https://github.com/user-attachments/assets/340b9639-24b1-4828-992a-60ef13d4634f)
  
- Kemudian pada Organization dan Token sesuaikan dengan yang ada dari InfluxDB dan profil InfluxDB. Kemudian klik Save & Test.
  
  ![image](https://github.com/user-attachments/assets/0435d0e4-cd73-4ab0-81dd-2172a093e13d)

- Setelah menambahkan data source pada step sebelumnya, kemudian kita menuju halaman ‘Dashboards’, lalu klik ‘Create dashboard’.
  
  ![image](https://github.com/user-attachments/assets/f856a5ad-a39d-4b75-a54a-30fd033e234f)

- Kemudian klik ‘Add visualization’
  
  ![image](https://github.com/user-attachments/assets/6eeb04a0-dba1-4ae6-b369-215cede1ba60)

- Pilih influx tadi sebagai data sourcenya
  
  ![image](https://github.com/user-attachments/assets/7ad596f0-6750-488f-80a3-5c46794af7e8)

- Lalu tempelkan salinan dari script query dari InfluxDB ke query di Visualisasi Grafana dan sesuaikan dengan data apa yang ingin ditampilkan
- 
  ![image](https://github.com/user-attachments/assets/eda83f9a-8405-4fd4-907d-e52893a8b2d6)

- Kemudian setelah penyesuaian selesai, klik Save Dashboard

### 14. Untuk membuka GUI menggunakan PyQT5
- Buka terminal dari Folder yang berisikan clone dari git ini, kemudian jalankan command
  ```
  python3 QTgui.py
  ```
  kemudian tekan enter, maka akan muncul tampilan seperti berikut
  
 ![Untitled](https://github.com/user-attachments/assets/21cf513e-5a81-433b-978e-e673044178f1)


## Tampilan Dashboard dan Hasil Data
### 1. Tampilan Dashboard dan Grafik pada InfluxDB
![image](https://github.com/user-attachments/assets/11faa5e1-9d8d-41c7-854f-f76ed64553d5)


Dapat dilihat pada Gambar pertama merupakan hasil tampilan grafik pembacaan sensor berdasarkan timestamp pada InfluxDB, dan pada Gambar kedua merupakan tabel data hasil pembacaan sensor berdasarkan timestamp pada InfluxDB. Dalam influxDB berguna untuk menyimpan data pembacaan sensor atau sebagai database yang dikirim dari mikrokontroler dan sensor melalui protokol TCP, lalu akan disimpan dalam struktur data berbasis waktu. Dalam sistem monitoring ini, influxDB yang bertanggung jawab merekam dan menyimpan data, setiap perubahan lingkungan sekecil apapun akan tercatat.

### 2. Hasil Tampilan Grafana
![image](https://github.com/user-attachments/assets/f620f5e5-afcc-4a4d-915d-59098df4e6ef)


Dapat dilihat pada Gambar merupakan hasil tampilan grafik pada grafana yang berperan sebagai interface visual untuk menampilkan data temperatur dan kelembaban secara real-time yang dikirim dari sensor SHT20 dari data yang ada dalam influxDB. Dashboard yang dibuat memberikan grafik time-series chart sehingga pengguna dapat melihat perubahan temperatur dan kelembapan selama proses penyimpanan berlangsung.

### 3. Blockchain dan Web3
![image](https://github.com/user-attachments/assets/fa2468fd-c8f3-46b4-b7ee-f36035859d14)

Pada Gambar pertama diatas merupakan hasil pembacaan tampilan data secara realtime dari sensor SHT20 yang diintegrasikan ke dalam sistem blockchain. Setiap data yang ditampilkan akan dicatat sebagai transaksi dalam jaringan blockchain. Integrasi blockchain pada sistem ini memberikan jaminan keaslian dan integritas data. 

![Untitled](https://github.com/user-attachments/assets/8cf6bef8-8bcc-4759-ac00-2f65d68aeebb)

Pada Gambar kedua diatas menunjukkan fitur dari Web3 yang digunakan sebagai pengonfirmasian bahan baku yang sedang melakukan loading in ke gudang bahan baku, yang kemudian ketika dikonfirmasikan dengan menggunakan timestamp yang sesuai format maka akan menampilkan status dari data sensor dari waktu tersebut dan juga kontak untuk pengonfirmasian proses loading in barang.

### 4. Hasil Interface pada Qt
![Untitled](https://github.com/user-attachments/assets/79e647eb-73aa-4686-bfb3-264a428daf81)


Dalam Gambar pertama diatas merupakan tampilan hasil grafik tampilan pada software Qt, disini menampilkan data temperatur dan kelembapan yang dikirimkan dari influxDB secara lokal. Pada Qt ini, bertujuan untuk menampilkan dalam bentuk grafik sederhana yang mudah dipahami pengguna untuk melihat data historis dalam bentuk dua grafik terpisah, grafik merah merupakan grafik untuk tampilan data Suhu dan grafik biru merupakan grafik untuk tampilan data kelembaban. Penggunaan warna yang berbeda untuk tampilan grafik ini bertujuan untuk membantu membedakan dua parameter yang berbeda tersebut. Integrasi langsung dengan influxDB memastikan bahwa data selalu ter-update secara real-time.










