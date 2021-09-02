const mongoose = require('mongoose')
const {blixter__robot_coupe} = require('../../../models/electromechanical_equipment__robot_coupe/index')
const send_html = require('../../../functions/function__send_html')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__blixer__robot_coupe(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            blixter__robot_coupe.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((blr, i) => {
                        return `${blr.form} ${blr.manufacturer} ${blr.name}  
Деталі: /blr${blr.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__blixer__robot_coupe
