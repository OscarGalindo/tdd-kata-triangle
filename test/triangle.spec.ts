describe("triangle", () => {
  describe("all side equal", () => {
    test("should return equilateral", (done: any) => {
      const triangleResult = triangle(1, 1, 1);
      expect(triangleResult).toEqual("equilateral");
      done();
    });
  });

  describe("when all sides are different", () => {
    test("then should return scalene", (done: any) => {
      const triangleResult = triangle(1, 2, 3);
      expect(triangleResult).toEqual("scalene");
      done();
    });
  });

  describe("when two sides are equal", () => {
    test("then should return isosceles", (done: any) => {
      const triangleResult = triangle(1, 1, 2);
      expect(triangleResult).toEqual("isosceles");
      done();
    });
  });

  describe("when negative number", () => {
    test("then should throw", (done: any) => {
      const possitive = () => assertPositive(-1);
      expect(possitive).toThrow();
      done();
    });
  });

  describe("when positive number", () => {
    test("then should not throw", (done: any) => {
      const possitive = () => assertPositive(1);
      expect(possitive).not.toThrow();
      done();
    });
  });
});

function assertPositive(...num: number[]): void {
  num.map(num => {
    if (num <= 0) throw new Error();
  });
}

function triangle(sidea: number, sideb: number, sidec: number): string {
  assertPositive(sidea, sideb, sidec);
  if (sidea !== sideb && sideb !== sidec) return "scalene";
  if (sidea === sideb && sideb === sidec) return "equilateral";
  return "isosceles";
}
