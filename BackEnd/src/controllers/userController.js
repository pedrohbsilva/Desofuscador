const User = require('../models/User');

module.exports = {
    //Função para pesquisar todos os usuários do banco de dados
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users); 
    },
    //Função para pesquisar um usuário específico do banco de dados
    async indexOne(req, res) {
        const { id } = req.params;
        const user = await User.findOne({where:{
            id:id
        }});
        return res.json(user); 
    },
    //Função para criar um usuário com nome,senha e email como requisitos funcionais
    async store(req, res){
        const { name,email,password } = req.body;
        const user = await User.create({name,email,password});
        return res.json(user);
    },
    //Função para deletar o usuário de acordo com o id como parâmetro.
    async delete(req, res) {
        const { id } = req.params;
        
        await User.destroy({where: { id } })

        return res.status(204).send();
    },
    //Função para atualizar as informações do usuário como: Nome, email e senha.
    async updated(req, res){
        const { id } = req.params;     
        const {name,email,password} = req.body;   
   
        await User.update({
            name: name,
            email: email,
            password: password
        },{where: {
            id: id
        }})
        return res.status(200).send();
    }
}