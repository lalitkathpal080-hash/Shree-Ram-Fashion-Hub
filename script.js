// Language data - Isme tum text change kar sakte ho
const translations = {
    'en': {
        title: "SHREE RAM",
        sub: "Fashion Hub",
        explore: "Explore",
        about: "About us"
    },
    'hy': {
        title: "ՇՐԻ ՌԱՄ",
        sub: "Նորաձևության կենտրոն",
        explore: "Բացահայտեք",
        about: "Մեր մասին"
    },
    'ru': {
        title: "ШРИ РАМ",
        sub: "Центр моды",
        explore: "Исследовать",
        about: "О нас"
    }
};

function setLanguage(lang) {
    // 1. Modal ko chhupao
    document.getElementById('lang-modal').style.display = 'none';

    // 2. Text badlo (IDs ke hisaab se)
    if (translations[lang]) {
        document.querySelector('.brand-name h1').innerText = translations[lang].title;
        document.querySelector('.brand-name span').innerText = translations[lang].sub;
        document.querySelector('.gallery .section-title').innerText = translations[lang].explore;
        document.querySelector('.about .section-title').innerText = translations[lang].about;
    }
    
    // Save selection in browser
    localStorage.setItem('selectedLang', lang);
}

// Page load hote hi check karega
window.onload = () => {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
        // Agar pehle select kiya hai toh modal mat dikhao
        document.getElementById('lang-modal').style.display = 'none';
        setLanguage(savedLang);
    }
};
