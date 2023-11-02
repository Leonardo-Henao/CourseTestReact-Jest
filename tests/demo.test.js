describe('Pruebas en <Demo Component/>', () => {
  test('No debe fallar', () => {
    // A
    const message1 = 'Hola Mundo';

    // A
    const message2 = message1.trim();

    // A
    expect(message1).toBe(message2);
  });
});
