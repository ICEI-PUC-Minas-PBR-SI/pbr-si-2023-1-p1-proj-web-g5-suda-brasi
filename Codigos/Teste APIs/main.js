fetch('https://randomuser.me/api/?nat=br&inc=gender,name,location,email,login,dob,cell,id,picture&results=10')
    .then(res => res.json())
    .then(retorno => {
        GeraBanco(retorno)
    })



function GeraBanco(dado) {
    let contato = []
    var ceps=[31741060,30570290,31630330,30350190,31742263,30881210,31585030,30620610,31525300,30662100,31130720,30516480,30260320,31550140,30664242,30525110,30570432,31360270,31910390,30575370]
    let tipos = ['Beneficiario','Doador','Instituição']
    let categorias = ['Sangue','Alimentos','Roupas','Livros','Brinquedos']
    let estados_civi = ['Solteiro', 'Casado', 'Divorciado', 'Viuvo']

    for (let i = 0; i < dado.results.length; i++) {
        let nome = `${dado.results[i].name.first} ${dado.results[i].name.last}`
        let data_nascimento = `${dado.results[i].dob.date.split('T')[0]}`
        let telefone = `${dado.results[i].cell}`
        let cpf = `${dado.results[i].id.value}`
        let email = `${dado.results[i].email}`
        let senha = `${dado.results[i].login.password}`

        let estado_civil = Sorteio(estados_civi)
        let tipo = Sorteio(tipos)
        let categoria = Sorteio(categorias)
        let cep_sorteado = Sorteio(ceps)
        let end = Endereco(cep_sorteado);

        // let rua = `${end.rua}`
        // let numero = `${dado.results[i].location.street.number}`
        // let bairro = `${end.bairro}`
        // let cidade = `${end.cidade}`
        // let estado = `${end.estado}`
        // let cep = `${end.cep}`

        let imagem = `${dado.results[i].picture.thumbnail}`

        contato.push({
            id: i,
            nome: nome,
            data_nascimento: data_nascimento,
            telefone: telefone,
            estado_civil: estado_civil,
            cpf: cpf,
            email: email,
            senha: senha,
            imagem: imagem,
            tipo: tipo,
            categoria : categoria,
            // endereco: {
            //     cep: cep,
            //     rua: rua,
            //     numero: numero,
            //     bairro: bairro,
            //     cidade: cidade,
            //     estado: estado,
            // },
            sociais: {
                renda: 1320.00,
                dependentes: 3,
                profissao: 'desempregado',
            }
        })
    }
    localStorage.setItem('db_usuario',JSON.stringify(contato))
}

function Sorteio(objeto){
    let resultado = Math.floor(Math.random() * objeto.length);
    return objeto[resultado]
}

function Endereco(cep){
    fetch(`https://api.postmon.com.br/v1/cep/${cep}`)
        .then(res => res.json())
        .then(data => {
            var endereco = [
                bairro = `${data.bairro}`,
                cidade = `${data.cidade}`,
                rua = `${data.logradouro}`,
                estado = `${data.estado}`
            ]
            return endereco;
        })
}    

