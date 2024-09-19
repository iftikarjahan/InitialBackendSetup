const express=require("express");
const app=express();   //create an express app
const path=require("path"); //for using in express.static

// setting the views
app.set('views', './views');
app.set('view engine', 'ejs');

// for serving the static files
app.use(express.static(path.join(__dirname,"public")));

const allRoutes=require("./routes/allRoutes");


app.use(allRoutes);


const port=3300;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
