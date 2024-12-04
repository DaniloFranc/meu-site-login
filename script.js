// Aplica a máscara de telefone nos campos de contatos e contatos_responsavel
const mask = new Inputmask('(99) 99999-9999');
mask.mask(document.querySelectorAll('#contatos, #contatos_responsavel'));

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const nvlAcesso = document.getElementById('nivel_acesso').value;
    const dataCadastro = document.getElementById('dataCadastro').value;
    const contatos = document.getElementById('contatos').value;
    const responsavel = document.getElementById('responsavel').value;
    const contatosResponsavel = document.getElementById('contatos_responsavel').value;
    const tags = document.getElementById('tags').value;
    const redesSociais = document.getElementById('redes_sociais').value;
    const planosVigentes = document.getElementById('planos_vigentes').value;
    const status = document.getElementById('status').value;

    const userData = {
        nome,
        email,
        senha,
        nvlAcesso,
        dataCadastro,
        contatos,
        responsavel,
        contatosResponsavel,
        tags,
        redesSociais,
        planosVigentes,
        status
    };

    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Usuário cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar usuário: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        alert('Erro ao enviar os dados.');
    });
});

// Preenche automaticamente o campo "cadastro" com a data atual no formato Dia/Mês/Ano
window.onload = function() {
    const dataCadastroField = document.getElementById('dataCadastro');
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    dataCadastroField.value = formattedDate;
};

document.getElementById('nome').addEventListener('blur', function() {
    const nome = this.value;

    if (nome) {
        fetch(`http://localhost:5000/usuarios?nome=${nome}`)
            .then(response => response.json())
            .then(data => {
                if (data.usuarios && data.usuarios.length > 0) {
                    const usuario = data.usuarios[0];
                    document.getElementById('email').value = usuario.email || '';
                    document.getElementById('password').value = usuario.senha || '';
                    document.getElementById('nivel_acesso').value = usuario.nvlAcesso || 'usuario';
                    document.getElementById('contatos').value = usuario.contatos || '';
                    document.getElementById('responsavel').value = usuario.responsavel || '';
                    document.getElementById('contatos_responsavel').value = usuario.contatosResponsavel || '';
                    document.getElementById('tags').value = usuario.tags || '';
                    document.getElementById('redes_sociais').value = usuario.redesSociais || '';
                    document.getElementById('planos_vigentes').value = usuario.planosVigentes || '';
                    document.getElementById('status').value = usuario.status || 'ativo';
                    const dataCadastroDate = new Date(usuario.dataCadastro);
                    const day = String(dataCadastroDate.getDate()).padStart(2, '0');
                    const month = String(dataCadastroDate.getMonth() + 1).padStart(2, '0');
                    const year = dataCadastroDate.getFullYear();
                    document.getElementById('dataCadastro').value = `${day}/${month}/${year}`;
                } else {
                    alert('Usuário não encontrado. Você pode adicionar um novo usuário!');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar os dados do usuário:', error);
                alert('Erro ao buscar os dados.');
            });
    }
});

document.getElementById('submitAlterar').addEventListener('click', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const nvlAcesso = document.getElementById('nivel_acesso').value;
    const dataCadastro = document.getElementById('dataCadastro').value;
    const contatos = document.getElementById('contatos').value;
    const responsavel = document.getElementById('responsavel').value;
    const contatosResponsavel = document.getElementById('contatos_responsavel').value;
    const tags = document.getElementById('tags').value;
    const redesSociais = document.getElementById('redes_sociais').value;
    const planosVigentes = document.getElementById('planos_vigentes').value;
    const status = document.getElementById('status').value;

    const updatedData = {
        nome,
        email,
        senha,
        nvlAcesso,
        dataCadastro,
        contatos,
        responsavel,
        contatosResponsavel,
        tags,
        redesSociais,
        planosVigentes,
        status
    };

    fetch('http://localhost:5000/alterar', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Usuário atualizado com sucesso!');
        } else {
            alert('Erro ao atualizar usuário: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        alert('Erro ao atualizar os dados.');
    });
});
