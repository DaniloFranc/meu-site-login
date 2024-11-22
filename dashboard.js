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

const AlinSubtitles0=document.getElementById("AlinSubtitles0")
const boxClassroom=document.getElementById("boxClassroom")

AlinSubtitles0.addEventListener("click",()=>{

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
    aula.setAttribute("src", "videos/aula 1 - Abertura.mp4")
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
    buttonApostila.setAttribute("class","BotãoApostila")
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



        // <!-- <div class="lineExerciciesBox"></div>
        //             <div class="titleHandout">ACESSE O RESUMO DESTE MÓDULO.</div>
        //             <button class="buttonIniciarExercicio1">Apostila</button>
        //             <div class="lineExerciciesBox1"></div> -->

        // const ExerciciesBox=document.createElement("div")
        // ExerciciesBox.setAttribute("class","ExerciciesBox")
        // boxClassroom.appendChild(ExerciciesBox)

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



        // const ExerciciesBox=document.createElement("div")
        // ExerciciesBox.setAttribute("class","ExerciciesBox")
        // boxClassroom.appendChild(ExerciciesBox)

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





