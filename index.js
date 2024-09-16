const express=require("express");

const app=express();   //create an express app

const allRoutes=require("./routes/allRoutes");


app.use(allRoutes);


const port=3300;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
