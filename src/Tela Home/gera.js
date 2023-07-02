function GeraBanco(){
    let usuarios = [
        {
            "id": 0,
            "nome": "admin",
            "email": "admin@example.com",
            "senha": "admin"
        },
        {
            "id": 1,
            "nome": "Clairta Cardoso",
            "data_nascimento": "1999-07-09",
            "telefone": "(32) 5638-5787",
            "estado_civil": "Casado",
            "cpf": "331.625.220-71",
            "email": "clairta.cardoso@example.com",
            "senha": "claire",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
            },
            "tipo": "Beneficiario",
            "categoria": "Livros",
            "endereco": {
                "bairro": "Santa Efigênia",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Itaberá",
                "cep": "30260320",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 2,
            "nome": "Francyelle Gonçalves",
            "data_nascimento": "1947-02-18",
            "telefone": "(43) 1361-7907",
            "estado_civil": "Divorciado",
            "cpf": "356.232.548-81",
            "email": "francyelle.goncalves@example.com",
            "senha": "ladybug",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
            },
            "tipo": "Beneficiario",
            "categoria": "Alimentos",
            "endereco": {
                "bairro": "Santa Maria",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Ubaia",
                "cep": "30525110",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 3,
            "nome": "Teotónio Vieira",
            "data_nascimento": "1982-04-03",
            "telefone": "(36) 0152-2031",
            "estado_civil": "Divorciado",
            "cpf": "632.967.040-65",
            "email": "teotonio.vieira@example.com",
            "senha": "walmart",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
            },
            "tipo": "Doador",
            "categoria": "Livros",
            "endereco": {
                "bairro": "Céu Azul",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Jaraguá",
                "cep": "31585030",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 4,
            "nome": "Karena Costa",
            "data_nascimento": "1951-07-12",
            "telefone": "(06) 1818-7335",
            "estado_civil": "Divorciado",
            "cpf": "599.940.275-83",
            "email": "karena.costa@example.com",
            "senha": "q1w2e3r4",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
            },
            "tipo": "Doador",
            "categoria": "Brinquedos",
            "endereco": {
                "bairro": "Copacabana",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Montevidéu",
                "cep": "31550140",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 5,
            "nome": "Eulógio da Rosa",
            "data_nascimento": "1986-08-05",
            "telefone": "(25) 0189-9268",
            "estado_civil": "Divorciado",
            "cpf": "012.223.361-55",
            "email": "eulogio.darosa@example.com",
            "senha": "tweety",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
            },
            "tipo": "Instituicao",
            "categoria": "Roupas",
            "endereco": {
                "bairro": "São Tomáz",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua São Bartolomeu",
                "cep": "31741060",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 6,
            "nome": "Francilene Oliveira",
            "data_nascimento": "1997-03-04",
            "telefone": "(80) 0735-6639",
            "estado_civil": "Divorciado",
            "cpf": "693.025.239-24",
            "email": "francilene.oliveira@example.com",
            "senha": "florian",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
            },
            "tipo": "Beneficiario",
            "categoria": "Brinquedos",
            "endereco": {
                "bairro": "Jardim Guanabara",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Alga Dourada",
                "cep": "31742263",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 7,
            "nome": "Luciele Nascimento",
            "data_nascimento": "1961-06-28",
            "telefone": "(55) 1964-6792",
            "estado_civil": "Viuvo",
            "cpf": "578.539.257-14",
            "email": "luciele.nascimento@example.com",
            "senha": "catnip",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
            },
            "tipo": "Doador",
            "categoria": "Alimentos",
            "endereco": {
                "bairro": "Itatiaia",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Expedicionário Paulo de Souza",
                "cep": "31360270",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 8,
            "nome": "Sandra Campos",
            "data_nascimento": "1949-03-27",
            "telefone": "(13) 9860-1679",
            "estado_civil": "Solteiro",
            "cpf": "092.801.340-04",
            "email": "sandra.campos@example.com",
            "senha": "cyclones",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
            },
            "tipo": "Beneficiario",
            "categoria": "Roupas",
            "endereco": {
                "bairro": "Havaí",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Jacinto Ferreira",
                "cep": "30570290",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 9,
            "nome": "Caroline Rodrigues",
            "data_nascimento": "1991-03-07",
            "telefone": "(50) 9898-0143",
            "estado_civil": "Viuvo",
            "cpf": "031.477.143-18",
            "email": "caroline.rodrigues@example.com",
            "senha": "neptune",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
            },
            "tipo": "Instituicao",
            "categoria": "Livros",
            "endereco": {
                "bairro": "Coqueiros",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Conchas",
                "cep": "30881210",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        },
        {
            "id": 10,
            "nome": "Zenilda Rocha",
            "data_nascimento": "1966-04-05",
            "telefone": "(47) 9579-5634",
            "estado_civil": "Viuvo",
            "cpf": "008.754.249-33",
            "email": "zenilda.rocha@example.com",
            "senha": "waterloo",
            "pictures": {
                "medium": "https://randomuser.me/api/portraits/med/women/70.jpg",
                "thumb": "https://randomuser.me/api/portraits/thumb/women/70.jpg"
            },
            "tipo": "Beneficiario",
            "categoria": "Livros",
            "endereco": {
                "bairro": "Milionários (Barreiro)",
                "cidade": "Belo Horizonte",
                "logradouro": "Rua Paranan",
                "cep": "30620610",
                "estado": "MG"
            },
            "sociais": {
                "renda": 1320,
                "dependentes": 3,
                "profissao": "desempregado"
            }
        }
    ]
    localStorage.setItem('db_usuario',JSON.stringify(usuarios))

    // fetch('https://mocki.io/v1/06fe26cb-e261-496a-8f7c-547ef92a9390')
    //     .then(res => res.json())
    //     .then(retorno => {
    //         localStorage.setItem('db_usuario',JSON.stringify(retorno))
    //     })
    
    fetch('https://my-json-server.typicode.com/Okitemuri/fakePedidos/db')
        .then(res => res.json())
        .then(retorno => {
            localStorage.setItem('db_pedidos',JSON.stringify(retorno))
        })
    
    fetch('https://my-json-server.typicode.com/Okitemuri/fakeMensagens/db')
        .then(res => res.json())
        .then(retorno => {
            localStorage.setItem('db_mensagens',JSON.stringify(retorno))
        })
    
    fetch('https://my-json-server.typicode.com/Okitemuri/fakeFavoritos/db')
        .then(res => res.json())
        .then(retorno => {
            localStorage.setItem('db_favoritos',JSON.stringify(retorno))
        })
}

GeraBanco();