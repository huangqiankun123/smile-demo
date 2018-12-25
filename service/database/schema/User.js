const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
var bcrypt = require('bcryptjs');  //对密码加密

//创建UserSchema
const userScheme = new Schema({
    UserId: ObjectId,
    userName: {unique: true, type: String},
    password: String,
    createAt: {type: Date, default: Date.now()},
    lastLoginAt: {type: Date, default: Date.now()}
},{
    collection:'use'
});
// userScheme.pre('save', function (next) {
//     bcrypt.genSalt(10, function (err, salt) {
//         if (err) return next(err);
//         bcrypt.hash(this.password, salt, function (err, hash) {
//             if (err) return next(err);
//             this.password = hash;
//             next()
//         })
//     })
// })

//发布模型
mongoose.model('User', userScheme);
