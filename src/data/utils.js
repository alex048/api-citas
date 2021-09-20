'use strict';
const fs = require('fs-extra');
const {join} = require('path');
//const path = require('path');
const loadSqlQueries = async (folderName) => {
    // route desarrollo 
   // const filePath = join(`D:/proyecto-app-maison/backend-app/api-citas/src/data/events/`, folderName);
    // route produccion
    const filePath = join(`/var/www/html/servpublico.maisondesante.org.pe/src/data/events/`, folderName);
   //const filePath = path.basename('data/events/'+folderName);
    const files = await fs.readdir(filePath);
    const sqlFiles = files.filter(f => f.endsWith('.sql'));
    const queries = {}; 
    for (const sqlfile of sqlFiles) {
        const query = fs.readFileSync(join(filePath,  sqlfile), {encoding: "UTF-8"});
        queries[sqlfile.replace(".sql", "")] = query;
    }
    return queries;
}

module.exports = {
    loadSqlQueries
}
