var express = require('express');
var router = express.Router();
list={}
id = 0;
/* GET contacts */
router.get('/:id', function(req, res, next) {
res.status(200);
res.send(list[req.params.id]);
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    id++;
    list[id]={}
    list[id]["firstName"]=req.body.firstName;
    list[id]["lastName"]=req.body.lastName;
    list[id]["phone"]=req.body.phone;
    list[id]["messages"]=[];
    res.send(id+"");
});

router.get('/messages/:id',function(req,res,next){
res.status(200);
res.send(list[req.params.id]["messages"]);
});

router.post('/:id', function(req, res,next){
    l=list[req.params.id]["messages"].length;
    list[req.params.id]["messages"][l]=req.body.messages;
    console.log(list[req.params.id]["messages"]);
    res.send(list[req.params.id]["messages"].length + "");
});

router.put('/:id', function(req, res, next){
    list[req.params.id]["firstName"] = req.body.firstName;
    res.status(200);
    res.send(list[req.params.id]);
});

module.exports = router;