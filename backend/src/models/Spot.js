const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    //imagem que vai gravar so o caminho sera uma thumbnail
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // esta se referindo ao model User que já criamos
    }
}, {
    toJSON: {
        virtuals: true,
    },
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot',SpotSchema);