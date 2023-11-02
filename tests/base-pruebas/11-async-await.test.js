/* eslint-disable no-undef */
import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe retornar la url de la imagen', async () => {
    // action

    const url = await getImagen();
    expect(typeof url).toBe('string');

    // Para versiones inferiores a node 18 se configura el jest con ./jest.setup.js y jest.config.js
  });

  test('getImagen debe retornar error', async () => {
    // action

    const response = await getImagen();
    expect(response).toBe('No se encontró imagen');
  });
});
