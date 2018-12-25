const Router = require('koa-router');
const mongoose = require('mongoose')

let router = new Router();
router.get('/', async (ctx) => {
    ctx.body = '首页'
});

router.post('/register', async (ctx) => {
    //将接受到的数据 在数据库中处理  使用mongoose
    let User = mongoose.model('User')
    let newUser = new User(ctx.request.body)
    //保存到数据库
    await newUser.save()
        .then(()=>{
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch((error)=>{
        ctx.body={
            code:500,
            message:error
        }
    })
});

module.exports = router




