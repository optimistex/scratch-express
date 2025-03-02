/**
 * WARNING! This is generated file. Keep it as it is.
 * It checks that Jest is correctly configured.
 */
describe('Test example', () => {
  it('Should pass', () => {
    const testFn = jest.fn();

    testFn({ prop2: 2 });

    expect(testFn).toHaveBeenCalledExactlyOnceWith({ prop2: 2 });
  });
});
