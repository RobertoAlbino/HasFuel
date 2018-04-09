import { TestBed, async } from '@angular/core/testing';

import { StringUtils } from './StringUtils'

describe('Classe StringUtils', () => {
  it('Testar se a verificação de nulos está funcionando', () => {
    expect(StringUtils.isNullOrEmpty('')).toEqual(true);
    expect(StringUtils.isNullOrEmpty("")).toEqual(true);
    expect(StringUtils.isNullOrEmpty(null)).toEqual(true);
    expect(StringUtils.isNullOrEmpty(undefined)).toEqual(true); 
  })
});