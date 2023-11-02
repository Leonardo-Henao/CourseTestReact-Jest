/* eslint-disable no-undef */
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('pruebas en 07-deses-arr', () => {
  test('Debe retornar un string y un numero', () => {
    // Arrange

    // Action
    const [letters, number] = retornaArreglo();

    // Assert
    expect(typeof letters).toBe('string');
    expect(typeof number).toBe('number');

    expect(typeof letters).toEqual(expect.any(String));
  });
});
