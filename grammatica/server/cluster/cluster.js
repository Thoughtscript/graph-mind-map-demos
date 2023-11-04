'use strict';

const cluster = require('cluster'),
    express = require('../express/express'),
    config = require('../../config');

module.exports = {
    createCluster: () => {
        if (cluster.isMaster) {
            let cpuCount = require('os').cpus().length;
            if (config.cluster.cpus != null) cpuCount = config.cluster.cpus;
            for (let i = 0; i < cpuCount; i++) {
                cluster.fork();
            }
            cluster.on('fork', (worker) => {
                console.log('Worker %d created: ' + worker.id);
            }).on('exit', (worker) => {
                console.log('Worker %d died: ' + worker.id);
                cluster.fork();
            });
        } else {
            express.createServer();
        }
    }
};

