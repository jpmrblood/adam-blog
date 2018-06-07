---
layout: post
title: "Microsoft Beli Github"
date:  2018-06-06 21:57:37 +0700
description: World
img: /2018/06/ms_loves_github.png
tags: [komentar]
author: Jan Peter Alexander Rajagukguk
---

[Microsoft](https://blogs.microsoft.com/blog/2018/06/04/microsoft-github-empowering-developers/) membeli [Github](https://blog.github.com/2018-06-04-github-microsoft/) seharga seharga seratus empat triliun Rupiah (atau sekitar 7,5 juta Dolar Amerika). Github pun menjadi sama seperti Linkedin yang sudah terlebih dahulu dibeli oleh Microsoft.

Pembelian ini sejalan dengan visi baru dari Microsoft: mengejar ketertinggalan mereka di tren terkini, Perangkat Lunak Bebas/Terbuka *(Free/Open Source Software, FOSS).* Ketika Satya Nadella menyatakan *Microsoft loves Linux*, mereka menyatakan bahwa mereka siap untuk berjuang masuk ke sana.

Apa yang mereka kejar dengan membuang identitas lama mereka yang anti Perangkat Lunak Bebas/Terbuka?

Ada beberapa teknologi yang dimiliki oleh FOSS yang menjadi tren masa kini. Teknologi yang dibangun oleh FOSS ini pun jauh lebih baik dari pada solusi tertutup yang dimiliki oleh kompetitornya yang merupakan teknologi tertutup.

# Cloud Computing

*Cloud computing* adalah sebuah mode komputasi terdistribusi yang membagi-bagi pekerjaan secara otomatis dalam sekumpulan komputer peladen. Prinsipnya begini: sekumpulan peladen yang saling terkait dalam satu jaringan ada yang berfungsi sebagai koordinator pembagi kerja dan pengerja. Seseorang cukup memberikan sebuah pekerjaan komputasi kepada koordinator. Kemudian, koordinator akan memilih salah satu pengerja secara otomatis.

Kita tidak tahu pengerja yang mana yang mendapatkan pekerjaan kita sebab semua serba otomatis. Kita hanya melihatnya seperti memberikan suatu pekerjaan ke dalam awan. Lalu, kita hanya tahu ada hasil dari awan keluar dari tersebut. Itulah asal kata komputasi awan.

Teknologi ini ada karena ada sebuah tesis dari seorang mahasiswa di Israel tentang teknologi Hypervisor. Kemudian, Intel dan AMD pun membuat ekstensi pada keping pemroses mereka masing-masing untuk itu. Perangkat lunak yang mendukung ekstensi itu adalah XEN (sekarang Xensource) yang notabene adalah perangkat lunak terbuka.

Perusahaan pertama yang mengimplementasi pusat data dengan teknologi itu adalah Amazon dengan AWS-nya. Mereka berterima kasih kepada FOSS dengan memberikan akun gratis S3 kepada pengembang-pengembang FOSS waktu itu. Saat ini, mereka pun menjadi hegemoni dalam dunia peladenan akibat teknologi ini.

Bagaimana dengan VMWare?

Menurut pendapat pribadi saya, optimasi yang diberikan oleh VMWare masih kalah jauh dengan solusi FOSS saat ini. Hal ini karena mereka masih mengejar teknologi perawanan ini. Sejauh ini, dari penyedia awan yang saya pakai di Indonesia, solusi berbasis VMWare mereka masih jauh kurang.

Mengapa demikian?

Jeff Bezos pemilik Amazon melakukan taruhan besar pada perusahaannya. Dia mengubah infrastruktur perusahaan menjadi Infrastruktur berbasis Layanan Web *(Service Oriented Architecture).* Sebagai bos yang manajemen mikronya bikin stres, dia berhasil memaksa tim-tim di dalam Amazon mengoptimasi arsitektur ini.

Pada akhirnya, teknologi layanan web ini pun menjadi dewasa dan diterapkan pada manajemen komputasi awan. Layanan awan pun dapat diekspresikan dalam bentuk notasi pemrograman. Sehingga, saat ini pun muncul istilah: Devops, cabang TIK yang mengatur bagaimana infrastruktur dibuat untuk menjalankan sebuah aplikasi (pekerjaan).

# Standarisasi Terbuka

Salah satu yang menarik dari layanan web ini adalah aspek standarisasi terbuka.

Standar komunikasi layanan dalam jaringan (daring) ada banyak. Bahkan, sudah ada semenjak tahun 1970. EDI *(Electronic Data Interchange)* pun sempat menjadi hegemoni di awal-awal. Namun, yang sanggup mengimplementasi harus merogoh uang yang tak sedikit.

Amazon mendorong penggunaan data dan prosedur yang cara pemakaiannya diregulasi oleh sebuah badan non-amal, SOAP. SOAP ini pun berkembang menjadi standar yang terbuka yang bisa dipakai oleh siapa saja. Ada konsorsium W3C yang mengatur alur komunikasi. Ada OASIS yang menentukan definisi dokumennya. Sehingga, tiba-tiba teknologi komunikasi antar sistem pun menjadi bisa bagi semua orang.

Standarisasi terbuka ini pun menjadi pemikiran generasi zaman sekarang. Hal ini karena kebanyakan dari mereka diajarkan dengan menggunakan perangkat lunak terbuka di universitas mereka. Lalu, bisnis pun sudah menemukan formula yang tepat dengan membuka standar dan/atau kode mereka. 

Perubahan paradigma itu ditandai juga dengan banyaknya proyek-proyek perangkat lunak terbuka. Setiap proyek perangkat lunak terbuka yang populer biasanya bahkan mendapat sponsor dari perusahaan-perusahaan besar. Bahkan, ada perusahaan macam Google yang setiap tahun memberi beasiswa/hadiah kepada siapa saja yang mau terlibat dalam proyek perangkat lunak terbuka.

# Ekosistem CI (Continous Integration)

Setelah Linus (pencipta kernel Linux) membuat GIT, banyak penyedia penyimpan daring peladen GIT gratis bermunculan. Yang terkenal ada Bit Bucket dan Github. Namun, setelah bertahun-tahun, Github menjadi favorit banyak pengembang karena kesederhanaan layanannya. Pengembang-pengembang perangkat lunak banyak yang menaruh kode mereka di sana.


