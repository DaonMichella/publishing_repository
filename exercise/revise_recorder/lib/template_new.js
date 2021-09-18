module.exports = {
    structure: function (title,body){
      
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
                    <input type="text" name="fileName" placeholder="fileName : 예) 20210822" value="20210901">
                  </div>
                  <div class="inp-txt">
                    <input type="text" name="imgSrc" placeholder="imgSrc : 예) 20210822" value="">
                  </div>
                  <div class="inp-txt">
                    <input type="text" name="stylesheetSrc" placeholder="stylesheetSrc : 예) 20210822" value="web/css/layout.css">
                    <input type="text" name="stylesheetSrc" placeholder="stylesheetSrc : 예) 20210822" value="web/css/contents.css">
                  </div>
                  <textarea name="description" placeholder="description" class="textarea" title="글 내용">예시</textarea>
                </div>

                ${this.taskCountFunc(body)}

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
          
      </body>
      </html>
        `
    },
    taskCountFunc :function (body){
      
      var hiddenPageTask = JSON.stringify(body.pageTask)
      var hiddenTaskNum = JSON.stringify(body.taskNum)
      var html = '';
      html += `<input type='hidden' name="pageTask" value='${hiddenPageTask}'>`;
      html += `<input type='hidden' name="taskNum" value='${hiddenTaskNum}'>`;
      for (var page_i = 0; page_i < body.pageTask.length; page_i++) {    
          var taskNum = Number(body.taskNum[page_i])
          taskNum == 0? html += '' : html += `<h2>${body.pageTask[page_i]}</h2>`
          console.log(taskNum);//pageTask의 길이 만큼 돌아가기 때문에 
          for (var task_i = 0; task_i < taskNum; task_i++) {
            if(taskNum == 0) {
              html += '' 
            } else {
              html += `<div class="code-wrap">
                <select name="codeType" class="select">
                  <option value="html">html</option>
                  <option value="css">css</option>
                  <option value="js">js</option>
                </select>
                <div class="code-box">
                  <div class="before">
                    <textarea name="codeBefore" placeholder="변경 전 code here" class="textarea" title="글 내용"><div>예시${page_i+1} - ${task_i+1}</div></textarea>                  
                  </div>
                  <div class="after">
                    <textarea name="codeAfter" placeholder="변경 후 code here" class="textarea" title="글 내용"><div>예시${page_i+1} - ${task_i+1}</div></textarea>   
                  </div>
                </div>
              </div>`

            }
          }
        }
        return html;
    }

  }
  

 