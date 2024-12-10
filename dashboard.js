const nvlAcesso = localStorage.getItem('nvlAcesso');

    // Verifica se o nvlAcesso existe
if (nvlAcesso) {
        // Exibe o nvlAcesso no elemento com id 'nivelAcessoDisplay'
    document.getElementById('nivelAcessoDisplay').innerText = `Nível de Acesso: ${nvlAcesso}`;
} else {
        // Se o nvlAcesso não estiver disponível, exibe uma mensagem padrão
    document.getElementById('nivelAcessoDisplay').innerText = 'Nível de Acesso não encontrado';
}



// Verifica o nível de acesso
if (nvlAcesso === '2' || nvlAcesso === '3') {
    // Se o nível de acesso for 2 ou 3, oculta a aba de "Usuários"
    const usuariosMenuItem = document.querySelector('a[href="CrudUsuarios.html"]');
    if (usuariosMenuItem) {
        usuariosMenuItem.closest('li').style.display = 'none';  // Esconde o item de menu
    }
}

// Exibe a mensagem de boas-vindas ao usuário
const nomeUsuario = localStorage.getItem('nome');
if (nomeUsuario) {
    document.getElementById('welcome-message').innerText = `Bem-vindo, ${nomeUsuario}`;
}


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

function fetchProgress0() {
    fetch('https://nova-pasta-5.onrender.com/get-progress', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Usando o token do localStorage
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const progress = data.progress || 0; // Se não houver progresso, assume 0
            const progressBar = document.getElementById("progress");
            const progressValue = document.getElementById("progress-value");
            const ultimaInteracao = document.getElementById("ultimaInteracao");
            const progressBox = document.getElementById("AlinLetterProgressBoxCourse"); // Seleciona a caixa de progresso

            // Atualiza a barra de progresso com o valor recuperado do backend
            progressBar.style.width = `${progress}%`;
            progressValue.innerHTML = `${progress}%`;

            
            

            // Atualiza o valor de últimaInteracao e controla a visibilidade da caixa de progresso
            if (progress > 0) {

                ultimaInteracao.innerHTML = `Última interação: ${progress}%`;
                // progressBox.style.display = 'none';
                
                                
            } else {

                ultimaInteracao.innerHTML = "Última interação: Não iniciado";
                // progressBox.style.display = 'block'; 
            }

            // Se o progresso for maior que 0, marca o checkbox (opcional, se necessário)
            const checkbox = document.getElementById('checkbox');
            checkbox.checked = progress > 0;


            

        } else {
            console.error('Erro ao buscar o progresso:', data.message);
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}



//Função de Inclusão de Usuários no formulário






    


//Função do CRUD tabela



// Chama a função para carregar os dados assim que a página for carregada

window.onload = loadUserData;










