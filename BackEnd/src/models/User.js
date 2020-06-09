const { Model, DataTypes } = require('sequelize');

//É o objeto que está pegando as informações do usuário e está armazenando no banco;
class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize   
        })
    }
}
module.exports = User;