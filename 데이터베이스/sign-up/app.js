const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const static = require("serve-static");
const expressSession = require("express-session");
const mysql = require("mysql");

const app = express();
const router = express.Router();

app.set(`port`, process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(`/routes`, static(path.join(__dirname, `routes`)));
app.use(cookieParser());
app.use(`/`, router);
app.use(
  expressSession({
    secret: `my key`,
    resave: true,
    saveUninitialized: true,
  })
);

http.createServer(app).listen(app.get(`port`), () => {
  console.log(`서버 시작. 포트 : ` + app.get(`port`));
});

var pool = mysql.createPool({
  connectionLimit: 10,
  host: `localhost`,
  user: `root`,
  password: `Ljw0106315@`,
  database: `example`,
  debug: false,
});

var addUser = (id, pass, name, callback) => {
  pool.getConnection((err, conn) => {
    if (err) {
      if (conn) {
        conn.release();
      }

      callback(err, null);
      return;
    }
    console.log(`데이터베이스 연결 아이디 : ${conn.threadId}`);

    var data = { id: id, pass: pass, name: name };

    var exec = conn.query("insert into member set ?", data, (err, result) => {
      conn.release();
      console.log(`실행 대상 sql : ${exec.sql}`);

      callback(null, result);
    });
  });
};

router.route(`/routes/adduser`).post((req, res) => {
  var paramId = req.body.id || req.query.id;
  var paramPass = req.body.pass || req.query.pass;
  var paramName = req.body.name || req.query.name;

  console.log(`요청 파라미터` + paramId + paramPass + paramName);

  if (pool) {
    addUser(paramId, paramPass, paramName, (err, addUser) => {
      if (err) {
        res.writeHead("200", {
          "Content-Type": "text/html;charset=utf8",
        });
        res.write("<h2>오류발생</h2>" + err.stack);
        res.end();

        return;
      }

      if (addUser) {
        res.writeHead("200", {
          "Content-Type": "text/html;charset=utf8",
        });
        res.write("<h2>사용자 등록 종료</h2>" + paramId);
        res.write(
          "<br/>아래와 같은 정보를 가진 사용자로 등록되었습니다.<br/>비밀번호 분실시 검색이 불가능 하니, 아이디와 비밀번호를 반드시 기억해주시기 바랍니다<br/>"
        );
        res.write("사용자ID : " + paramId + "<br/>");
        res.write("사용자명 : " + paramName + "<br/>");
        res.write("비밀번호 : " + paramPass + "<br/>");
        res.end();
      } else {
        res.writeHead("200", {
          "Content-Type": "text/html;charset=utf8",
        });
        res.write(`<h2>db연결 실패</h2>`);
        res.end();
      }
    });
  } else {
    res.writeHead(`200`, {
      "Content-Type": "text/html;charset=utf8",
    });
    res.write(`<h2>db연결 실패</h2>`);
    res.end();
  }
});
