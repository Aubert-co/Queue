"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAccessLink = void 0;
const db_1 = require("./database/db");
const db = new db_1.Database();
const insertAccessLink = async ({ vacancy_id, source }) => {
    try {
        const sql = 'INSERT INTO accessed_links(vacancy_id,source) VALUES($1,$2)';
        await db.query(sql, [vacancy_id, source]);
    }
    catch (err) {
        throw new Error("Failed to insert");
    }
};
exports.insertAccessLink = insertAccessLink;
