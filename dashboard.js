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


// página de aulas \/

const ABERTURA=document.getElementById("ABERTURA")
const PROPRIEDADESDAMÚSICAMELODIA=document.getElementById("PROPRIEDADESDAMÚSICAMELODIA")
const CONCEITODEHARMONIA=document.getElementById("CONCEITODEHARMONIA")
const boxClassroom=document.getElementById("boxClassroom")

// Função para buscar o progresso do backend
function fetchProgress() {
    fetch('http://localhost:5000/get-progress', {
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

            // Atualiza a barra de progresso com o valor recuperado do backend
            progressBar.style.width = `${progress}%`;
            progressValue.textContent = `${progress}%`;

            // Se o progresso for maior que 0, marca o checkbox
            checkbox.checked = progress > 0;
        } else {
            console.error('Erro ao buscar o progresso:', data.message);
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}

ABERTURA.addEventListener("click", () => {
    // Limpa a tela antes de adicionar os novos elementos
    while (boxClassroom.firstChild) {
        boxClassroom.removeChild(boxClassroom.firstChild);
    }

    // Título da aula
    const titleAula = document.createElement("div");
    titleAula.setAttribute("class", "titleAula");
    titleAula.innerHTML = "Aula 1 - Abertura";
    boxClassroom.prepend(titleAula);

    // Vídeo da aula
    const videoAula = document.createElement("video");
    videoAula.setAttribute("class", "videoAula");
    videoAula.setAttribute("controls", "");

    const aula = document.createElement("source");
    aula.setAttribute("src", "videos/MusicalTheoryModule1/aula 1 - Abertura.mp4");
    aula.setAttribute("type", "video/mp4");
    videoAula.appendChild(aula);
    boxClassroom.appendChild(videoAula);

    // Botões de apostilas e exercícios
    const AlinBotApostilas = document.createElement("div");
    AlinBotApostilas.setAttribute("class", "AlinBotApostilas");
    boxClassroom.appendChild(AlinBotApostilas);

    const buttonExercicies = document.createElement("button");
    buttonExercicies.setAttribute("id", "buttonExercicies");
    buttonExercicies.setAttribute("class", "BotãoExercicio clickedButton");
    buttonExercicies.innerHTML = "EXERCÍCIO";
    AlinBotApostilas.appendChild(buttonExercicies);

    const ExerciciesBox = document.createElement("div");
    ExerciciesBox.setAttribute("class", "ExerciciesBox");
    boxClassroom.appendChild(ExerciciesBox);

    const lineExerciciesBox = document.createElement("div");
    lineExerciciesBox.setAttribute("class", "lineExerciciesBox");
    ExerciciesBox.prepend(lineExerciciesBox);

    const buttonIniciarExercicio = document.createElement("button");
    buttonIniciarExercicio.setAttribute("class", "buttonIniciarExercicio");
    buttonIniciarExercicio.innerHTML = "Iniciar Exercício";
    ExerciciesBox.appendChild(buttonIniciarExercicio);

    const lineExerciciesBox1 = document.createElement("div");
    lineExerciciesBox1.setAttribute("class", "lineExerciciesBox1");
    ExerciciesBox.appendChild(lineExerciciesBox1);

    // Adicionando o checkbox
    const checkboxContainer = document.createElement("div");
    checkboxContainer.setAttribute("class", "checkbox-container");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "lesson-checkbox");
    checkbox.setAttribute("id", "checkbox");
    checkbox.setAttribute("data-percentage", "2.86");

    const label = document.createElement("label");
    label.setAttribute("for", "checkbox");
    label.textContent = "Marcar como concluído";

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
    boxClassroom.appendChild(checkboxContainer);

    // Função para buscar o progresso do backend
    function fetchProgress() {
        fetch('http://localhost:5000/get-progress', {
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

                // Atualiza a barra de progresso com o valor recuperado do backend
                progressBar.style.width = `${progress}%`;
                progressValue.textContent = `${progress}%`;

                // Se o progresso for maior que 0, marca o checkbox
                checkbox.checked = progress > 0;
            } else {
                console.error('Erro ao buscar o progresso:', data.message);
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    }

    // Chama a função para buscar o progresso ao carregar a aula
    fetchProgress();

    // Atualizar barra de progresso ao marcar/desmarcar o checkbox
    checkbox.addEventListener("change", () => {
        const progressBar = document.getElementById("progress");
        const progressValue = document.getElementById("progress-value");
        const percentage = parseFloat(checkbox.dataset.percentage);

        if (checkbox.checked) {
            progressBar.style.width = `${percentage}%`;
            progressValue.textContent = `${percentage}%`;
            sendProgressToDB(percentage); // Enviar progresso para o DB
        } else {
            progressBar.style.width = "0%";
            progressValue.textContent = "0%";
            sendProgressToDB(0); // Enviar 0% quando desmarcar
        }
    });

    // Função para enviar o progresso ao backend
    function sendProgressToDB(progress) {
        fetch('http://localhost:5000/update-progress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Supondo que o token esteja armazenado no localStorage
            },
            body: JSON.stringify({ progress })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Progresso atualizado com sucesso!');
            } else {
                console.error('Erro ao atualizar o progresso:', data.message);
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    }

});

PROPRIEDADESDAMÚSICAMELODIA.addEventListener("click",()=>{

    while (boxClassroom.firstChild) {
        boxClassroom.removeChild(boxClassroom.firstChild);
    }


    const titleAula=document.createElement("div")
    titleAula.setAttribute("class", "titleAula")
    titleAula.innerHTML ="Aula 2 - Propriedades da Música / Melodia"
    boxClassroom.prepend(titleAula)

    const videoAula=document.createElement("video")
    videoAula.setAttribute("class","videoAula")
    videoAula.setAttribute("controls","")

    const aula=document.createElement("source")
    aula.setAttribute("src", "videos/MusicalTheoryModule1/aula 2 - PROPRIEDADES DA MÚSICAMELODIA.mp4")
    aula.setAttribute("type", "video/mp4")    
    videoAula.appendChild(aula)
    boxClassroom.appendChild(videoAula)

       
    const AlinBotApostilas=document.createElement("div")
    AlinBotApostilas.setAttribute("class","AlinBotApostilas")
    boxClassroom.appendChild(AlinBotApostilas)

    const buttonExercicies=document.createElement("button")
    buttonExercicies.setAttribute("id","buttonExercicies")
    buttonExercicies.setAttribute("class","BotãoExercicio clickedButton")
    buttonExercicies.innerHTML="EXERCÍCIO"
    AlinBotApostilas.appendChild(buttonExercicies)

    const buttonApostila=document.createElement("button")
    buttonApostila.setAttribute("id","buttonApostila")
    buttonApostila.setAttribute("class","BotãoApostila unclickedButton")
    buttonApostila.innerHTML="APOSTILA"
    AlinBotApostilas.appendChild(buttonApostila)

    const ExerciciesBox=document.createElement("div")
    ExerciciesBox.setAttribute("class","ExerciciesBox")
    boxClassroom.appendChild(ExerciciesBox)

    const lineExerciciesBox=document.createElement("div")
    lineExerciciesBox.setAttribute("class","lineExerciciesBox")
    ExerciciesBox.prepend(lineExerciciesBox)

    const buttonIniciarExercicio=document.createElement("button")
    buttonIniciarExercicio.setAttribute("class","buttonIniciarExercicio")
    buttonIniciarExercicio.innerHTML="Iniciar Exercício"
    ExerciciesBox.appendChild(buttonIniciarExercicio)

    const lineExerciciesBox1=document.createElement("div")
    lineExerciciesBox1.setAttribute("class","lineExerciciesBox1")
    ExerciciesBox.appendChild(lineExerciciesBox1)


    buttonApostila.addEventListener('click', function() {
        
        buttonApostila.classList.add('clickedButton');  
        buttonApostila.classList.remove('unclickedButton');  
        
        buttonExercicies.classList.remove('clickedButton'); 
        buttonExercicies.classList.add('unclickedButton'); 
        
        while (ExerciciesBox.firstChild) {
            ExerciciesBox.removeChild(ExerciciesBox.firstChild);
        }


        const lineExerciciesBox=document.createElement("div")
        lineExerciciesBox.setAttribute("class","lineExerciciesBox")
        ExerciciesBox.prepend(lineExerciciesBox)

        const titleHandout=document.createElement("div")
        titleHandout.setAttribute("class","titleHandout")
        titleHandout.innerHTML="ACESSE O RESUMO DESTE MÓDULO"
        ExerciciesBox.appendChild(titleHandout)

        const buttonIniciarExercicio1=document.createElement("button")
        buttonIniciarExercicio1.setAttribute("class","buttonIniciarExercicio1")
        buttonIniciarExercicio1.innerHTML="Apostila"


        buttonIniciarExercicio1.addEventListener('click', function() {
            window.open('pdfs/Modulo 1/Teoria Musical - Modulo 1 - Aula 2.pdf', '_blank');
        });


        ExerciciesBox.appendChild(buttonIniciarExercicio1)

        const lineExerciciesBox1=document.createElement("div")
        lineExerciciesBox1.setAttribute("class","lineExerciciesBox1")
        ExerciciesBox.appendChild(lineExerciciesBox1)




    });

    buttonExercicies.addEventListener('click', function() {
        
        buttonExercicies.classList.add('clickedButton');  
        buttonExercicies.classList.remove('unclickedButton');  
        
        buttonApostila.classList.remove('clickedButton');  
        buttonApostila.classList.add('unclickedButton');  


        while (ExerciciesBox.firstChild) {
            ExerciciesBox.removeChild(ExerciciesBox.firstChild);
        }


        const lineExerciciesBox=document.createElement("div")
        lineExerciciesBox.setAttribute("class","lineExerciciesBox")
        ExerciciesBox.prepend(lineExerciciesBox)

        const buttonIniciarExercicio=document.createElement("button")
        buttonIniciarExercicio.setAttribute("class","buttonIniciarExercicio")
        buttonIniciarExercicio.innerHTML="Iniciar Exercício"
        ExerciciesBox.appendChild(buttonIniciarExercicio)

        const lineExerciciesBox1=document.createElement("div")
        lineExerciciesBox1.setAttribute("class","lineExerciciesBox1")
        ExerciciesBox.appendChild(lineExerciciesBox1)



    });

    
    

    

})

CONCEITODEHARMONIA.addEventListener("click",()=>{

    while (boxClassroom.firstChild) {
        boxClassroom.removeChild(boxClassroom.firstChild);
    }


    const titleAula=document.createElement("div")
    titleAula.setAttribute("class", "titleAula")
    titleAula.innerHTML ="Aula 3 - Conceito de Harmonia"
    boxClassroom.prepend(titleAula)

    const videoAula=document.createElement("video")
    videoAula.setAttribute("class","videoAula")
    videoAula.setAttribute("controls","")

    const aula=document.createElement("source")
    aula.setAttribute("src", "videos/MusicalTheoryModule1/aula 3 - CONCEITO DE HARMONIA.mp4")
    aula.setAttribute("type", "video/mp4")    
    videoAula.appendChild(aula)
    boxClassroom.appendChild(videoAula)

       
    const AlinBotApostilas=document.createElement("div")
    AlinBotApostilas.setAttribute("class","AlinBotApostilas")
    boxClassroom.appendChild(AlinBotApostilas)

    const buttonExercicies=document.createElement("button")
    buttonExercicies.setAttribute("id","buttonExercicies")
    buttonExercicies.setAttribute("class","BotãoExercicio clickedButton")
    buttonExercicies.innerHTML="EXERCÍCIO"
    AlinBotApostilas.appendChild(buttonExercicies)

    const buttonApostila=document.createElement("button")
    buttonApostila.setAttribute("id","buttonApostila")
    buttonApostila.setAttribute("class","BotãoApostila unclickedButton")
    buttonApostila.innerHTML="APOSTILA"
    AlinBotApostilas.appendChild(buttonApostila)

    const ExerciciesBox=document.createElement("div")
    ExerciciesBox.setAttribute("class","ExerciciesBox")
    boxClassroom.appendChild(ExerciciesBox)

    const lineExerciciesBox=document.createElement("div")
    lineExerciciesBox.setAttribute("class","lineExerciciesBox")
    ExerciciesBox.prepend(lineExerciciesBox)

    const buttonIniciarExercicio=document.createElement("button")
    buttonIniciarExercicio.setAttribute("class","buttonIniciarExercicio")
    buttonIniciarExercicio.innerHTML="Iniciar Exercício"
    ExerciciesBox.appendChild(buttonIniciarExercicio)

    const lineExerciciesBox1=document.createElement("div")
    lineExerciciesBox1.setAttribute("class","lineExerciciesBox1")
    ExerciciesBox.appendChild(lineExerciciesBox1)


    buttonApostila.addEventListener('click', function() {
        
        buttonApostila.classList.add('clickedButton');  
        buttonApostila.classList.remove('unclickedButton');  
        
        buttonExercicies.classList.remove('clickedButton'); 
        buttonExercicies.classList.add('unclickedButton'); 
        
        while (ExerciciesBox.firstChild) {
            ExerciciesBox.removeChild(ExerciciesBox.firstChild);
        }


        const lineExerciciesBox=document.createElement("div")
        lineExerciciesBox.setAttribute("class","lineExerciciesBox")
        ExerciciesBox.prepend(lineExerciciesBox)

        const titleHandout=document.createElement("div")
        titleHandout.setAttribute("class","titleHandout")
        titleHandout.innerHTML="ACESSE O RESUMO DESTE MÓDULO"
        ExerciciesBox.appendChild(titleHandout)

        const buttonIniciarExercicio1=document.createElement("button")
        buttonIniciarExercicio1.setAttribute("class","buttonIniciarExercicio1")
        buttonIniciarExercicio1.innerHTML="Apostila"


        buttonIniciarExercicio1.addEventListener('click', function() {
            window.open('pdfs/Modulo 1/Teoria Musical - Modulo 1 - Aula 2.pdf', '_blank');
        });


        ExerciciesBox.appendChild(buttonIniciarExercicio1)

        const lineExerciciesBox1=document.createElement("div")
        lineExerciciesBox1.setAttribute("class","lineExerciciesBox1")
        ExerciciesBox.appendChild(lineExerciciesBox1)




    });

    buttonExercicies.addEventListener('click', function() {
        
        buttonExercicies.classList.add('clickedButton');  
        buttonExercicies.classList.remove('unclickedButton');  
        
        buttonApostila.classList.remove('clickedButton');  
        buttonApostila.classList.add('unclickedButton');  


        while (ExerciciesBox.firstChild) {
            ExerciciesBox.removeChild(ExerciciesBox.firstChild);
        }


        const lineExerciciesBox=document.createElement("div")
        lineExerciciesBox.setAttribute("class","lineExerciciesBox")
        ExerciciesBox.prepend(lineExerciciesBox)

        const buttonIniciarExercicio=document.createElement("button")
        buttonIniciarExercicio.setAttribute("class","buttonIniciarExercicio")
        buttonIniciarExercicio.innerHTML="Iniciar Exercício"
        ExerciciesBox.appendChild(buttonIniciarExercicio)

        const lineExerciciesBox1=document.createElement("div")
        lineExerciciesBox1.setAttribute("class","lineExerciciesBox1")
        ExerciciesBox.appendChild(lineExerciciesBox1)



    });

    
    

    

})



document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos de curso
    const courseItems = document.querySelectorAll('.AlinSubtitles1, .AlinSubtitles0');

    // Seleciona o contêiner onde está a aula
    const classroomBox = document.getElementById('boxClassroom');

    courseItems.forEach(item => {
        // Adiciona um evento de clique para cada item
        item.addEventListener('click', () => {

            courseItems.forEach(course => course.classList.remove('selected'));

                // Adiciona a classe 'selected' ao item clicado
            item.classList.add('selected');
           
            if (window.innerWidth < 992) {
                // Remove a classe 'selected' de todos os itens
                

                // Faz a página rolar até a aula no final
                classroomBox.scrollIntoView({
                    behavior: 'smooth', // Rola suavemente
                    block: 'start' // Alinha o contêiner ao início da tela
                });
            }
        });
    });
});

//Função de Inclusão de Usuários no formulário






    


//Função do CRUD tabela



// Chama a função para carregar os dados assim que a página for carregada

window.onload = loadUserData;










