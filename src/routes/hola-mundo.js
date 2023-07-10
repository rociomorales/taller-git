const {  Router, request}=require ('express');
const { holamundo } = require('../controllers/hola-mundo');


const router=Router();

router.get("/hola-mundo",holamundo);

 
module.exports=router;
