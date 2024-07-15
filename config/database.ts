import Redis from "redis"

const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (err: string) => {
    console.error('Redis connection error:', err);
});

export default redisClient;
export{}
