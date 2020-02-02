const { responseDTO } = require('../../src/DTO/common/responseDto');

describe("Response DTO test cases", () => {
  it("should return 200 ok status code", async () => {
    const res = responseDTO(200, "test");
    expect(res.statusCode).toEqual(200);
  });

  it("should return 400 bad request status code when operation is fail", async () => {
    const res = responseDTO(400, null, "test");
    expect(res.statusCode).toEqual(400);
  });
});