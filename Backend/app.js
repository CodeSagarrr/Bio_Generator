import express from 'express';
import dotenv from 'dotenv'
import Together from "together-ai";
import cors from 'cors'
import morgan from "morgan";

const app = express();
dotenv.config();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: 'GET, POST',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    credentials: true, // allow session cookies
  
}));
app.use(morgan("dev"));

const together = new Together({apiKey: process.env.API_KEY});

if(!process.env.API_KEY){
    console.error("API_KEY not found. Please set it up in your.env file.");
}

app.post('/api/generate', async (req, res) => {
    const { prompt } = req.body;
    
    const result = await together.chat.completions.create({
        model : "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo", 
        messages : [ { "role" : "user" , content : prompt}],
        temperature : 0.7,
    })

    return res.status(200).json({data : result.choices[0].message.content , msg:"success"});
})


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server listening on port : http://localhost:${port} `))




