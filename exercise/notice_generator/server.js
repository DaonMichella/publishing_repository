//모듈 임포트
const fs = require('fs')
const http = require('http')
const path = require('path')
//const url = require('url')
//설정 

const testFolder= './notice'
const target = testFolder + '/notice1.txt'
const contents = '기사 내용'


var server = http.createServer((req,res)=>{  
  const ext = path.parse(req.url).ext
  const publicPath = path.join(__dirname, "./public")
  const filePath = path.join(__dirname,"./public/notice_generator.html")
  const mimeType = {//확장자에 따라서 content-type header 값을 동적으로 생성
    //html  단일 페이지 뿐만 아니라 모든 정적요소 불러오기 위함
    "ico": "image/x-icon",
    "html": "text/html",
    "js": "text/javascript",
    "css": "text/css",
    "png": "image/png",
    "jpg": "image/jpeg"
  }
  
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
    res.statusCode = 200
    fs.readFile(filePath, (err, data) => {
      if (err) throw err
      res.end(data)
    })
  }
})


//파일 새로 쓰기
fs.writeFile(target,contents,'utf8', function(error){ 
  console.log('write end') //contents 의 내용이 write
})

function revise () {
  // readFile : s비동기방식으로 파일 열기
  fs.readFile(target, (err,data) => {
    if(err) throw err;
    console.log('sync work01')
    let contents = data.toString()
    contents = '기사 내용 수정'
    fs.writeFile(target,contents,'utf8',function(error){ 
      console.log('revise end') //contents 의 내용이 write
    })
  })
}

//목록에서 리스트 불러오기

const fileList = fs.readdirSync(testFolder)
fileList.forEach((filename)=>{
  console.log(filename)
})

module.exports = server