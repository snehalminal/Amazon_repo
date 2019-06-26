var express=require('express');
var app=express();
var employeeController=function(req,res)
{
var employee=[{Employeeid:1,Employeename:"Sameer",Salary:30000},{Employeeid:2,Employeename:"Ramesh",salary:50000},{}

];
res.send(employee)
};
app.get('/employee',employeeController);
var server=app.listen(8000,function()
{
var host=server.address().address;
var port=server.address().port;
console.log("express listening at http://localhost:8000",host,port);
})