const request = require("supertest");
const expect = require("expect");
var app = require("./server").app;
it("должно вернуть Приветик", (done) => {
  request(app)
    .get("/")
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: "нет такой страницы"
      });
    })
    .end(done);
});

it("должно вернуть объект с пользователями", (done) => {
  request(app)
  .get("/users")
  .expect(200)
  .expect((res) => {
    expect(res.body).toInclude({
      name: "Sonya",
      age: 32
    });
  })
  .end(done);
});
