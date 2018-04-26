---
layout: post
title:  Sensor di Indonesia
date:   2017-10-10 00:00:00 +0700
description: Peralatan sensor baru 
img: 2018/04/trust-positif.png
tags: [sensor,kebebasan berpendapat, demokrasi, pemerintah,dns]
author: Jan Peter Alexander Rajagukguk
---

Pemerintah Indonesia baru saja membeli mainan baru yang akan berfungsi sebagai saringan di tingkat paket jaringan. Fungsi mainan ini nantinya akan mampu membaca paket-paket data yang lewat. Teknik ini jauh berbeda dan jauh lebih canggih dibandingkan dengan teknik yang sebelumnya. 

Yang dahulu hanya menggunakan teknik pembajakan DNS. Teknik ini yang sekarang hendak saya bahas. Sebab, teknik ini mungkin akan menjadi usang dengan adanya mesin baru itu.

{% include image.html
            img="/assets/img/2018/04/dns-hijacking.png"
            title="Cara kerja pembajakan DNS."
            caption="Cara kerja pembajakan DNS."
            url="https://www.beencrypted.com/what-is-dns-hijacking/" %}

Prinsip cara kerja pembajakan adalah seperti ini:

1. Pengguna mengetik alamat yang diinginkan, misalkan reddit.com, pada perambannya.
2. Untuk mengakses laman situs tersebut, peramban meminta alamat asli dalam bentuk angka dan titik dalam format CIDR yang biasa kita sebut alamat IP ke peladen DNS. Alamat *reddit.com* hanyalah sebuah label saja. DNS yang akan menerjemahkan alamat tersebut menjadi alamat IP yang digunakan untuk menghubungi peladen Reddit.
3. Di tengah jalan, pesan peramban yang berisi permintaan alamat IP dibajak di tengah jalan oleh Penyedia Internet (ISP) dan diarahkan ke DNS mereka.
4. DNS yang ada di ISP berisi daftar domain yang telah dimanipulasi berdasarkan daftar cekal yang diperoleh dari TRUST+Positif.
5. Maka, alamat IP yang dikembalikan adalah alamat IP laman cekal, bukan laman Reddit.

{% include image.html
    img="/assets/img/2018/04/akses-ditutup.png"
    title="Contoh laman cekal ketika hendak mengakses reddit.com"
    caption="Contoh laman cekal ketika hendak mengakses reddit.com" %}

Menurut daftar domain yang tercekal, domain Reddit yang terkena cekal adalah:

```
nsfw.reddit.com 
reddit.com 
*.nsfw.reddit.com 
*.reddit.com
```

# Daftar Trust+Positif Bukan Nawala!

Omong-omong, daftar cekal *Trust+Positif* berbeda dengan *Nawala.* Saya dulu juga berpikir sama sampai saya ikut menyalahkan *Nawala.* Padahal, Nawala adalah sebuah DNS swakarsa yang menyediakan proteksi bagi yang mau perlindungan dari Internet.

DNS ini sama seperti *OpenDNS Family Zone.* Artinya, kalau tidak mau memakai *Nawala* pun sebenarnya tidak apa-apa. *Nawala* hanyalah swakarsa yang ingin membantu orang tua dalam melindungi anak-anak mereka.

Sebaliknya, *Trust+Positif* merupakan daftar cekal domain yang disahkan semenjak 2014. Disahkan oleh Peraturan Menteri Komunikasi dan Informatika Nomor 19 Tahun 2014 tanggal 17 Juli 2014. Secara spesifik didefinisikan oleh Pasal 6.

> Pasal 6
>
> Direktur Jenderal menyediakan daftar alamat situs yang bermuatan negatif yang disebut TRUST+Positif

Jadi, marahilah *Trust+Positif* bila situs yang Anda kunjungi tercekal, bukan *Nawala.* Kasihan mereka yang berusaha membantu para orang tua. Hargailah mereka.

# Transparansi Cekal

Menkeminfo memberikan [fasilitas yang sangat cepat](https://kominfo.go.id/index.php/content/detail/10328/siaran-pers-no-123hmkominfo082017-tentang-sambut-hut-ri-ke-72-menkominfo-luncurkan-sistem-ticketing-aduan-konten/0/siaran_pers) untuk melakukan cekal. Laman https://aduankonten.id/ memberikan fasilitas yang sangat mudah untuk seseorang melaporkan.

{% include image.html
    img="/assets/img/2018/04/aduan-konten.png"
    title="Laman depan aduan konten"
    caption="Laman depan aduan konten"
    url="https://aduankonten.id/" %}

Untuk dapat mengetahui apakah situs yang dikelola atau yang sering dikunjungi itu dicekal pemerintah, maka dapat mengunjungi [*TRUST+Positif*](https://trustpositif.kominfo.go.id/) dan mencari situs yang hendak diketahui.

{% include image.html
    img="/assets/img/2018/04/pencarian-data-cekal.png"
    title="Hasil pencarian daftar cekal untuk situs Reddit"
    caption="Hasil pencarian daftar cekal untuk situs Reddit"
    %}

Celakanya, situs ini tidak cukup transparan menyediakan informasi yang cukup untuk melihat alasan situs tersebut dicekal. Situs ini seperti entri awal saja. Diperlukan korespondensi lebih lanjut untuk mengetahui permasalahan yang menyebabkan.

Apakah kita harus kenal baik dengan staf di Kementrian Kominfo atau menggalang cukup dukungan menjelang Pemilu untuk menekan Kementrian Kominfo untuk membuka itu? Pencarian saya tidak menemukan apa pun. Paling dekat yang saya tahu adalah menghubungi ke [Sub Direktorat Penyidikan dan Penindakan.](https://aduankonten.id/kontak-kami)

Lalu, bagaimana proses pelepasan dari daftar cekal? Apakah setiap situs yang dengan mudah dicekal baru dapat dilepas atas perintah Pengadilan? Nampaknya, pemerintah lupa untuk membuat fasilitas pelepasan cekal yang komprehensif.

Awas fitnah!