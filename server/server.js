const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.status(404).send({
    error: "нет такой страницы",
    name: "Дела v1.0"
  });
});

app.get("/users", (req, res) => {
  res.send([{
    name: "Sonya",
    age: 31
  },{
    name: "Lika",
    age: 33
  },{
    name: "Anchik",
    age: 29
  }]);
});

app.listen(3000);

module.exports.app = app;
