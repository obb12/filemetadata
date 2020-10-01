const express = require('express')
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 3000

const app = express()
const port = 3000
app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.use(fileUpload());

app.post('/api/fileanalyse', function(req, res){
console.log(req.files);
res.json({
   name: req.files.upfile.name,
   type: req.files.upfile.mimetype,
   size: req.files.upfile.size,

 });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
