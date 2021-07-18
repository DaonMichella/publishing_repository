module.exports = {
    structure: function (title, list, body, control){
      return `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${title}</title>
          <link rel="style.css"/>
        </head>
        <body>
          <h1>공지사항목록</h1>
          ${list}
          ${control}
          ${body}
        </body>
      </html>
        `;
    },
    list : function (filelist) {
      var list = '<ul>';
      for (var list_i = 0; list_i < filelist.length; list_i++) {    
        list += `<li><a href="/?id=${filelist[list_i]}">${filelist[list_i]}</a></li>`;
      }
      list += '</ul>';
      return list;
    }
  
    
  }
  