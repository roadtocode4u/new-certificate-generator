const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    studentName:{
        type: String,
        required: true
    },
    studentId:{
        type: String,
        required: true
    },
    studentEmail:{
        type: String,
        required: true
    },
    courseName:{
        type: String,
        required: true
    },
    startingDate:{
        type: String,
        required: true
    },
    endingDate:{
        type: String,
        required: true
    },
    certificateId:{
        type: String,
        required: true
    },
    certificateUrl:{
        type: String,
        required: true
    },
    proofWork:{
        type: String,
        required: true
    }
});

const Certificate = mongoose.model('Certificate', CertificateSchema);
module.exports = Certificate;