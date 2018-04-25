---
layout: post
title:  Belajar Dari Equifax
date:   2017-09-14 00:00:00 +0700
description: Data pribadi ratusan juta rakyat Amerika Serikat yang dipegang oleh Equifax terbobol oleh peretas.
img: 2018/04/hack.jpg # Add image post (optional)
tags: [retas,equifax,data,privasi]
author: Jan Peter Alexander Rajagukguk # Add name author (optional)
---
[Ada 3 perusahaan besar (swasta)](https://youtu.be/aS6z0bEpVpM?t=3m23s) di Amerika Serikat (AS) yang mencatat semua transaksi keuangan (kartu kredit, pinjaman, [SSN/nomor sosial)](https://en.wikipedia.org/wiki/Social_Security_number) warga negara AS. Mereka adalah Equifax, Experian, dan TransUnion. Pada tanggal [7 September 2017,](https://investor.equifax.com/news-and-events/news/2017/09-07-2017-213000628) Equifax mengumumkan bahwa datanya telah terjebol. [Sebanyak 143 juta rakyat AS,](https://arstechnica.com/information-technology/2017/09/equifax-website-hack-exposes-data-for-143-million-us-consumers/) sekitar 44% populasi total AS, [terlepas mereka menggunakan Equifax atau tidak,](http://money.cnn.com/2017/09/11/pf/equifaxmyths/index.html) memiliki kemungkinan bahwa identitasnya yang tercuri dapat digunakan untuk [melakukan transaksi keuangan.](http://money.cnn.com/2017/09/11/pf/equifaxmyths/index.html)

Ironisnya, [menurut Michael Riley,](https://www.bloomberg.com/news/videos/2017-09-08/what-is-known-so-far-about-the-equifax-data-breach-video) data tersebut justru tercuri dari situs Equifax yang menawarkan produk perlindungan pencurian informasi. Situs tersebut teretas menggunakan kelemahan-kelemahan yang ada untuk mengakses 143 juta data tersebut. Equifax menunggu 6 minggu untuk mengumumkan peretasan tersebut.

Apa yang dilakukan Equifax dalam 6 minggu?

# Cuci Tangan

[Mereka membuat](https://arstechnica.com/information-technology/2017/09/why-the-equifax-breach-is-very-possibly-the-worst-leak-of-personal-info-ever/) sebuah laman [http://www.equifaxsecurity2017.com](http://www.equifaxsecurity2017.com) yang dibuat di sebuah penyedia situs umum dengan DNS yang terdaftar secara anonim, bukan atas nama Equifax. Situs ini [dibuat secara tergesa-gesa](https://arstechnica.com/information-technology/2017/09/why-the-equifax-breach-is-very-possibly-the-worst-leak-of-personal-info-ever/) sehingga masih ada beberapa data sensitif yang belum dilindungi. [Situs ini bahkan sempat ditandai](https://www.techdirt.com/articles/20170908/17363538172/equifax-security-breach-is-complete-disaster-will-almost-certainly-get-worse.shtml) sebagai situs yang mencurigakan. Padahal, situs ini menyediakan layanan kepada rakyat AS apakah data mereka terjebol.

[Situs ini mensyaratkan](https://arstechnica.com/tech-policy/2017/09/are-you-an-equifax-breach-victim-you-must-give-up-right-to-sue-to-find-out/) setiap orang yang menggunakan layanan untuk mengetahui datanya terjebol atau tidak harus secara otomatis melepaskan haknya untuk menuntut Equifax untuk hal yang terjadi sebagai syarat penggunaan *(Terms of Use).* Artinya, semua orang yang akan menggunakan layanan itu akan secara otomatis tidak bisa lagi menuntut kecerobohan Equifax. Namun, [Jaksa Umum New York](https://twitter.com/zackwhittaker/status/906178254331142144) mengatakan bahwa syarat arbitrasi tersebut tidak benar dan meminta Equifax untuk mengubah/menghapus syarat penggunaan tersebut.

Paket perlindungan data yang diberikan oleh Equifax gratis selama setahun. Namun, diperlukan keaktifan pengguna untuk menon-aktifkan layanan ini. Bila lewat setahun, pengguna akan dikenai biaya. Sudah Anda yang datanya tercuri, Anda juga harus bertanggung jawab secara proaktif dan mereka yang lalai malah berusaha mengkapitalisasi hal tersebut.

Hal yang paling parah adalah beberapa hari setelah terjebolnya data Equifax, sebelum 6 minggu kemudian diumumkan, [3 orang eksekutif](https://www.bloomberg.com/news/articles/2017-09-07/three-equifax-executives-sold-stock-before-revealing-cyber-hack) dalam perusahaan tersebut menjual sahamnya. Mereka berdalih bahwa ini hanya kegiatan yang biasa dan, menurut perusahaan, tidak mengetahui adanya kejadian terjebolnya data sebelum penjualan saham tersebut.

Terlepas dari itu semua, [para analis pasar modal justru menyarankan](https://www.bloomberg.com/news/articles/2017-09-13/buy-equifax-stock-analysts-urge-before-during-and-after-plunge) yang lain untuk membeli saham Equifax atau menahan diri untuk menjual saham tersebut. Artinya, bila badai ini berlalu, kemungkinan Equifax akan kembali beroperasi seperti biasa. Sebagai tiga dari lembaga swasta yang memegang data transaksi keuangan, tentunya saham mereka diharapkan dalam jangka panjang akan kembali naik.

Kalau saya, saya berharap ada tuntutan class action yang memenangkan rakyat AS!

# Privasi Penting, Bung!

Orang selalu bilang, “kalau kita tidak salah, buat apa kita takut?” Lalu kemudian dia mengumbar-umbar datanya ke mana saja. Bahkan, data orang lain pula!

Sekalipun kita tahu bahwa entitas (entah itu perusahaan, orang, atau apa pun) dapat dipercaya, kita pun perlu tahu bagaimana data itu dikelola. Kita juga perlu tahu juga risiko ketika data itu tercuri. Kita berhak tahu juga pihak afiliasi yang menggunakan data kita dari entitas tersebut.

Privasi bukan hanya membahas hak-hak seseorang untuk membuka datanya (disclosure). Privasi juga membahas bagaimana data yang sudah dibuka digunakan. Itu sebabnya, berbicara privasi bukan hanya hak dan kewajiban membuka data, namun juga penanganan data-data tersebut.

[Untuk beberapa negara,](https://en.wikipedia.org/wiki/Privacy_policy) sudah ada yang mewajibkan adanya pernyataan yang menyatakan bagaimana penggunaan data privasi di sebuah penyedia layanan. Hal ini penting untuk konsumer tahu datanya akan diapakan. Apabila ada sesuatu yang terjadi di masa mendatang, konsumer mau pun perusahaan tersebut dapat bertindak sesuai dengan data yang lain. Hal ini juga menjadikan sebuah perusahaan untuk tidak serta merta memperlakukan data dengan ceroboh/tak bertanggung jawab.

Asal tahu saja, [kasus kemenangan besar terakhir](https://www.youtube.com/watch?v=Q9DXSCpcz9E) yang tercatat antara seorang individu dengan korporasi adalah [kasus kemenangan](https://www.ttla.com/index.cfm?pg=McDonaldsCoffeeCaseFacts) antara [seorang nenek dengan McDonald](http://www.lectlaw.com/files/cur78.htm) dalam kasus ketumpahan kopi. Itu pun terjadi disinformasi yang membuat nenek tersebut digambarkan sebagai seseorang yang mencari duit saja!

Perlindungan yang lemah terhadap individu memerlukan sebuah mekanisme pencegahan aktif dari pemerintah. Mencegah lebih baik dari pada mengobati. Apalagi biaya hukum itu mahal!

# Payung Hukum

Pemerintah saat ini harus pro-aktif mengembangkan payung hukum kebijakan yang menyeluruh. Saat ini sistem informasi dan Internet tidak lagi menjadi ranah ekslusif Depkominfo.

Saat ini saya baru melihat adanya [SNI ISO/IEC 27001:2013](http://sisni.bsn.go.id/index.php?/sni_main/sni/detail_sni/16218) mengenai keamanan informasi dan manajemen keamanan sistem informasi. SNI ini merupakan salinan dari standar internasional [ISO/IEC 27001:2013.](https://www.iso.org/standard/54534.html) Walau pun standar ISO ini yang terbaru adalah 2016, tidak mengapalah. Setidaknya ada acuan nasional yang bisa digunakan.

Namun, seperti standar SNI lainnya, saya bingung mengapa pemerintah atau pembuat kebijakan sama sekali tidak membuat referensi ke SNI ini? Buat apa, dong, SNI dibuat tapi tak satu pun diterapkan? Apakah hanya helm saja yang baru dipakaikan SNI?

Dari hasil pencarian terbatas saya, baru [POJK Nomor 38/POJK.03/2016](http://www.ojk.go.id/id/kanal/perbankan/regulasi/peraturan-ojk/Pages/POJK-tentang-Penerapan-Manajemen-Risiko-dalam-Penggunaan-Teknologi-Informasi-Oleh-Bank-Umum.aspx) tentang Penerapan Manajemen Risiko dalam Penggunaan Teknologi Informasi Oleh Bank Umum yang secara nyata membahas tentang risiko keamanan teknologi informasi. Itu pun sama sekali tidak ada menyebutkan standar apa saja yang harus dipakai. Hanya menyebutkan kemungkinan penerapan standarisasi [kerangka Basel](http://www.bis.org/bcbs/basel3.htm) [*(Basel framework)*](http://www.bis.org/bcbs/basel3.htm) di masa mendatang.

Saat ini penyedia jasa keuangan bukan hanya bank umum. Perusahaan telekomunikasi pun sudah masuk menjadi penyedia jasa keuangan. Peraturan mengenai penyediaan jasa transaksi non-tunai pun [sudah ada oleh Bank Indonesia.](http://www.bi.go.id/id/peraturan/kodifikasi/non-bank/Documents/Transfer%20Dana%20Non%20Bank%20_%20Complete.pdf) Namun, sekali lagi, hanya secara umum mengatur kerahasiaan.

Algoritma MD5 juga mengatur kerahasiaan, tapi bukan berarti bisa digunakan. Algoritma MD5 [sudah sejak lama dianggap tidak aman,](https://www.zdnet.com/article/md5-password-scrambler-no-longer-safe/) kendati masih ada yang menggunakan. Sudah saatnya pemerintah menerapkan standar minimum keamanan. Menentukan standarisasi algoritma keamanan minimum misalnya.

Memang, saat ini kita boleh berbangga hati bahwa penyelenggara transaksi keuangan saat ini yang menggunakan kartu kredit/debit internasional harus menerapkan [standarisasi EMV.](https://www.emvco.com/) Tapi, ‘kan, untuk yang tidak menggunakan/wajib menggunakan standar itu juga mulai menjamur. Lihat saja mulai banyak start up yang juga menawarkan jasa keuangan.

# Terakhir

Saya bukannya mau menakut-nakuti. Ini baru dampak negatif secara keuangan. Saya tak melebar kepada demokrasi dan lain-lain yang ada dalam bagian hidup seseorang. Namun, sudah saatnya kita tidak lagi menganggap remeh pentingnya standarisasi keamanan sistem informasi, terutama untuk mereka yang menyediakan layanan publik.

Saya berdoa, semoga standarisasi kita lebih baik. Semoga kasus penipuan SMS/telepon tidak lagi laku. Semoga waktu berharga saya dengan si dia tidak lagi terganggu asuransi afiliasi bank saya. Amin.
