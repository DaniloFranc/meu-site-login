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

ABERTURA.addEventListener("click",()=>{

    while (boxClassroom.firstChild) {
        boxClassroom.removeChild(boxClassroom.firstChild);
    }


    const titleAula=document.createElement("div")
    titleAula.setAttribute("class", "titleAula")
    titleAula.innerHTML ="Aula 1 - Abertura"
    boxClassroom.prepend(titleAula)

    const videoAula=document.createElement("video")
    videoAula.setAttribute("class","videoAula")
    videoAula.setAttribute("controls","")

    const aula=document.createElement("source")
    aula.setAttribute("src", "videos/MusicalTheoryModule1/aula 1 - Abertura.mp4")
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


    

    
    

    

})

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










