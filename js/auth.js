// Giriş Yapma Fonksiyonu
function login() {
    // Burada API doğrulaması yapılır
    localStorage.setItem('session_active', 'true');
    window.location.href = 'dashboard.html';
}

// Çıkış Yapma Fonksiyonu
function logout() {
    localStorage.removeItem('session_active');
    window.location.href = 'index.html';
}

// Güvenlik Koruması (Dashboard'da çalışan koruma)
function checkAuth() {
    if (localStorage.getItem('session_active') !== 'true') {
        window.location.href = 'index.html';
    }
}
