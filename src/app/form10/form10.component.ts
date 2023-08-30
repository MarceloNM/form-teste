import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICliente, IPaises } from './form10.model';

@Component({
  selector: 'app-form10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form10.component.html',
  styleUrls: ['./form10.component.css']
})

export class Form10Component {
  cliente: ICliente;
  paises: IPaises[];

  validaIdade(datanasc: string){
    const hoje = Date.now();
    const dn = new Date(datanasc);
    const diferenca = Math.abs(hoje - dn.getTime());
    const idade = Math.floor((diferenca / (1000 * 3600 * 24)) / 365);
  //  console.log(hoje, datanasc, dn, idade);
    if(idade < 18){
      return "3";
    }
    return "0";
  }

  validaNIF(nif: string) {
    if( nif.length != 9 ){
      return "1";
    }
    var num = parseInt(nif);
    
    let soma = 0;
    var numa = new Array();
    let j = 9;
    for(var i = 0; i < 8 ; i++){
      numa.push(parseInt(nif[i]));
      soma = soma + numa[i] * j--;
      if (isNaN(numa[i])){
        return "4";
      }
    }
    numa.push(parseInt(nif[8]));
    if (isNaN(numa[8])){
      return "4";
    }
    let resto = soma % 11;
    // let quociente = ((soma - resto) / 11);
    let teste = resto == 1 || resto == 0 ? 0 : 11 - resto;
    // console.log(soma, quociente, resto, teste);
    if(teste == numa[8]){
      return "0";
    } else {
      return "3";
    }
 
    /*
      '0' -  Correto, sem mensagem
      '1' -  "O NIF tem nove dígitos"
      '2' -  "Necessário um NIF válido"
      '3' -  "Digito de controlo errado"
      '4' -  "O NIF só pode ter algarismos"
    for(var char of nif){
      numa.push(parseInt(char));
    }
    */
  }

  onSubmit(cliente: ICliente){
    console.log(cliente)
  }
  
  constructor() {
    this.cliente = {
      id: 1,
      nome: "",
      email: "",
      nif: "",
      datanasc: "",
      genero: "",
      pais: "",
      cidade: "",
      endereco: "",
      codpostal: "",
      telefone: ""
    };

    this.paises = [
      {
        nomePais: 'Portugal',
        cidades: [
          { nomeCidade: 'Lisboa' }, 
          { nomeCidade: 'Porto' }, 
          { nomeCidade: 'Braga' }, 
          { nomeCidade: 'Coimbra' }, 
          { nomeCidade: 'Beja' },  
          { nomeCidade: 'Faro' }]},
      {
        nomePais: 'Espanha',
        cidades: [
          { nomeCidade: 'Madrid' }, 
          { nomeCidade: 'Barcelona' }, 
          { nomeCidade: 'Bilbau' }, 
          { nomeCidade: 'Vigo' }, 
          { nomeCidade: 'Valência' }, 
          { nomeCidade: 'Sevilha'}]},
      {
        nomePais: 'França',
        cidades: [
          { nomeCidade: 'Paris' }, 
          { nomeCidade: 'Marselha' }, 
          { nomeCidade: 'Lyon' }, 
          { nomeCidade: 'Nice' }, 
          { nomeCidade: 'Lille' }, 
          { nomeCidade: 'Toulouse' }]},
      {
        nomePais: 'Itália',
        cidades: [
          { nomeCidade: 'Roma' }, 
          { nomeCidade: 'Milão' }, 
          { nomeCidade: 'Florença' }, 
          { nomeCidade: 'Veneza' }, 
          { nomeCidade: 'Bolonha' }, 
          { nomeCidade: 'Turim' }]},
      {
        nomePais: 'Alemanha',
        cidades: [
          { nomeCidade: 'Berlim' }, 
          { nomeCidade: 'Hamburgo' }, 
          { nomeCidade: 'Munique' }, 
          { nomeCidade: 'Colónia' }, 
          { nomeCidade: 'Bona' }, 
          { nomeCidade: 'Düsseldorf' }]},
      {
        nomePais: 'Brasil',
        cidades: [
          { nomeCidade: 'Rio de Janeiro' }, 
          { nomeCidade: 'São Paulo' }, 
          { nomeCidade: 'Fortaleza' }, 
          { nomeCidade: 'Manaus' }, 
          { nomeCidade: 'Salvador' }, 
          { nomeCidade: 'Criciúma' }]},
    ]
  }

}
