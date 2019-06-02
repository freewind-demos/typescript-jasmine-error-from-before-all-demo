beforeAll(() => {
  throw new Error('beforeAll-error')
});

describe("A suite", () => {
  it("1+1==2", () => {
    throw new Error('I expect this test should not run if beforeAll fails')
  });
});
