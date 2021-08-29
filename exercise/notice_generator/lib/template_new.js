module.exports = {
    structure: function (title,num){
      
      return `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <link type="text/css" rel="stylesheet" href="style.css"/>

      </head>
      <body>
          <div id="wrap">
            <h1 class="main-title">${title}</h1>
            <section class="task-item">
              <form action="/create_process" method="post">
              <div id="wrap">
                <div class="input-area">
                  <div class="inp-txt">
                    <input type="text" name="fileName" placeholder="fileName : 예) 20210822">
                  </div>
                  <div class="inp-txt">
                    <input type="text" name="imgSrc" placeholder="imgSrc : 예) 20210822">
                  </div>
                  <textarea name="description" placeholder="description" class="textarea" title="글 내용"></textarea>
                  <div class="inp-txt">
                    <input type="tel" name="taskCount" value=${num} placeholder="요청 갯수 예)1">
                  </div>
                </div>

                ${this.taskCountFunc(num)}

                <div class="btn-group">
                  <a href="/" class="btn blue"><span class="txt">목록으로 돌아가기</span></a>
                  <input type="submit" class="btn blue">
                </div>
                
              </div>           
              </form>
            </section>
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
          <script>
          var selectElement = document.getElementById("taskCount")
          selectElement.addEventListener("change",handleOnChange)

          function handleOnChange (e) {
            // 선택된 데이터의 텍스트값 가져오기
            setTimeOut(function(){
              target = e.target
              let num = Number(target.options[target.selectedIndex].value);              
            },1000)
          }
          </script>
      </body>
      </html>
        `
    },
    taskCountFunc :function (num){
        var html = '';
        for (var i = 1; i <= num; i++) {    
          html += `
          <div class="code-wrap">
            <select name="codeType${i}" class="select">
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="js">js</option>
            </select>
            <div class="code-box">
              <div class="before">
                <textarea name="codeBefore${i}" placeholder="변경 전 code here" class="textarea" title="글 내용"></textarea>                  
              </div>
              <div class="after">
                <textarea name="codeAfter${i}" placeholder="변경 후 code here" class="textarea" title="글 내용"></textarea>   
              </div>
            </div>
          </div>`
        }
        return html;
    }

  }
  

 