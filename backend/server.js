import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app= express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"test"
})

app.get("/", (req,res)=>{
    const q= "SELECT * FROM users"
    db.query(q,(err,data)=>{
        if(err) return res.status(404).json("Something went wrong")
        return res.json(data)
    })
})

app.post('/create',(req,res)=>{
    const q = "INSERT INTO users (`name`,`email`,`phone`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone
    ]
    db.query(q,[values], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Created Successfully!");
    });
});

app.put('/update/:id',(req,res)=>{
    const q = "UPDATE users SET `name`=? , `email`= ?, `phone` = ? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone
    ]
    db.query(q,[...values, id], (err,data)=>{
        if(err) return res.json(err)
        return res.json("User Updated Successfully");
    });
});

app.delete('/delete/:id',(req,res)=>{
    const q = "DELETE FROM users WHERE id = ? ";
    const id = req.params.id;

    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Record Deleted Successfully")
    })
})


app.listen(5000, () => {
    console.log("Listening on port 5000..")
})