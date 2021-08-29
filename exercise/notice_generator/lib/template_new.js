module.exports = {
    structure: function (title){
      this.taskCountFunc()
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
              <h3 class="task-title">안내사항</h3>
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
                  <select name="taskCount" class="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>

                  <div class="code-wrap">
                    <select name="codeType" class="select">
                      <option value="html">html</option>
                      <option value="css">css</option>
                      <option value="js">js</option>
                    </select>
                    <div class="code-box">
                      <div class="before">
                        <textarea name="codeBefore" placeholder="변경 전 code here" class="textarea" title="글 내용"></textarea>                  
                      </div>
                      <div class="after">
                        <textarea name="codeAfter" placeholder="변경 후 code here" class="textarea" title="글 내용"></textarea>   
                      </div>
                    </div>
                  </div>
          
                </div>
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
    taskCountFunc :function (str){
      if (typeof window !== 'undefined') { alert() } 
    }
  
  }
  