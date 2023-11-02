/* eslint-disable no-undef */
import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('Debe retornar heroe con el id', () => {
    // Arrange
    const idHero = 1;
    // Action
    const result = getHeroeById(idHero);
    // Assert
    expect(result).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById Debe retornar undefined si no existe', () => {
    // Arrange
    const idHero = 100;
    // Action
    const result = getHeroeById(idHero);
    // Assert
    expect(result).toEqual(undefined);
    expect(result).toBeFalsy();
  });

  test('getHeroesByOwner Debe retornar Heroes de DC', () => {
    // Arrange
    const ownerHero = 'DC';
    const length = 3;
    // Action
    const result = getHeroesByOwner(ownerHero);
    // Assert
    result.forEach((hero) => {
      expect(ownerHero).toEqual(hero.owner);
    });
    expect(result.length).toBe(length);
  });

  test('getHeroesByOwner Debe retornar heroes de Marvel', () => {
    // Arrange
    const ownerHero = 'Marvel';
    const length = 2;
    // Action
    const result = getHeroesByOwner(ownerHero);
    // Assert
    result.forEach((hero) => {
      expect(ownerHero).toEqual(hero.owner);
    });
    expect(result.length).toBe(length);
  });
});
