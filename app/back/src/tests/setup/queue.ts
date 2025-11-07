import { Queue } from "bullmq";
import { connection } from "../../connectionRedis";


export const insertAccessQueue = new Queue('insert_access_link',{
    connection
})