import { Database } from "./database/db"

const db = new Database()
type InsertDTO = {
    vacancy_id:number | null,
    source:string
}
export const insertAccessLink  = async ({vacancy_id,source}:InsertDTO)=>{
    try{
        const sql = 'INSERT INTO accessed_links(vacancy_id,source) VALUES($1,$2)';
        await db.query(sql,[vacancy_id,source])
    }catch(err:unknown){
        throw new Error("Failed to insert")
    }
}