const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    adress: {
        type: String
    },
    location: {
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    },
    file_id: {
        type: String,
        default: ''
    },
    district: {
        type: String,
        required: true
    },
    stamp: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    technologicalEquipment: {
        type: Number,
        required: true
    },
    stainlessSteelEquipment: {
        type: Number,
        required: true
    },
    allCommunications: {
        type: Number,
        required: true
    },
    Electrical: {
        rosette: {
            type: Number,
            required: true
        },
        cabel: {
            type: Number,
            required: true
        }
    },
    waterSupply: {
        crane_1_2: {
            type: Number,
            required: true
        },
        crane_3_4: {
            type: Number,
            required: true
        },
    },
    waterSewerage: {
        trumpet: {
            type: Number,
            required: true
        },
        ladder: {
            type: Number,
            required: true
        }
    },
    ventilation: {
        umbrella: {
            type: Number,
            required: true
        }
    }
})


mongoose.model('project', ProjectSchema)

