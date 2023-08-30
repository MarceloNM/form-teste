export interface ICliente {
    id: number,
    nome: string,
    email: string,
    nif: string,
    datanasc: string,
    genero: string,
    pais: string,
    cidade: string,
    endereco: string,
    codpostal: string,
    telefone: string
}

export interface IPaises {
    nomePais: string,
    cidades: {
        nomeCidade: string
    }[],
}