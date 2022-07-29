const express = require("express");
const fs = require("fs");

const PORT = 3000;

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));
const filePath = "users.json";


// sent users
app.get("/api/users", (request, response) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const users = JSON.parse(content);
  response.send(users);
})

// get users
app.post("/api/users", jsonParser, (request, response) => {
  let data = fs.readFileSync(filePath, "utf-8");
  let users = JSON.parse(data);

  users.push(request.body)

  data = JSON.stringify(users);
  fs.writeFileSync("users.json", data);

  // console.log(request.body)

  response.send(request.body);
})


app.listen(PORT, 'localhost', (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`)
});