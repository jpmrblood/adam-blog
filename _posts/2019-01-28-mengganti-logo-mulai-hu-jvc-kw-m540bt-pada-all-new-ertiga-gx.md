---
layout: post
title: "Mengganti Logo Mulai HU JVC KW-M540BT Pada All New Ertiga GX"
date:  2019-01-28 11:53:03 +0700
description: World
img: 2018/04/books.jpg # Add image post (optional)
tags: [ertiga][headunit][jvc]
author: Jan Peter Alexander Rajagukguk # Add name author (optional)
---

Kali ini saya hendak menunjukkan bagaimana membuat gambar pada _headunit_ JVC KW-M540BT yang terpasang pada All New Ertiga tipe GX. Saya menggunakan aplikasi [GIMP](https://www.gimp.org/downloads/) yang bisa bebas diunduh dan dimodifikasi.

# Membuat Gambar

Pertama-tama, buat gambar dengan ukuran 914x480. Saya sendiri membuat gambar dari aset mobil AN Ertiga yang merah burgundi dari situs [Suzuki Indonesia](http://suzuki.co.id/) dan tulisan tag terbaru dari sana. Saya satukan menjadi gambar yang saya sukai. Ini aman saya gunakan karena saya menggunakan gambar ini untuk keperluan pribadi, bukan tujuan komersial.

Saya menggunakan latar berwarna hitam karena kalau warna putih membuat silau pada malam hari. Kalau menyalakan mobil saat gelap saya tidak suka.


{% include image.html
            img="/assets/img/2019/01/image1-in-gimp.jpg"
            title="Membuka gambar ukuran 914x480 di GIMP."
            caption="Membuka gambar ukuran 914x480 di GIMP."
            url="https://suzuki.co.id/" %}


Pada GIMP, pilih menu *Image* &#8594; *Scale Image...*

{% include image.html
            img="/assets/img/2019/01/resize-image.png"
            title="Mengganti rasio dari 914x480 menjadi 800x480."
            caption="Mengganti rasio dari 914x480 menjadi 800x480." %}

Jangan lupa tekan tanda rantai jadi lepas supaya rasio lebar tidak menyesuaikan tinggi. Setelah itu, ubah lebar menjadi 800 piksel. Gambar akan menjadi seperti mejret. Tapi, nanti akan ditampilkan bagus.

Setelah itu, simpan gambar: *File* &#8594; *Export As...*. 

{% include image.html
            img="/assets/img/2019/01/01-save-as.png"
            title="Export As..."
            caption="Export As..." %}

Saya beri nama gambar saya namanya image1.bmp. Lalu tekan tombol *Export*.

{% include image.html
            img="/assets/img/2019/01/02-save-as.png"
            title="Advanced Options"
            caption="Advanced Options" %}

Selanjutnya akan ada pilihan. Tekan tombol + pada *Advanced Options* dan pilih *R5 G6 B5* sebagai format gambar BMP. Lalu, tekan tombol *Export*.

# Buat Berkas Teks

Selanjutnya, buatlah teks berkas biasa bernama `OpeningCustomize.txt` yang berisi:

```
Opening Customize
[FILE]image1.bmp
[VERSION]9876
~END

```

Untuk mengembalikan ke logo semula, nomor versi bisa diganti menjadi 0000.

# Memasang ke head unit.

{% include image.html
            img="/assets/img/2019/01/isi-drive.png"
            title="Taruh semua berkas ke penyimpan USB."
            caption="Taruh semua berkas ke penyimpan USB." %}

Siapkan sebuah penyimpan USB yang diformat FAT32. Taruh `image1.bmp` dan `OpeningCustomize.txt` ke dalam situ.

Colokkan USB ke head unit.

Pada head unit, masuk ke menu *A/V Off*

Di tampilan *A/V Off*, tekan:

- Dua kali ujung kiri atas
- Dua kali ujung kiri bawah
- Sekali ujung kiri atas
- Sekali ujung kiri bawah

Perhatikan: ujung kiri bawah itu ada di atas tombol menu (kotak-kota kecil 3x3), bukan di ujung layar.

Kalau benar, akan muncul tampilan Customize Menu.

Tekan tombol *Opening Customize*.

Sampai sini proses selesai. HU bisa dinyalakan ulang untuk menguji hasil kerja.

Selamat mencoba.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zzMevvZEKjs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
