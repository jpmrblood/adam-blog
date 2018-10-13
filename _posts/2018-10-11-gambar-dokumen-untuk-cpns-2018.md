---
layout: post
title: "Gambar Dokumen Untuk CPNS 2018"
date:  2018-10-11 18:03:31 +0700
description: Perkakas-perkakas untuk membantu membuat dokumen yang dibutuhkan di CPNS 2018.
img: 2018/10/korpri.jpg # Add image post (optional)
tags: [tips,cpns]
author: Jan Peter Alexander Rajagukguk # Add name author (optional)
---

Saat ini pembukaan CPNS masih berlanjut sampai 15 Oktober 2018. Mudah-mudahan tips ini masih bisa membantu beberapa orang. Saya menggunakan sistem operasi GNU/Linux di laptop saya dan Android di telepon genggam saya. Dengan alat-alat sederhana ini, saya bisa membuat dokumen yang baik.

# Pemindaian

Dahulu, kita harus pergi ke tukang fotokopi untuk melakukan pemindaian. Butuh mesin khusus pemindai untuk membuat dokumen-dokumen kita menjadi gambar yang sesuai. Untungnya, saat ini hal tersebut sudah tak perlu.

Dengan memasang aplikasi Office Lens pada [PC](https://www.microsoft.com/id-id/p/office-lens/9wzdncrfj3t8?activetab=pivot%3aoverviewtab), [telepon Android](https://play.google.com/store/apps/details?id=com.microsoft.office.officelens&hl=in), atau [iOS Apple](https://itunes.apple.com/us/app/office-lens/id975925059?mt=8), kita sudah memiliki aplikasi pemindaian yang cukup. Aplikasi ini bisa mengakses kamera atau pun gambar untuk mengenali bentuk kertas dan dokumen.

Caranya mudah:
- Taruh dokumen pada permukaan yang rata. Foto dengan telepon genggam. Hati-hati dengan sumber cahaya agar bayangan tangan tidak terlihat.

![Contoh pengenalan dokumen Office Lens](/assets/img/2018/10/office-lense.jpg)

- Buka Office Lens dan buka foto yang baru kita ambil tersebut.
- Office Lens akan berusaha mengenali ujung-ujungnya. Anda bisa klik tombol pemotongan untuk menggerakkan ujung-ujung bila tidak pas.

![Hasil pengenalan](/assets/img/2018/10/dokumen-terpindai.jpg)

Hasilnya lumayan.

# Optimasi Gambar

Sayangnya, foto dari kamera telepon genggam memiliki dimensi yang cukup besar. Hal ini mengakibatkan ukuran berkas menjadi besar. Padahal, situs SSCN BKN mengharuskan kita untuk memiliki gambar dengan ukuran tertentu.

Saya biasanya menggunakan [GIMP](https://www.gimp.org/) atau alat yang lain untuk mengurangi resolusi. Saya membuat dimensi terbesar (lebar atau tinggi) dengan 1024. Untuk optimasi lebih lanjut, saya menggunakan aplikasi [RIOT](http://luci.criosweb.ro/riot/). Anda bisa menggunakan WINE pada GNU/Linux untuk menjalankan aplikasi ini.

# Membuat PDF

SSCN menginginkan dua atau gambar menjadi satu PDF. Di GNU/Linux ada ImageMagick yang memiliki perkakas `convert`. Saya menggunakan aplikasi ini cukup gunakan:

```sh
convert 1.jpg 2.jpg output.pdf
```

Untuk lebih lanjut mengurangi ukuran PDF, bisa gunakan Ghostscript:

```sh
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=dokumen-gabungan.pdf output.pdf
```

Bila ukuran masih kelebihan, Anda bisa mengurangi dimensi gambar dan membuat ulang PDF.

Semoga bermanfaat.
