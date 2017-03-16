var express = require('express');
var mysql = require('mysql'); // include thêm module mysql
var app = express();
// Tạo kết nối với Database
var pool = mysql.createPool({
host: 'localhost',
user: 'root',
password: null,
database: 'test'
});

app.get('/user', function(req, res){
// Viết câu truy vấn sql
var sql = 'SELECT * FROM `member`';// Thực hiện câu truy vấn và show dữ liệu
pool.query(sql, function(error, result){
if (error) throw error;
console.log('– USER TABLE — ' , result);
res.json(result); // Trả kết quả về cho client dưới dạng json
});
});


app.listen(3000);
console.log('—– server is listening —–');

