import { cleanAccessedLinks, cleanVacancies, createVacancies } from "./setup"
import {insertAccessLink} from '../repository'
import {addAccessJob} from './setup/producer'
import { Database } from "../database/db"
import {insertAccessWorker} from '../worker'
const db = new Database()
describe('tesing',()=>{
    beforeEach(async()=>{
        await cleanAccessedLinks()
        await cleanVacancies()
        
        await createVacancies()
    })
    it("should insert accessed link correctly into the database",async()=>{
        const source = "linkedin"
        await insertAccessLink({
            vacancy_id:1,
            source 
        })

        const values = await db.query('SELECT * FROM accessed_links')
        
        expect( values.rows ).toHaveLength(1)
        expect( values.rows[0].source).toEqual(source)
        expect( values.rows[0].vacancy_id).toEqual(1)
    })
   
    it("should insert with producer",async()=>{
        const source = "testing"
        await addAccessJob(1,source)
        
         insertAccessWorker.on('completed',async()=>{
            const values = await db.query('SELECT * FROM accessed_links')
         
            expect( values.rows ).toHaveLength(1)
            expect( values.rows[0].source).toEqual(source)
            expect( values.rows[0].vacancy_id).toEqual(1)
        })
    })
})