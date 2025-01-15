const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}
/*document.querySelector("#contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // منع السلوك الافتراضي للنموذج
// تعيين الزر والرسالة
    const form = document.querySelector('form');
    const thankYouMessage = document.getElementById('thank-you-message');

// إعادة تعيين الفورم و رسالة الشكر عند التحميل
    window.onload = function() {
        thankYouMessage.style.display = 'none';  // إخفاء رسالة الشكر عند تحميل الصفحة
        form.reset();  // إعادة تعيين جميع الحقول داخل النموذج
    };

// التعامل مع حدث الإرسال
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // منع الإرسال الفعلي للنموذج
        thankYouMessage.style.display = 'block';  // إظهار رسالة الشكر
    });

    // إخفاء النموذج
    /*const form = document.querySelector("#contact-form");
    form.style.display = "none";

    // إظهار رسالة الشكر
    const thankYouMessage = document.querySelector("#thank-you-message");
    thankYouMessage.style.display = "block";

    // إعادة التوجيه أو إعادة تعيين الصفحة (اختياري)
    setTimeout(() => {
        form.style.display = "block"; // إظهار النموذج من جديد
        thankYouMessage.style.display = "none"; // إخفاء رسالة الشكر
        form.reset(); // إعادة تعيين الحقول
    }, 3000);*/ // 3 ثوانٍ
