var express=require('express');
const path= require('path');

const app=express();
const port=8000;

const directory= path.join(__dirname,'public');

app.use(express.static(directory));

app.get('/',(req,res)=>{
   res.sendFile(path.join(directory,'/index.html'));
});

// app.get('/details.html',(req,res)=>{
//    res.sendFile(path.join(directory,'/details.html'));
// });

// app.post('/profile.html',(req,res)=>{
//     res.sendFile(path.join(directory,'/profile.html'));
// });

app.listen(port,()=>{
   console.log(`Server is running on :${port}`);
});