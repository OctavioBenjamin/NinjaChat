// import express from "express";
// import { createChat } from "../controllers/chatController"

// const router = express.Router();

// router.post('/create-chat', createChat);

// module.exports = router;
// export {}
import createChat from "../controllers/chatController";

module.exports = app => {
    console.log();
}

/*
module.exports = app => {
    const albumesController = require('../controllers/albumes.controller');
  
    var router = require("express").Router();
  
    // Crear un nuevo album
    router.post("/", albumesController.create);
  
    // Recuperar todos los albumes
    router.get("/", albumesController.findAll);
  
    // Eliminar un album
    router.delete("/:id", albumesController.delete);

    //Actualiza un album
    router.put("/:id", albumesController.update);
  
    app.use('/api/albumes', router);
};

*/