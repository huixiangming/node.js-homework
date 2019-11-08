const express=require('express'),
      {users,chapterList}=require('./data.json');
      app=express();  
app.use(express.static(__dirname));
app.get('/login',function(req,res){
    res.type('text/html');
    res.status(200);
    res.sendfile(`${__dirname}/login.html`);
});
app.get('/list',function(req,res){
    var req=req.query;
    if (req.username==users[0].username && req.pwd==users[0].password) {
        res.type('text/html');
        res.status(200);
        res.sendfile(`${__dirname}/list.html`);
    }else {
        res.send("用户名密码错误");
    }
})
app.get('/result',function(req,res){
    res.send(chapterList);
})
app.listen(8080);