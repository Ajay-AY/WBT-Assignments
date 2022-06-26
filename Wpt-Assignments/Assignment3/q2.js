



const dbparam={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'webDevelopment',
    port:3306
};

const mysql=require('mysql2');
const con=mysql.createConnection(dbparam);
console.log("Database connecting");

//code to check database connection
con.connect((err)=>{
    if(err) throw err;
    console.log("Database Connected Successfuly")
});


con.query('select * from item',[],(err,res)=>{
    if(err){
        console.log("Error in program \n"+err);
    }
    else{
        console.log(res);
    }
});

 /*  con.query('insert into item (itemno,itemname,price,category) values(?,?,?,?)',[5,"pineapple",15,"fruits"]
 ,(err,rows)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(rows.affectedRows);
        
    }
 });
  */
 
 /*  con.query('update item set price=?,category=? where itemno=?',[50,"sportsKit",1],(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        
        if(res.affectedRows===0)
        {
            console.log('not updated')
        }else if(res.affectedRows>0)
        {
            console.log(res.affectedRows);
            console.log('update successful')
        }
    }
 });  */

con.query('select itemname from item where itemno=?',[3],(err,res)=>{
    if(err){
        console.log("Error in program \n"+err);
    }
    else{
        console.log(res);
    }
});


con.query('select itemname from item where category= ?',["fruits"],(err,res)=>{
    if(err){
        console.log("Error in program \n"+err);
    }
    else{
        console.log(res);
    }
});
