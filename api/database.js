const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'user',
    password:'1234@admin'
})

conn.connect(err=>{
    if(err){
        console.log(err)
        return err;
    }else{
        console.log('Database ----- OK')
    }
})