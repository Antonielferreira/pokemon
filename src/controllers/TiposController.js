const knex = require('../database/index.js')

module.exports = {

  async listartipopokemon(req,res){
    const results = await knex('tipopokemon')

       return res.json(results)
  },
  
  async inserirtipopokemon (req,res,next){
    try{
      const {nome,descricao}= req.body
      await knex('tipopokemon').insert({
        nome,
        descricao
      })
      return res.status(201).send()
    } catch(error){
      next(error)
    }
  },
   
  async alterartipopokemon(req,res,next) {
    try{
       const {nome,descricao}= req.body
       const { id } = req.params

       await knex('tipopokemon')
       .update({nome,descricao})
       .where({id})

       return res.send()


    }catch(error){
      next(error)
    }
  },
  
  async excluirtipopokemon(req,res,next) {
    try{
       const { id } = req.params

       await knex('tipopokemon')
       .where({id})
       .del()

       return res.send()


    }catch(error){
      next(error)
    }
  },
  async Listar2Tipopokemons(req,res,next) {
    try{
       const { id } = req.params

      
       
       const results = await knex('tipopokemon')
       .where({id})

       return res.json(results)

       

       return res.send()


    }catch(error){
      next(error)
    }
  }
}