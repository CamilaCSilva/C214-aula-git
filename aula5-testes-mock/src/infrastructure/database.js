const mongoose = require('mongoose');

const uri = `mongodb+srv://camila:camila28@clusterc214labaulateste.a7nacun.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    carro: {
        type: String,
        unique: true
    },
    marca: String,
    ano: String
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};