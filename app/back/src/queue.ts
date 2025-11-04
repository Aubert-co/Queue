import ioRedis from "ioredis";

import { Queue } from "bullmq";

const REDIS_URL = process.env.REDIS_URL

if(!REDIS_URL){
    throw new Error('Undefined  redis url')
}

export const connection = new ioRedis( REDIS_URL,{
    maxRetriesPerRequest:5
} )


