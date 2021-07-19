module.exports = {
    structure: function (title, body, control){
      return `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${title}</title>
          <link type="text/css" rel="stylesheet" href="style.css"/>
        </head>
        <body>
          <div id="wrap">
            <h1 class="main-title">게시글 생성<span class="sub">제목/내용 저장하기</span></h1>
            ${body}            
            ${control}
          </div>            
        </body>
      </html>
        `;
    },
    // list : function (filelist) {
    //   var list = '<ul>';
    //   for (var list_i = 0; list_i < filelist.length; list_i++) {    
    //     list += `<li><a href="/?id=${filelist[list_i]}">${filelist[list_i]}</a></li>`;
    //   }
    //   list += '</ul>';
    //   return list;
    // }
  
    
  }
  