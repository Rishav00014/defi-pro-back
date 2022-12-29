import express from "express";
import mongoose from "mongoose";

const app = new express();

const port = 8080
app.use(express.json())
mongoose.connect("mongodb+srv://note-app-oct-2022:QJwOOuGzavU5OjPP@cluster0.fsiyxoa.mongodb.net/loan")
const postSchema = {
    firstName: String,
    lastName: String,
    age: String,
    mobile: String,
    address: String,
    businessName: String,
    gstNo: String,
    bAddress: String,
    bTurnOver: String,
    loanAmount: String,
    interestRate: String,
    loanTenure: String,
    creditScore: String
}
const Post = mongoose.model("Post",postSchema)




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://rishav.host"); // Update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post("/api/users",(req,res)=>{
    try {
        console.log(req.body)
        const info ={
            firstName: req.body.pd.firstName,
            lastName: req.body.pd.lastName,
            age: req.body.pd.age,
            mobile: req.body.pd.mobile,
            address: req.body.pd.address,
            businessName: req.body.bd.businessName,
            gstNo: req.body.bd.gstNo,
            bAddress: req.body.bd.bAddress,
            bTurnOver: req.body.bd.bTurnOver,
            loanAmount: req.body.ld.loanAmount,
            interestRate: req.body.ld.interestRate,
            loanTenure: req.body.ld.loanTenure,
            creditScore: req.body.ld.creditScore
        }
        const post1 =new Post(info);
        post1.save();
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


