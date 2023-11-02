/* eslint-disable no-undef */
import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar Heroe con el id', (done) => {
    // Arrange
    const idHero = 2;

    // Action
    getHeroeByIdAsync(idHero).then((hero) => {
      // Assert
      expect(hero).toEqual({
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
      });

      // Con esto le decimos jest que ya termino la promesa
      done();
    });
  });

  test('getHeroByIdAsync debe retornar error si no existe id', (done) => {
    // Arrange
    const idHero = 100;

    // Action
    getHeroeByIdAsync(idHero)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(`No se pudo encontrar el héroe con id ${idHero}`).toBe(error);
        done();
      });
  });
});
