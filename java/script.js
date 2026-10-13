document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm'); // تأكد إن الفورم عندك له id="contactForm" أو غيره لاسم الـ id بتاع الفورم

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // منع إعادة تحميل الصفحة
            event.preventDefault();

            // جلب القيم باستخدام الـ IDs الجديدة بتاعتك
            let name = document.getElementById('name_100').value.trim();
            let email = document.getElementById('email_100').value.trim();
            let message = document.getElementById('mass_100').value.trim();

            // ⚠️ حط رقمك هنا بالمفتاح الدولي بدون علامة + أو أصفار زائدة (مثال لمصر: 201012345678)
            let myPhoneNumber = "201224720347"; 

            // تجهيز النص للواتساب
            let whatsappMessage = `*رسالة جديدة من موقعك:*%0A` +
                                  `----------------------------------%0A` +
                                  `👤 *الاسم:* ${encodeURIComponent(name)}%0A` +
                                  `📧 *الإيميل:* ${encodeURIComponent(email)}%0A` +
                                  `💬 *الرسالة:* ${encodeURIComponent(message)}`;

            // رابط الواتساب
            let whatsappURL = `https://wa.me/${myPhoneNumber}?text=${whatsappMessage}`;
            
            // فتح واتساب في نافذة جديدة
            window.open(whatsappURL, '_blank');

            // تفريغ الحقول بعد الإرسال
            contactForm.reset();
        });
    }
});