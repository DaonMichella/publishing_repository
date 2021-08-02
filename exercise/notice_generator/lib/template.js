module.exports = {
    structure: function (title,list, body, control){
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

              <div class="tbl-type01">
                <table>
                    <caption>${title}테이블</caption>
                    <thead>
                        <tr>
                            <th scope="row" colspan="3">${title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${list}
                    </tbody>

                </table>
              </div>
              ${body}    
              ${control}
              

          </div>
      </body>
      </html>
        `
    },
    list : function (filelist) {
      var list = '<tbody>';
      for (var list_i = 0; list_i < filelist.length; list_i++) {    
        list += `
        <tr>
            <td>${list_i}</td>
            <td><a v-bind:href='data/${filelist[list_i]}' target="_blank">${filelist[list_i]}</a></td>
        </tr>`
      }
      list += '</tbody>';
      return list;
    }
  
    
  }
  