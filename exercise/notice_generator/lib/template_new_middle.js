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
              <form action="/create" method="post">
              <div id="wrap">

                ${this.taskCountFunc(num)}

                <div class="btn-group">
                  <a href="/" class="btn blue"><span class="txt">목록으로 돌아가기</span></a>
                  <input type="submit" class="btn blue" value="공지사항 등록 화면 생성하기">
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
            <div class="inp-txt" style="display:inline-block; width:89%">
              <input type="text" name="pageTitle${i}" placeholder="pageTitle">
            </div>            
            <div class="inp-txt" style="display:inline-block; width:10%">
              <input type="tel" name="taskNum${i}" maxlength="1" placeholder="taskNum">
            </div>            
          </div>`
        }
        return html;
    }

  }
  

 