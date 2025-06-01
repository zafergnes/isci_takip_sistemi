
# İşçi Yevmiye Takip Sistemi

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">

## 📌 Proje Hakkında

**İşçi Yevmiye Takip Sistemi**, işletmelerin işçi ücretlerini modern ve etkili bir şekilde yönetmesini sağlayan bir çözümdür.
Sistem, karmaşık yevmiye hesaplarını kolaylaştırarak zamandan tasarruf sağlar ve insan hatalarını minimize eder.

### 🚀 Temel Özellikler

- 👷‍♂️ İşçi ekleme ve yönetme
- 📅 Görsel takvim ile çalışma günü takibi
- 🧮 Otomatik ücret hesaplamaları


## 🛠️ Teknoloji Yığını

### Frontend

- [React.js (Vite)](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Araçlar

- Git
- npm
- PostgreSQL CLI

---

## ⚙️ Kurulum

### 🔧 Ön Gereksinimler

- Node.js v18+
- npm v9+
- PostgreSQL v14+

### 📥 Depoyu Klonlayın

```bash
git clone https://github.com/kullanici-adiniz/isci_takip_takip.git
cd isci-yevmiye-takip
```

---

## 🗃️ Veritabanı Kurulumu

1. PostgreSQL'e giriş yapın:
   ```bash
   psql -U postgres
   ```

2. Yeni bir veritabanı oluşturun:


3. SQL dosyasını bu veritabanına import edin


4. `conn.js` dosyasındaki veritabanı bağlantı bilgilerini kendi ayarlarınıza göre güncelleyin.

---

## 🔙 Backend Kurulumu ve Çalıştırma

```bash
cd backend
npm install
npm start
```

---

## 💻 Frontend Kurulumu ve Çalıştırma

```bash
cd ../frontend
npm install
npm run dev
```
