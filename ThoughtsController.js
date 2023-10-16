const { Router } = require("express");
const { create, update } = require("../model/Thoughts");
const Thought = require("../model/Thoughts");

module.exports = {
    // funçao responsavel por buscar todos os pensamentos cadastrados.
    async findAllThoughts(request, response) {
        const thought = await Thought.findAll({ raw:true});

        return response.json(thought);
    },

    async createThought(request, response) {
        const { title, description } = request.body
        // A função create fica responsavel por criar ou inserir os dados.
        // Nesse cenário a função create() fica respnsavel por cadastrar os pensamentos no banco de dados na tabela de thoughts(pensamentos). 
        const thought = await Thought.create({title, description});

        return response.json(thought);
    },

    // cadastrar
    async findThought(request, response) {
        const { id } = request.params

        const thought = await Thought.findOne({ where: { id: id } });

        return response.json(thought);
    },

    // atualizar
    async updateUser(request, response) {
        const { id } = request.params

        const { title, description } = request.body

        const user = await Users.update(
            {
                 title,
                 description,

            },
            {
                where: { id: id }
            }
        );

        return response.json(user);

    },

    // DELETAR
    async deleteUser(request, response) {
        const { id } = request.params

        const thought = await thought.destroy({ where: { id: id } });

        return response.json({ message: "Usuário foi deletado com sucesso" });
    
    },
}

