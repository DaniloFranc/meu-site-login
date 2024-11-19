async function validateAccess() {
    const token = localStorage.getItem('token');
    if (!token) {
        redirectToLogin('Você precisa fazer login para acessar esta página.');
        return;
    }

    try {
        const response = await fetch('https://nova-pasta-5.onrender.com/dashboard-data', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
            },
        });

        const data = await response.json();
        if (!data.success) {
            throw new Error(data.message);
        }

        // Remove a classe "hidden" para exibir o conteúdo
        document.body.classList.remove('hidden');
        document.getElementById('welcome-message').innerText = `${data.user.nome}`;
    } catch (error) {
        console.error('Acesso negado:', error);
        redirectToLogin('Sessão expirada ou inválida. Faça login novamente.');
    }
}

// Função para redirecionar ao login com mensagem
function redirectToLogin(message) {
    alert(message);
    localStorage.removeItem('token'); // Remove o token para segurança
    window.location.href = 'index.html'; // Redireciona para a página de login
}

// Executa a validação ao carregar a página
validateAccess();

// Logout
document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('token'); // Remove o token
    window.location.href = 'index.html'; // Redireciona para login
});

