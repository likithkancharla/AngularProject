//dependencies
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql2')


//define the express operation
const app=express();
const port=3000;


//define the cors - cross origin by recieving the data in the json format


app.use(cors({
    origin: 'http://localhost:4200' // Ensure this matches your Angular app's origin
}));

app.use(bodyParser.json())


//establish the connection with the db
const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'root',
database:'clientdb'
});


//verify whether db is connected or not


db.connect(err=>{
if(err){
    console.error('connection failed check the db details', err)
}
else{
    console.log('connection is done with the dB with port '+port)
}


});
//optional statement
app.listen(port,()=>{console.log('server port established on 3000')})

/*to get all the product info
app.get('/getClients',(req,res)=>{
    const sql='select * from client';
    db.query(sql,(err,result)=>{
        if(err){
            console.error('error in fetching the client', err)
            res.status(500).json({error:'An error occured'});
        }  
        else{
            res.status(200).json(result);
        }
       
    });
    
    
    });*/

    app.post('/addClient',(req,res)=>{
        const {name,email,address,password}=req.body;
        const sql='insert into client values(?,?,?,?)';
        db.query(sql,[name,email,address,password],(err,result)=>{
            if(err){
                console.error('error in adding the product', err)
                res.status(500).json({error:'An error occured'});
            }  
            else{
                res.status(200).json({message:'Client added successfully'});
            }
           
        });
       
        });


    app.get('/checkuser/:email/:password', (req, res) => {
    const { email, password } = req.params;
    //console.log(`Checking user with Email: ${email}, Password: ${password}`); // Log inputs
    const sql = 'SELECT * FROM client WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('Error in checking user credentials:', err);
            res.status(500).json({ error: 'An error occurred' });
        } else if (result.length > 0) {
            res.status(200).json({ message: 'User authenticated successfully' });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    });

    // Endpoint to add a new meeting
    app.post('/addMeeting', (req, res) => {
    const { topic, participants, startTime, details } = req.body;
    const sql = 'INSERT INTO meetings (topic, participants, start_time, details) VALUES (?, ?, ?, ?)';

    db.query(sql, [topic, participants, startTime, details], (err, result) => {
        if (err) {
            console.error('Error adding the meeting:', err);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.status(200).json({ message: 'Meeting scheduled successfully' });
        }
    });
});
});

        
        
    