const {request,response}=require('express');
const numbers =require("../constants/numbers.js");

const holamundo=(req=request,res=response)=>{
    res.jon({
        msg:"hola desde el servidor de node con una funcion de controllers",

    });
};
module.exports={
     holamundo,

};

