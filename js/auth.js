// Formlar arası geçiş (Eski kodun)
function toggleView() {
    const login = document.getElementById('login-box');
    const register = document.getElementById('register-box');
    
    if (login.style.display === 'none') {
        login.style.display = 'block';
        register.style.display = 'none';
    } else {
        login.style.display = 'none';
        register.style.display = 'block';
    }
}

// Giriş işlemi -> dashboard.html'e gönderir
function executeLogin() {
    const user = document.getElementById('log-user').value;
    if (user) {
        window.location.href = 'dashboard.html';
    } else {
        alert("Enter credentials.");
    }
}

// Kayıt işlemi -> dashboard.html'e gönderir
function executeRegister() {
    const name = document.getElementById('reg-name').value;
    if (name) {
        window.location.href = 'dashboard.html';
    } else {
        alert("Fill the form.");
    }
}

// Çıkış yap -> index.html'e geri gönderir
function handleLogout() {
    window.location.href = 'index.html';
}
