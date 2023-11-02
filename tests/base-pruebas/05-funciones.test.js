/* eslint-disable no-undef */

import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

// eslint-disable-next-line no-undef
describe('test en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    // Assert
    const result = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    // Action
    const user = getUser();

    // Arrange
    expect(result).toEqual(user);
  });

  test('getUsuarioActivo debe retornar un objeto con el nombre del usuario', () => {
    
    // Assert
    const name = 'leonardo';
    const response = {
      uid: 'ABC567',
      username: name,
    };

    // Action
    const getUserActivo = getUsuarioActivo(name)

    // Arrange
    expect(response).toEqual(getUserActivo)    

  });
});
