export interface ICliente {
    id: number,
    nome: string,
    email: string,
    nif: string,
    datanasc: number,
    pais: string,
    cidade: string,
    endereco: string,
    codpostal: string,
    telefone: string,
    genero: 'M' | 'F'
}

export interface IPaises {
    nomePais: string,
    cidades: {
        nomeCidade: string
    }[],
}