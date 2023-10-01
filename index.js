import express  from "express";
import cors from 'cors';
import homeRouter from './routes/index.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/home',homeRouter);

app.get('/',(req,res)=>{
    res.status(200).json({msg:'You are getting data from your server'});
});

app.listen(5000,()=>{
    console.log('Server running on port 5000');
})