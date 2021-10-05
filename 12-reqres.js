const http = require('http');
const server = http.createServer((req,res)=>{
//   console.log(req);
  if (req.url === '/'){
      res.end('Welcome to Our Home Page')
  }  
   if (req.url === '/about'){
       res.end('Here is our short history')
   }
   res.end(`
   <h1>Opps..!!</h1>
   <p>We are not able to find the page you are looking for</p>
   <a href ='/'>Press this link to return home page </a>

   `)
})
server.listen(5000) 