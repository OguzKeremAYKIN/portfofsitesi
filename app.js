let texts = "Hi! I'm <span class='highlight'>Oğuz.</span>";
let typewriter = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
    // 1. Yazma Mantığı ve Etiket Atlatma
    if (texts.slice(index, index + 1) === '<') {
        index = texts.indexOf('>', index) + 1;
    } else {
        index++;
    }

    // 2. Metni Güncelle
    typewriter.innerHTML = texts.slice(0, index);

    // 3. Döngü Kontrolü
    if (index < texts.length) {
        // Yazma devam ediyorsa sonraki harfe geç
        setTimeout(typeWriter, 100);
    } else {
        // Yazı bittiğinde 2 saniye bekle ve başa dön
        setTimeout(() => {
            index = 0;
            typewriter.innerHTML = ""; // Ekranı temizle
            typeWriter(); // Yeniden başlat
        }, 2000); 
    }
}

typeWriter();