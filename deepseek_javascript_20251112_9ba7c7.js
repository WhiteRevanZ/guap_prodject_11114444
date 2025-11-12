// Мобильное меню
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Закрытие меню при клике на пункт
document.querySelectorAll('nav ul li a').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('nav ul').classList.remove('active');
    });
});

// Валидация формы
document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    
    // Проверка email
    if (!email.includes('@')) {
        emailError.style.display = 'block';
        return;
    } else {
        emailError.style.display = 'none';
    }
    
    // Если все проверки пройдены
    alert('Сообщение отправлено!');
    this.reset();
});

// Скрытие ошибки при вводе
document.getElementById('email').addEventListener('input', function() {
    document.getElementById('email-error').style.display = 'none';
});

// Плавная прокрутка для всех ссылок с якорями
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});