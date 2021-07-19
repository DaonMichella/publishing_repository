//모듈 임포트
const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')
var template = require('./lib/template.js')

//설정 

const testFolder= './notice'
const target = testFolder + '/notice1.txt'
const contents = '기사 내용'

const mimeType = {//확장자에 따라서 content-type header 값을 동적으로 생성
  //html  단일 페이지 뿐만 아니라 모든 정적요소 불러오기 위함
  ".ico": "image/x-icon",
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg"
}

var server = http.createServer((req,res)=> {
  var _url = req.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;//url 주소에서 pathname 추출 
  
  
  const ext = path.parse(_url).ext
  const publicPath = path.join(__dirname, "./public")

  if(Object.keys(mimeType).includes(ext)) {//mine Type 딕셔너리로 있을 경우
    
    fs.readFile(`${publicPath}${_url}`,(err,data)=> {
      if(err) {
        res.statusCode = 404;
        res.end('Not found')
      } else {
        res.statusCode = 200
        res.setHeader("Content-Type", mimeType[ext])//응답을 화면으로 보여줌
        res.end(data)
      }
    })
    
  } else {
    const filePath = path.join(__dirname,"./public/notice_new.html")
    res.statusCode = 200
    fs.readFile(filePath, (err, data) => {
      if (err) throw err
      res.end(data)
    })
  }
  if (pathname === '/') {

     //header 설정
    fs.readdir('./public', function(error){
      
      var title = '공지사항 생성 create';
      var html = template.structure(title, `
          <form action="/create_process" method="get">
            <div class="input-area">
              <div class="inp-txt">
                <input type="text" title="글제목" placeholder="기사 제목 입력">
              </div>          
              <textarea name="" id="" class="textarea" title="글 내용" placeholder="기사 내용 입력"></textarea>          
              <button type="button" class="btn blue">공지사항 등록</button>
            </div>
          </form>
        `,`a`);
      res.writeHead(200)//성공
      res.end(html,'utf-8')//브라우저로 전송
    });

    // fs.readFile(__dirname + '/public/notice_new.html', (err, data) => {//메인 페이지에서 어떤 페이지를 보여줄지 결정
    // if(err) {
    //   return console.error(err)
    // }
    // res.end(data,'utf-8')//브라우저로 전송
  //})
  } else if(pathname === '/create_process'){//Post 방식으로 보낸 데이터를 Node js에서 불러오기!!
    var body = '';
    request.on('data',function(data){//
        body += data;
    })//node js로 접속 들어올때마다 콜백 함수로 node 호출
    request.on('end',function(){
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description,'utf8',
        function(err){
          response.writeHead(302, {Location:`/?id=${title}`});
          response.end();
        })      
    })

  }


  
  /*
  if(Object.keys(mimeType).includes(ext)) {//mine Type 딕셔너리로 있을 경우
    fs.readFile(`${publicPath}${req.url}`,(err,data)=> {
      if(err) {
        res.statusCode = 404;
        res.end('Not found')
      } else {
        res.statusCode = 200
        res.setHeader("Content-Type", mimeType[ext])//응답을 화면으로 보여줌
        res.end(data)
      }
    })
    
  } else {
    const filePath = path.join(__dirname,"./public/notice_new.html")
    res.statusCode = 200
    fs.readFile(filePath, (err, data) => {

      if (err) throw err
      res.end(data)
    })
  }*/
})


//파일 새로 쓰기
fs.writeFile(target,contents,'utf8', function(error){ 
  //console.log('write end') //contents 의 내용이 write
})

function revise () {
  // readFile : s비동기방식으로 파일 열기
  fs.readFile(target, (err,data) => {
    if(err) throw err;
    //console.log('sync work01')
    let contents = data.toString()
    contents = '기사 내용 수정'
    fs.writeFile(target,contents,'utf8',function(error){ 
      //console.log('revise end') //contents 의 내용이 write
    })
  })
}

//목록에서 리스트 불러오기

const fileList = fs.readdirSync(testFolder)
fileList.forEach((filename)=>{
  //console.log(filename)
})

module.exports = server