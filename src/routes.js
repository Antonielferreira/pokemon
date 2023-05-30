const express = require('express')
const routes= express.Router()
const PokeController = require ('./controllers/PokeController.js')
const TiposController = require ('./controllers/TiposController.js')

routes
      ///Pokemons
      .get('/pokemons',PokeController.listarpokemons)
      .get('/pokemons/:id',PokeController.Listar2pokemons)
      .post('/pokemons',PokeController.inserirpokemons)
      .put('/pokemons/:id',PokeController.alterarpokemons)
      .delete('/pokemons/:id',PokeController.excluirpokemons)
      ///TiposPokemons
      .get('/Tipos',TiposController.listartipopokemon)
      .get('/Tipos/:id',TiposController.Listar2Tipopokemons)
      .post('/Tipos',TiposController.inserirtipopokemon)
      .put('/Tipos/:id',TiposController.alterartipopokemon)
      .delete('/Tipos/:id',TiposController.excluirtipopokemon)

module.exports = routes