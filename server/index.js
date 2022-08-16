const express =require('express')
const app=express()
const mysql = require('mysql2')
const bodyParser =require('body-parser')
const cors=require("cors")


const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'anuradhaSQL1#',
    database: 'crud_application',
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get",(req,res)=>{
    const sqlSelect="select * from Reviews";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
        console.log("extracted from database");
    });
});

 app.post("/api/insert",(req,res)=>{
    const movieName=req.body.movieName;
    const movieReview=req.body.movieReview;

    const sqlInsert="insert into Reviews (movieName,movieReview) values (?,?)";
    db.query(sqlInsert,[movieName,movieReview],(err,result)=>{
        console.log("connecting to database");
        res.send(err);
    })
 });


 app.delete("/api/delete/:movieName",(req,res)=>{
    const name=req.params.movieName;
    console.log(name);
    const sqlDelete="delete from Reviews where movieName =?";
    db.query(sqlDelete,name,(err,result)=>{
        console.log(err);
        console.log(result);
    });
 });

 app.put("/api/update/",(req,res)=>{
    const name=req.body.movieName;
    const review=req.body.movieReview;
    console.log(name);
    const sqlUpdate="update Reviews set movieReview =? where movieName =?";
    db.query(sqlUpdate,[review,name],(err,result)=>{
        console.log(err);
        console.log(result);
    });
 });
// app.get("/",(req,res)=>{

//     res.send("hello this is server");
// // code to insert data in database:
//     //const sqlInsert="insert into Reviews (movieName,movieReview) values ('matrix2','goodmovie');";
//     // db.query(sqlInsert,(err,result)=>{
//     //     res.send(err);
//     // })
// });


app.listen(3001,()=>{
    console.log("running on port 3001");
});