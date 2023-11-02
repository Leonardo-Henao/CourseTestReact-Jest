/* eslint-disable no-undef */
import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en < 02-template-string />', () => {
  test('getSaludo debe retornar hola fernando', () => {
    // Assert
    const name = 'Fernando';

    // Action
    const message = getSaludo(name);

    // Arrange
    expect(message).toBe(`Hola ${name}`);
  });
});
