# Indonesia Regional API

API lengkap untuk data wilayah administratif Indonesia, meliputi 38 provinsi, kota/kabupaten, kecamatan, dan desa/kelurahan.

![Indonesia Regional API](https://indonesia-regions-api.vercel.app/api-preview.png)

## 🌟 Fitur Utama

- **Data Lengkap**: Mencakup 38 provinsi, ratusan kota/kabupaten, ribuan kecamatan, dan puluhan ribu desa/kelurahan di seluruh Indonesia.
- **Performa Tinggi**: Dioptimalkan dengan static generation dan caching untuk respons cepat dan pengalaman pengguna yang lancar.
- **Mudah Digunakan**: API endpoint yang intuitif dengan format respons JSON yang konsisten dan dokumentasi lengkap.
- **Gratis dan Terbuka**: Dapat digunakan untuk proyek komersial maupun non-komersial tanpa biaya.
- **Selalu Diperbarui**: Data diperbarui secara berkala untuk memastikan akurasi informasi.

## 📚 Dokumentasi API

### Format Respons

Semua endpoint API mengembalikan respons dalam format JSON dengan struktur yang konsisten:

```json
{
  "status": boolean,
  "message": string,
  "data": array | null
}
```

### Endpoint

#### 1. Mendapatkan Semua Provinsi

```
GET /api/provinces
```

Contoh Respons:

```json
{
  "status": true,
  "message": "Provinces retrieved successfully",
  "data": [
    {
      "id": "11",
      "name": "Aceh"
    },
    {
      "id": "12",
      "name": "Sumatera Utara"
    }
    // ...
  ]
}
```

#### 2. Mendapatkan Provinsi berdasarkan ID

```
GET /api/provinces/{provinceId}
```

Contoh Respons:

```json
{
  "status": true,
  "message": "Province retrieved successfully",
  "data": {
    "id": "11",
    "name": "Aceh"
  }
}
```

#### 3. Mendapatkan Kota/Kabupaten berdasarkan ID Provinsi

```
GET /api/cities/{provinceId}
```

Contoh Respons:

```json
{
  "status": true,
  "message": "Cities in province Aceh retrieved successfully",
  "data": [
    {
      "id": "1101",
      "provinceId": "11",
      "name": "Kabupaten Simeulue"
    },
    {
      "id": "1102",
      "provinceId": "11",
      "name": "Kabupaten Aceh Singkil"
    }
    // ...
  ]
}
```

#### 4. Mendapatkan Kecamatan berdasarkan ID Kota/Kabupaten

```
GET /api/districts/{cityId}
```

Contoh Respons:

```json
{
  "status": true,
  "message": "Districts in city Kabupaten Simeulue retrieved successfully",
  "data": [
    {
      "id": "1101010",
      "cityId": "1101",
      "name": "Teupah Selatan"
    },
    {
      "id": "1101020",
      "cityId": "1101",
      "name": "Simeulue Timur"
    }
    // ...
  ]
}
```

#### 5. Mendapatkan Desa/Kelurahan berdasarkan ID Kecamatan

```
GET /api/villages/{districtId}
```

Contoh Respons:

```json
{
  "status": true,
  "message": "Villages in district Teupah Selatan retrieved successfully",
  "data": [
    {
      "id": "1101010001",
      "districtId": "1101010",
      "name": "Latiung"
    },
    {
      "id": "1101010002",
      "districtId": "1101010",
      "name": "Labuhan Bajau"
    }
    // ...
  ]
}
```

## 🚀 Penggunaan

### Contoh dengan JavaScript Fetch API

```javascript
// Mendapatkan semua provinsi
fetch("https://indonesia-regions-api.vercel.app/api/provinces")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Mendapatkan kota/kabupaten berdasarkan ID provinsi
fetch("https://indonesia-regions-api.vercel.app/api/cities/11")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Contoh dengan Axios

```javascript
// Mendapatkan semua provinsi
axios
  .get("https://indonesia-regions-api.vercel.app/api/provinces")
  .then((response) => console.log(response.data));

// Mendapatkan kota/kabupaten berdasarkan ID provinsi
axios
  .get("https://indonesia-regions-api.vercel.app/api/cities/11")
  .then((response) => console.log(response.data));
```

## 🛠️ Teknologi yang Digunakan

- [Next.js 15](https://nextjs.org/) - Framework React untuk aplikasi web
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript dengan tipe statis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [shadcn/ui](https://ui.shadcn.com/) - Komponen UI yang dapat digunakan kembali

## 📊 Sumber Data

Data wilayah administratif Indonesia yang digunakan dalam API ini bersumber dari data resmi Badan Pusat Statistik (BPS) dan Kementerian Dalam Negeri Republik Indonesia, yang telah diproses dan diformat untuk kemudahan penggunaan.

## 📝 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request atau buka issue untuk diskusi.

---

Dibuat dengan ❤️ untuk Indonesia
