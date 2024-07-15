import { randomID } from "../utils/geneteUUID"

import { redisClient } from "../config/database"

const createChat = async (res: Response) => {
    try {
        const chatId = randomID(); //Genera id

        //Guarda el chat
        await redisClient.set(`chat:${chatId}`, JSON.stringify([]), 'EX', 600); // TTL de 10 minutos

        res.status(201).json({ chatId, link: `/${chatId}` });
    } catch (error) {
        res.status(500).json({ message: 'Error creating chat', error });
    }
};

module.exports = { createChat };


export {}