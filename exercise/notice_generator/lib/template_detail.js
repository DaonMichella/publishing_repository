module.exports = {
    structure: function (title, body , control){
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
              ${body.description} 
              <div class="code-box">
                <div class="task before">
                  <h3 class="task-title">변경 전 화면</h3>
                  ${body.codeBefore} 
                  <h3 class="task-title">코드</h3>
                  ${body.codeBefore} 
                </div>
                <div class="task after">
                  <h3 class="task-title">변경 후 화면</h3>
                  ${body.codeAfter} 
                  <h3 class="task-title">코드</h3>
                  ${body.codeAfter}
                </div>
              </div>
          </section>
                
          ${control}
              
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
        
      </body>
      </html>
        `
    }
  
    
  }
  