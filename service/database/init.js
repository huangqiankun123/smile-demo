const mongoose =require('mongoose');
const db ="mongodb://localhost/smile-db";
const {resolve} = require('path');

exports.initSchemas =()=>{
    sync(resolve(_dirname,'./scheme','**/*.js')).forEach(resolve)
}

exports.connect =()=>{
    //连接数据库
    mongoose.connect(db);
    let maxConnect =0;

    return new Promise((resolve,reject)=>{
        //增加数据库监听
        mongoose.connection.on('disconnected',()=>{
            console.log('******数据库断开');
            if (maxConnect <= 3) {
                maxConnect++
                mongoose.connect(db)
            }else {
                reject()
                throw new  Error('数据库出现问题，程序无法搞定，请人为修理')
            }
        })

        mongoose.connection.on('error',(err)=>{
            console.log('******数据库错误');
            if (maxConnect <= 3) {
                maxConnect++
                mongoose.connect(db)
            }else {
                reject(err);
                throw new  Error('数据库出现问题，程序无法搞定，请人为修理')
            }
        })

        mongoose.connection.once('open',()=>{
            console.log('MongoDB connected successfully');
            resolve()
        })
    })


}
