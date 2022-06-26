const params = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "webDevelopment",
  port: 3306,
};

const mysql = require("mysql2"); //fate
const con = mysql.createConnection(params);

const express = require("express");
const app = express();

app.use(express.static("htmls"));

app.get("/data", (req, res) => {
  let input = req.query.pin;
  let loginstatus = { status: false, address: "" };
  con.query(
    "select pincode,address from area where pincode =?",
    [input],
    (err, success) => {
      if (err) {
        console.log("error occured" + err);
      } else {
        if (success.length > 0) {
          loginstatus.status = true;
          loginstatus.address = success[0].address;
        } else {
          console.log("Data not found for this pincode :" + input);
        }
      }

      res.send(loginstatus);
    }
  );
});

app.listen(900, function () {
  console.log("server listening at port 900...");
});
