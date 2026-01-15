# Kütüphanem Pro Max (Dosyalara Ayrılmış Sürüm)

Bu paket, gönderdiğiniz tek dosyalık uygulamayı **özellik kırpmadan** dosyalara ayırır ve şu iyileştirmeleri içerir:

- ✅ Barkod kamera başlatma: Android Chrome için daha stabil `getUserMedia` ayarları + daha net hata mesajı
- ✅ ZXing loader: CDN + **lokal fallback** (opsiyonel)
- ✅ Kapaklar: IndexedDB yüklemesi paralel (daha hızlı)
- ✅ Açıklama: HTML açıklamalar formda da düz metne temizlenir
- ✅ Yeni alan: **Satın Alınan Yer (purchasePlace)**
- ✅ Raf sekmeleri: sağ/sol kaydırma okları
- ✅ İstatistik: toplamın yanında okuma durum dağılımı (📌/📖/✅)

## Çalıştırma
HTTPS üzerinden yayınlayın (Netlify/GitHub Pages vb.).

## ZXing lokal fallback (opsiyonel ama önerilir)
Kurumsal ağ/CDN blok durumlarında stabil tarama için bu dosyayı indirip şu dosyanın yerine koyun:
- `libs/zxing-umd.min.js`

İndirilecek örnek:
- https://unpkg.com/@zxing/library@0.20.0/umd/index.min.js

## Dosya Yapısı
- `index.html`
- `assets/styles.css`
- `assets/idb.js`
- `assets/app.js`
- `assets/scanner.js`
- `manifest.json`
- `sw.js`
- `libs/zxing-umd.min.js`
