import express from "express"
import chatRoutes from "./chatRoute"

const router = express.Router();

router.use('/chat', chatRoutes);

module.exports = router;

export {};