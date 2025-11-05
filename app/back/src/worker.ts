import { Worker } from "bullmq";
import { insertAccessLink } from "repository";
import {connection} from './queue'


export const insertAccessWorker = new Worker('accessed_link',async(job)=>{
    let {vacancy_id,source} = job.data
    

    await insertAccessLink({vacancy_id:vacancy_id || null
        ,source})
},{connection})