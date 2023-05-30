const knex = require('../database/index.js')

module.exports = {

  async listarpokemons(req,res){
    const results = await knex('pokemons')

       return res.json(results)
  },
  
  async inserirpokemons (req,res,next){
    try{
      const {nome,tipo_id,imagem,habilidades}= req.body
      await knex('pokemons').insert({
        nome,
        tipo_id,
        imagem,
        habilidades
      })
      return res.status(201).send()
    } catch(error){
      next(error)
    }
  },
   
  async alterarpokemons(req,res,next) {
    try{
       const {nome,tipo_id,imagem,habilidades}= req.body
       const { id } = req.params

       await knex('pokemons')
       .update({nome,tipo_id,imagem,habilidades})
       .where({id})

       return res.send()


    }catch(error){
      next(error)
    }
  },
  
  async excluirpokemons(req,res,next) {
    try{
       const { id } = req.params

       await knex('pokemons')
       .where({id})
       .del()

       return res.send()


    }catch(error){
      next(error)
    }
  },
  async Listar2pokemons(req,res,next) {
    try{
       const { id } = req.params

      
       
       const results = await knex('pokemons')
       .where({id})

       return res.json(results)

       

       return res.send()


    }catch(error){
      next(error)
    }
  }
}