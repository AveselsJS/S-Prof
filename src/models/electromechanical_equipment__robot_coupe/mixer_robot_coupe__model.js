const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mixer_robot_coupe__schema = new Schema({
    type: {
        type: String,
        required: true
    },
    form: {
        type: String,
        required: true
    },
    subform: {
        type: String,
        default: ''
    },
    manufacturer: {
        type: String,
        required: true,
    },
    country_manufacturer: {
        type: String,
        required: true
    },
    series: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    article: {
        type: String,
        default: ''
    },
    number_phases: {
        type: Number,
        default: 0
    },
    voltage: {
        type: Number,
        default: 0
    },
    power: {
        type: Number,
        default: 0,
        required: true
    },
    volume: {
        type: String,
        default: ''
    },
    width: {
        type: Number,
        required: true
    },
    depth: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        rquired: true
    },
    necessary_communications: {
        electrical: {
            type: String,
            default: ''
        }
    }
})

mongoose.model('mixer__robot_coupe', mixer_robot_coupe__schema)