import express from 'express';
import dotenv from 'dotenv'
import Together from "together-ai";
import cors from 'cors'

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const corOption = {
    origin: 'https://bio-generator-three.vercel.app/',
    methods: 'GET, POST',
    credentials: true,
    optionsSuccessStatus: 200 
}
app.use(cors(corOption));

const together = new Together({ apiKey: process.env.API_KEY });

if (!process.env.API_KEY) {
    console.error("API_KEY not found. Please set it up in your.env file.");
}

app.get('/api/get' , (req,res) => {
    res.send("Hello From Server")
})

app.post('/api/generatebio', async (req, res) => {
    try {
        const { prompt } = req.body;

        const result = await together.chat.completions.create({
            model: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
            messages: [{ "role": "user", content: prompt }],
            temperature: 0.7,
            max_tokens: 400,
        })
        res.status(200).json({ data: result.choices[0].message.content, msg: "success" });
    } catch (error) {
        console.log(error.message)
    }
})


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server listening on port :${port} `))




