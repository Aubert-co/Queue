import { insertAccessQueue } from "./queue";

export async function addAccessJob(vacancy_id:number,source:string ){
        await insertAccessQueue.add('insert_access_link',{
            vacancy_id,
            source
        })
}