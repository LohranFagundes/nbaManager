const {response} = require ("express");
const Player = require ("../models/Player");

module.exports={
   async index(require, response){
        try{
            const players = await Player.find();
            return response.status(200).json({ players });
        }catch(err){
            response.status(500).json({error: err.massage});
        }
    },
};