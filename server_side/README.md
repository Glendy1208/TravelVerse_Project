# SERVER SIDE

## <span style="color:red">WARNING</span>
Hati-hati saat merubah database dan relationshipnya. Usahakan jangan dirubah, apabila ada perubahan mohon untuk konfirmasi di Grup terlebih dahulu. Terima kasih....

## Cara Menjalankan Proyek

### Prasyarat
- Node.js (versi 16 atau lebih baru)
- PostgreSQL (sudah terinstal dan berjalan)

### Langkah-langkah

1. **Masuk ke server_side**
    setelah melakukan clone repository, silahkan masuk ke folder server_side
    ```bash
    cd server_side
2. **Install Dependensi**
   ```bash
   npm install
3. **Setup database**
    - Salin file .env example kemudian copy sampai muncul file .env example copy
    - rename .env example copy menjadi .env
    - kemudian konfigurasikan .env sesuai dengan database yang ingin dibuat
    - kemudian jalankan perintah
        ```bash
        npx sequelize-cli db:create
4. **Jalankan migrasi dan seeder**
    ```bash
    npx run migrate
    npx sequelize-cli db:seed:all
<!-- 4. **Jalankan server**
    ```bash
    npm start
5. **Akses Aplikasi**
    - http://localhost:3000 -->

## API ENDPOINT
