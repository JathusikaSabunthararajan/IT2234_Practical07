const express  = require('express');
const app = express();
const port = 3003;

//array of student JSON details
const students = require('./student/studentdb')

//01
app.get('/stu', (req, res) =>{
    res.send(students);
});

//02
app.get('/stu/:id',(req, res)=>{
    const id = req.params.id
    console.log(id)
    const result = students.find((student) => student.regno === id); //call back function
    res.send(result);
});

//03 find female students


//04 Filter students by gender
app.get('/stu/gender/:gen', (req, res)=>{
    const gen = req.params.gen
    const result = students.filter((student)=>student.gender === gen)
});

//05
app.get('/stu/check/:id',(req, res)=>{ //URL should be different ('/stu/:id') from this
    const id = req.params.id
    //console.log(id)
    const result = students.find(student => student.regno === id); //call back function
    //check student is available or not, if not return an error message
    if(result){
        //res.send(result);
        console.log(result);
    }
    else{
        res.status(404).send("Student not found");
    }
    
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});

