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
  let input = req.query.acc;
  let loginstatus = { status: false, balance: "" };
  con.query(
    "select accountNo,balance from accounts where accountNo =?",
    [input],
    (err, success) => {
      if (err) {
        console.log("error occured" + err);
      } else {
        if (success.length > 0) {
          loginstatus.status = true;
          loginstatus.balance = success[0].balance;
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
