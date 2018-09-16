const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')

//新建App
const app = express();
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
app.listen(9093, function() {
    console.log('Node app start at port 9093');
})


// //使用Schema模型，新建一个类似于mysql的表的文档、集合
// const User = mongoose.model('user', new mongoose.Schema({
//     user: {type:String,require:true},
//     age: {type:Number,require:true}
// }))
// //新增数据
// User.create({
//     user: 'imooc',
//     age: 18
// },function(err, doc) {
//     if(!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })