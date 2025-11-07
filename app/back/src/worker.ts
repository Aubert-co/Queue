import { Worker } from "bullmq";
import { insertAccessLink } from "./repository";
import {connection} from './connectionRedis'


export const insertAccessWorker = new Worker('insert_access_link',async(job)=>{
    let {vacancy_id,source} = job.data
    

    await insertAccessLink({
        vacancy_id:vacancy_id || null
        ,source
    })
},{connection})