beforeAll(() => {
  try {
    throw new Error('beforeAll-error')
  } catch (e) {
    console.log(e)
    process.exit(-1)
  }
});

describe("A suite", () => {
  it("1+1==2", () => {
    throw new Error('I expect this test should not run if beforeAll fails')
  });
});
