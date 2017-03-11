const expect = require("expect");

const utils = require('./utils');



it('добавим 2 числа', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA("number");
  // if (res !== 44){
  //   throw new Error(`Ожидалось 44, но получилось ${res}`);
  // }
});

it("должна получиться сумма 2 чисел", (done) => {
  utils.asyncAdd(4,3, (sum)=> {
    expect(sum).toBe(7).toBeA("number");
    done();
  });
});

it("квадрат Х асинхронно", (done) => {
  utils.asyncSquare(5, (res) => {
    expect(res).toBe(25).toBeA("number");
    done();
  });
});

//
it('должен получиться квадрат числа', () => {
  var res = utils.square(3);
  expect(res).toBe(9).toBeA("number");
});
  // if (res !== 9) {
  //   throw new Error(`Должно быть 9, но получилось ${res}`);
  // }
// });
//
// it("нужно ввести имя-фамилие", () => {
//   var user = {location: "Baku", age: 33};
//   var res = utils.setName(user, "Kolyan Burkin");
//   expect(res).toInclude({
//     firstName: "Kolyan",
//     lastName: "Burkin"
//
//   });
// });
it("здесь должно быть какое-нибудь значение", () => {
  // expect(12).toNotBe(12);
  // expect({name: "Kolyan"}).toEqual({name: "Kolyan"});
  // expect([2,3,4]).toInclude(2);
  expect({
    name: "Kolyan",
    age: 33,
    location: "Baku"
  }).toInclude({
    age: 33
  })
});
