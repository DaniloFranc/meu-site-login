// Exibe o formulário de recuperação de senha ao clicar no link "Esqueceu a senha?"
document.getElementById('forgotPasswordLink').addEventListener('click', () => {
    // Esconde a caixa de login e exibe a caixa de recuperação de senha
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('forgotPasswordBox').style.display = 'block';
});

// Volta para o formulário de login ao clicar no botão "Voltar para login"
document.getElementById('backToLogin').addEventListener('click', () => {
    // Esconde a caixa de recuperação de senha e exibe a caixa de login
    document.getElementById('forgotPasswordBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});



// Lógica de login
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://nova-pasta-5.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, password }),
        });

        const data = await response.json();
        if (data.success) {
            localStorage.setItem('token', data.token); // Salva o token no localStorage
            window.location.href = 'dashboardComBootStrapGuardar.html'; // Redireciona para o dashboard
        } else {
            document.getElementById('error-message').innerText = data.message;
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        document.getElementById('error-message').innerText = 'Erro ao conectar ao servidor.';
    }
});



// Lógica para recuperação de senha
document.getElementById('forgotPasswordForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;

    try {
        const response = await fetch('https://nova-pasta-5.onrender.com/recover-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        const data = await response.json();
        if (data.success) {
            alert('Instruções para recuperação de senha enviadas!');
            // Volta para o login após o sucesso
            document.getElementById('forgotPasswordBox').style.display = 'none';
            document.getElementById('loginBox').style.display = 'block';
        } else {
            alert(data.message); // Mostra a mensagem de erro
        }
    } catch (error) {
        console.error('Erro ao recuperar senha:', error);
        alert('Erro ao conectar ao servidor.');
    }
});