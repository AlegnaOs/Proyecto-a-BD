const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'dvdrental', 
    user: 'postgres',
    password: 'root',
});

pool.query("SELECT * from actor", (error, results) => {
    if(error){
        console.error('Ocurio un error');
        console.error(error);
        return;
    }
    console.log(results.rowCount);
});