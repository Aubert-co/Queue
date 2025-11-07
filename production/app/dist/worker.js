"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAccessWorker = void 0;
const bullmq_1 = require("bullmq");
const repository_1 = require("./repository");
const connectionRedis_1 = require("./connectionRedis");
exports.insertAccessWorker = new bullmq_1.Worker('insert_access_link', async (job) => {
    let { vacancy_id, source } = job.data;
    await (0, repository_1.insertAccessLink)({
        vacancy_id: vacancy_id || null,
        source
    });
}, { connection: connectionRedis_1.connection });
