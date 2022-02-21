const {ftoc, ctof,round} = require('./tempConversion')

describe('ftoc', () => {
  test('works', () => {
    expect(ftoc(32)).toEqual(0);
  });
  test('rounds to 1 decimal', () => {
    expect(ftoc(100)).toEqual(37.8);
  });
  test('works with negatives', () => {
    expect(ftoc(-100)).toEqual(-73.3);
  });
});

describe('ctof', () => {
  test('works', () => {
    expect(ctof(0)).toEqual(32);
  });
  test('rounds to 1 decimal', () => {
    expect(ctof(73.2)).toEqual(163.8);
  });
  test('works with negatives', () => {
    expect(ctof(-10)).toEqual(14);
  });
});

describe("round", () =>{
  test("rounds to 1 decimal",()=>{
    expect(round(12.345)).toEqual(12.3);
  });
});