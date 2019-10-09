// index, show, store = Create, update, destroy
//estes são os métodos disponiveis dentro de um controler
const User = require('../models/User');

module.exports = {
    
   async store(req, res){
        const { email } = req.body;
    
        let user = await User.findOne({ email });
        //nesta linha acima ele procura o endereço de email  digitado no banco de dados

        if(!user){
            user = await User.create({ email });
        }
        

        return res.json(user);
    }



};