// Obtém referência ao formulário de login
var loginForm = document.getElementById('login-form');

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var passwordToggle = document.querySelector('.password-toggle');

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.classList.add('show-password');
  } else {
    passwordInput.type = "password";
    passwordToggle.classList.remove('show-password');
  }
}

// Adiciona um ouvinte de evento para o envio do formulário
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores inseridos pelo usuário
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Verifica as credenciais do usuário
  if (username === 'guilherme' && password === 'gatitcha1') {
    // Redireciona para o link desejado
    window.location.href = 'https://www.linkedin.com/?trk=public_post_nav-header-logo';
  } else {
    // Credenciais inválidas, exibe uma mensagem de erro ou realiza outra ação
    alert('Credenciais inválidas!');
  }
});
