const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    studentName:{
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
    proofOfWorks: [{ type: String}],
    // proofOfWorks: [{type: mongoose.Types.ObjectId, ref: 'Proof', required: true}], 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
 })


const Certificate = mongoose.model('Certificate', CertificateSchema);
module.exports = Certificate;