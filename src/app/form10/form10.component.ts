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
  
  constructor() {
    this.cliente = {
      id: 1,
      nome: "",
      email: "",
      nif: "",
      datanasc: 0,
      pais: "",
      cidade: "",
      endereco: "",
      codpostal: "",
      telefone: "",
      genero: "M"
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
