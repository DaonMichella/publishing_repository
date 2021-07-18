const server = require('./server')
const hostname = 'localhost'
const port = 3000 


server.listen(port,()=>{
  console.log('connect'+port)
})
