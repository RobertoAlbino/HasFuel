import { TestBed, async } from '@angular/core/testing';

import { StringUtils } from './StringUtils'

describe('Classe StringUtils', () => {
  it('Testar se a verificação de nulos está funcionando', () => {
    expect(StringUtils.isNullOrEmpty('')).toEqual(true);
    expect(StringUtils.isNullOrEmpty("")).toEqual(true);
    expect(StringUtils.isNullOrEmpty(null)).toEqual(true);
    expect(StringUtils.isNullOrEmpty(undefined)).toEqual(true); 
  })
  it('Testar se a função que verifica array de nulos está funcionando', () => {
    let camposPreenchidos: string[] = [
      "teste",
      'teste',
      'Teste'
    ];
    let camposVazios: string[] = [
      "",
      '',
      'Teste',
      ""
    ];
    expect(StringUtils.validarPreenchimentoCamposForm(camposPreenchidos)).toEqual(true);
    expect(StringUtils.validarPreenchimentoCamposForm(camposVazios)).toEqual(false);
  })
});