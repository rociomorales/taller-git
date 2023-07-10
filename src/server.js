const express =require ('express');

class Sever{
    constructor(){
        this.app =express();
        this.port=process.env.PORT;
        this.middlewares();
        this.routes();

    }
    middlewares(){
        this.app.use(express.json())
    }
    routes(){
        this.app.use("/api/saludos ",require("../src/routes/hola-mundo"));

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('run server en el puerto:',this.port);
    });
  }
}   
module.exports=Sever;