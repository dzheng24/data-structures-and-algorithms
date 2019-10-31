const multiBracketValidation = require('../multiBracketValidation/multi-bracket-validation');


describe('testing multi-bracket validation', () => {
  it('can return true with matching and closing brackets', () => {
    expect(multiBracketValidation('{[]()}')).toBeTruthy;
    expect(multiBracketValidation('[()]')).toBeTruthy;
  })

  it('can return true with matching brackets and letters in them', () => {
    expect(multiBracketValidation('[codefellows]')).toBeTruthy;
  })

  it('can return false with non matching brackets', () => {
    expect(multiBracketValidation('{[))))')).toBeFalsy;
  })
})
