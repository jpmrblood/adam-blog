---
layout: post
title:  Belajar dari Equifax; Penerapan Keamanan TIK
date:   2017-09-15 00:00:00 +0700
description: Data pribadi ratusan juta rakyat Amerika Serikat yang dipegang oleh Equifax terbobol oleh peretas.
img: 2018/04/hack.jpg # Add image post (optional)
tags: [retas,equifax,data,privasi]
author: Jan Peter Alexander Rajagukguk # Add name author (optional)
---
Equifax ternyata terjebol dari titik celah keamanan pustaka web Apache Struts. Celah dengan kode [CVE-2017-5638](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5638) tersebut merupakan celah keamanan yang memungkinkan penyerang mengunggah kode yang dapat menjalankan perintah-perintah berbahaya. Celah ini diumumkan pada 19 Maret 2017.

Pengembang Apache telah menambal celah keamanan tersebut pada [hari yang sama.](https://cwiki.apache.org/confluence/display/WW/S2-045) Namun, Equifax tidak dapat dengan segera menambal celah tersebut dengan cepat. Bisa jadi, hal ini disebabkan oleh karena penambalan tersebut akan menyebabkan operasi bisnis Equifax terhenti.

Praktik Standar Keamanan Informasi
Tidak akan pernah ada perangkat lunak yang tidak bercacat. Hal ini berlaku baik untuk perangkat lunak bebas/terbuka (FOSS) atau pun perangkat lunak tertutup *(proprietary).* Untuk itu, diperlukan penerapan prinsip-prinsip penerapan TIK yang benar dalam sebuah organisasi. [*The Apache Struts Project Management Committee (PMC)* memberikan saran](https://blogs.apache.org/foundation/entry/apache-struts-statement-on-equifax) mengenai hal tersebut:

1. Mengerti pustaka perangkat lunak dan versinya apa saja yang digunakan dalam organisasi. Ikuti dan lacak perkembangan untuk setiap perangkat lunak tersebut.
2. Buat sebuah proses dalam organisasi untuk dapat menambal dengan cepat. Cepat dalam hitungan jam atau beberapa hari, bukan bulan atau pun tahun. Kasus yang ditemui biasanya kasus penjebolan melalui cacat yang sudah diumumkan berbulan/bertahun-tahun sebelumnya.
3. Setiap perangkat lunak yang kompleks mengandung cacat. Jangan membuat kebijakan keamanan *(security policy)* berdasarkan asumsi bahwa perangkat lunak yang mendukung itu bebas cacat, terutama kecacatan dalam hal keamanan.
4. Buat lapisan-lapisan keamanan. Adalah sebuah praktik pengembangan perangkat lunak yang baik untuk melindungi setiap lapisan yang ada di belakang lapisan presentasi seperti Apache Struts. Terjebolnya lapisan presentasi (web) seharusnya tidak menyebabkan akses menyeluruh kepada seluruh data.
5. Buat pemonitoran yang aktif terhadap Web yang dimiliki. Saat ini sudah banyak solusi baik perangkat lunak terbuka mau pun komersial yang bisa mendeteksi dan memberitahukan adanya pola-pola penyerangan.

Kelima hal tersebut merupakan standar paling dasar yang seharusnya diterapkan dalam sebuah organisasi yang menggunakan TIK. Bahkan, ada hal-hal lain juga yang perlu diperhatikan selain perangkat lunak dan perangkat keras dalam perusahaan. Keamanan sistem informasi juga perlu mempertimbangkan sumber daya manusia dan yang lainnya yang dapat menimbulkan risiko keamanan.

Semua ini sudah ada dalam standar-standar Kebijakan TIK. Ada ITIL, TOGAF 9.1, dan bahkan ISO/IEC 27001:2013. Semuanya bisa dipilih dan diterapkan kepada organisasi. Biasanya, mereka menerapkan level dan roadmap sesuai dengan kebutuhan organisasi.

Hal sederhana yang diatur oleh kerangka-kerangka tersebut misalnya kebijakan sandi *(Password Policy).* Kebijakan ini sudah lumrah menjadi bagian dari standar Kebijakan TIK. Semua sistem operasi, baik [Microsoft Windows](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/hh994572(v%3Dws.11)) maupun [GNU/Linux,](https://www.ostechnix.com/how-to-set-password-policies-in-linux/) sudah memiliki perkakas untuk menerapkan kebijakan pembuatan sandi.

Bukan hanya itu, Badan standar Amerika (NIST) menganjurkan kebijakan cara membuat sandi yang benar dalam [NIST SP 800-63B-3.](https://pages.nist.gov/800-63-3/sp800-63b.html) SANS Institute bahkan menawarkan templat dokumen yang dapat digunakan untuk [membuat sandi.](http://www.sans.org/security-resources/policies/general/pdf/password-protection-policy) Sedikit pencarian dapat ditemukan [artikel yang memberikan petunjuk kepada pengguna ketika membuat sandi.](http://www.itmanagerdaily.com/password-policy-template/) Pembuatan sandi yang aman itu sendiri masuk dalam [ITIL Access Management.](http://www.bmc.com/guides/itil-access-management.html)

# Metrik Pengukuran Penerapan Keamanan Sistem Informasi

Bagi sebuah organisasi, tidaklah mudah untuk menerapkan kerangka kebijakan TIK seperti ITIL dan sejenisnya. Ada harga yang harus dibayarkan yang cenderung mahal. Jasa konsultasi dan proses penataan kembali SOP misalnya. Kesulitan organisasi pada umumnya gagal memberikan pembenaran untuk tingkat keamanan yang harus disediakannya. Tak terkecuali Equifax.

Untuk itu, ada prinsip yang selalu saya pegang sejak lama:

> *Keamanan* berbanding terbalik dengan *Kenyamanan*

Mengakses langsung tentunya jauh lebih cepat dari pada mengakses melalui HTTPS dan memasukkan sandi. Menaruh satpam dan CCTV di depan pintu gerbang menghabiskan banyak duit dibandingkan gerbang terbuka bagi siapa saja

Untuk memilih titik tengah antara pengamanan dan kenyamanan adalah sebenarnya memilih metrik yang tepat. Metrik ini dipakai untuk mengukur tingkat keamanan yang dibutuhkan untuk dicapai dengan tingkat kenyamanan yang bisa diterima. Beberapa metrik yang sederhana yang saya tahu:

Visi dan misi organisasi. Hal fundamental ini yang mendasari semua hal dalam organisasi. Keamanan tentunya juga bagian dari visi dan misi organisasi. Jika terkandung visi tridarma, maka keamanan harus disesuaikan dengan kemudahan menerapkan tridarma. Jika misi mendukung disabilitas, maka keamanan yang diterapkan harus mencakup kaum difabel.
Pengalaman Pengguna (User eXperience). Pengalaman pengguna ini justru membuat keamanan itu seakan nyaman. Hal ini karena praktik keamanan yang lumrah di pengguna (kebiasaan) dapat menyebabkan persepsi kenyamanan tinggi bagi pengguna. Bahkan anehnya lagi, jika keamanan itu tidak diterapkan, pengguna malah merasa tidak nyaman. Metrik ini berguna untuk membuat penerapan keamanan yang baik atau pun menerapkan langkah-langkah bertahap untuk mencapai standar keamanan tanpa membuat pengguna terusik.
Manajemen Risiko (Risk Management). Manajemen Risiko membuat penilaian tentang risiko-risiko yang mungkin terjadi beserta dengan dampaknya. Saya paling suka dengan dokumen ini karena bila sebuah risiko dapat dikuantifikasi, kita dapat tahu seberapa potensi kerugian organisasi. Dengan menggunakan penilaian ini, kita juga dapat terbantu untuk mengenali titik-titik yang harus dilindungi dalam organisasi dan membuat proses mitigasi sesuai dengan level risiko dan nilai kerugian yang dapat timbul.
Ketiga metrik ini menurut saya cukup untuk mengukur dan membuat kebijakan keamanan dalam sebuah organisasi. Tentunya, ada beberapa kerangka ITIL, TOGAF, dan lainnya yang sudah menerapkan cara baku yang mencakup itu semua. Ya, intinya, buatlah sesuai kemampuan dan kepentingan organisasi.