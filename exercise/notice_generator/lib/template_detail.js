module.exports = {
    structure: function (title, body , control){
      var data = JSON.parse(body)
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
              <div class="task">
                <p>${data.description}</p> 
                ${data.imgSrc == ''|| data.imgSrc == 'undefined'?' ':`<img src="../images/${title}.jpg"/>`}
              </div>
              ${this.taskCount(body)}
              
          </section>
                
          ${control}
              
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
        
      </body>
      </html>
        `
    },
    taskCount : function (body) {
      var data = JSON.parse(body)
      var html = '';
      for (var i = 0; i < data.taskCount; i++) {
        html += `
        <div class="code-box">
          <div class="task before">
            <h3 class="task-title">변경 전 화면</h3>
            ${data.codeBefore[i]}
            <h3 class="task-title">코드</h3>
            <pre class="language-${data.codeType[i]}" tabindex="0"><code class= language-${data.codeType[i]}">${this.ConvertSystemSourcetoHtml(data.codeBefore[i])}</code></pre>
          </div>
          <div class="task after">
            <h3 class="task-title">변경 후 화면</h3>
            ${data.codeAfter[i]} 
            <h3 class="task-title">코드</h3>
            <pre class="language-${data.codeType[i]}" tabindex="0"><code class= language-${data.codeType[i]}">${this.ConvertSystemSourcetoHtml(data.codeAfter[i])}</code></pre>
          </div>
        </div>`
      }
      return html;
    },
    ConvertSystemSourcetoHtml :function (str){
      if(str == undefined)  return
      var str = JSON.stringify(str)
      str = str.replace(/</g,"&lt;");
      str = str.replace(/>/g,"&gt;");
      str = str.replace(/\"/g,"&quot;");
      str = str.replace(/\'/g,"&#39;");
      str = str.replace(/\n/g,"<br />");
      return str;
    }
  
  }
  