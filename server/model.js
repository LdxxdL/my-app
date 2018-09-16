const mongoose = require('mongoose');

//链接mongo,并且使用imooc这个集合
const DB_url = 'mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB_url);

const models = {
  user:{
    'user':{type:String, require:true},
    'pwd':{type:String, require:true},
    'type':{type:String,require:true},
    //头像
    'avatar':{type:String},
    //简介
    'desc':{type:String},
    //职位名
    'title':{type:String},
    //当用户是boss时，添加额外两个字段
    'company':{type:String},
    'money':{type:String}
  },
  chat:{
  }
}

for (let item in models) {
  mongoose.model(item, new mongoose.Schema(models[item]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name)
  }
}

