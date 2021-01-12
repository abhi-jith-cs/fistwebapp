const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.listen(3000, function () {
  console.log("Server is Up");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/styles.css", function (req, res) {
  res.sendFile(__dirname + "/" + "styles.css");
});
app.post("/", function (req, res) {
  var name = req.body.name;
  var age = req.body.age;
  var phno = req.body.phno;
  var email = req.body.email;

  res.send(
    "Name is " +
      name +
      ",I'm " +
      age +
      " old" +
      ". My number  is " +
      phno +
      ", contact me on  " +
      email
  );
});
