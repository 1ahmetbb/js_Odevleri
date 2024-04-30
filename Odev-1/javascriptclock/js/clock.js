//Kullanici adi
let userName = prompt('Adinizi giriniz: ')

//giris yapilmazsa
if (!userName || userName === '') {
    userName = 'Misafir'
}
document.getElementById("welcomeMessage").innerText = `Merhaba, ${userName}! Hoş geldin!`;

// Saati gösteren bir fonksiyon
function showTime() {
    let date = new Date(); // Şu anki tarih ve saat bilgisini al
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    // AM/PM formatı için saat değerini ayarla
    let session = "AM";
    if (hour === 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    // Saat, dakika ve saniye değerlerini iki haneli olacak şekilde düzenle
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    // Saat bilgisini HTML içine yerleştir
    let currentTime = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("myClock").innerHTML = `Şu an saat ${currentTime} ve bugün ${days[day]}.`;

    // Her saniyede bir saat bilgisini güncelle
    setTimeout(showTime, 1000);
}

// İlk olarak sayfa yüklendiğinde saat bilgisini göster
showTime();
