// Include http mô-đun,
var http = require("http")
    // Và mô-đun url, nó sẽ hỗ trợ nhập các tham số request.
    , url = require("url");
  
// Tạo http server.
var server = http.createServer(function (request, response) {
    console.log(" from " + request.url);
    // Nhập các tham số request và lưu trữ vào biến _get.
    var _get = url.parse(request.url, true).query;
    // Ghi thông tin headers.
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // Gửi dữ liệu cho client.
    response.end('Here is your data: ' + _get['data']);
// Lắng nghe client ở cổng 8090
});

server.listen(3000, function(){
    console.log('Connected Successfull!');
});