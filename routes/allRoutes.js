const express=require("express");
const router=express.Router();
const contrllers=require("../controllers/allControllers");

router.get("/",contrllers.allContrllers);

module.exports=router;

