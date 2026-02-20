// 1. Language Logic
function applyLanguage(lang) {
    const translations = {
        'en': {
            'title': 'Schedule Your Visit 📅',
            'nameLabel': 'Your Name',
            'serviceLabel': 'Select Services',
            'dateLabel': 'Select Date',
            'timeLabel': 'Select Time (9 AM - 9 PM)',
            'btnText': 'SEND BOOKING ON WHATSAPP 💬',
            'services': { 'Haircut': 'Haircut', 'Facial': 'Facial', 'Moustache': 'Moustache' }
        },
        'hy': {
            'title': 'Ամրագրեք ձեր այցը 📅',
            'nameLabel': 'Ձեր անունը',
            'serviceLabel': 'Ընտրեք ծառայությունները',
            'dateLabel': 'Ընտրեք ամսաթիվը',
            'timeLabel': 'Ընտրեք ժամը (9 AM - 9 PM)',
            'btnText': 'ՈՒՂԱՐԿԵԼ ԱՄՐԱԳՐՈՒՄԸ WHATSAPP-ՈՎ 💬',
            'services': { 'Haircut': 'Վարսահարդարում', 'Facial': 'Դեմքի խնամք', 'Moustache': 'Բեղեր' }
        }
    };

    const t = translations[lang] || translations['en'];

    const title = document.querySelector('.section-title');
    if(title) title.innerText = t.title;

    const labels = document.querySelectorAll('.input-group > label');
    if(labels[0]) labels[0].innerText = t.nameLabel;
    if(labels[1]) labels[1].innerText = t.serviceLabel;
    if(labels[2]) labels[2].innerText = t.dateLabel;
    if(labels[3]) labels[3].innerText = t.timeLabel;

    const btn = document.querySelector('.btn-primary');
    if(btn) btn.innerHTML = t.btnText;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    applyLanguage(savedLang);
});

// 2. WhatsApp Redirect Fix (Fixed Variables)
const bookingForm = document.getElementById('whatsappBookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('custName').value;
        const date = document.getElementById('bookDate').value;
        const time = document.getElementById('bookTime').value;
        
        let services = [];
        document.querySelectorAll('input[name="srv"]:checked').forEach(cb => services.push(cb.value));

        if (services.length === 0) {
            alert("Please select a service!");
            return;
        }

        // --- FIXED SECTION: Inko define karna zaroori tha ---
        const servicesText = services.join(', '); 
        const formattedDate = date; // HTML date format (YYYY-MM-DD)
        // --------------------------------------------------

        const msg = `Hey Priyanshu, My name is ${name}. I want to book a slot of ${servicesText}. Please book my slot on ${formattedDate} at ${time}.`;
        
        // Armenia wala number jo tune diya tha
        const phone = "37493109840"; 
        
        // URL create karke direct redirect
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
        
        window.location.href = whatsappUrl;
    });
}
