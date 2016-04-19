import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';


import authRoutes from './routes/auth';
import mediaRoutes from './routes/media';
import postRoutes from './routes/posts';
import questionRoutes from './routes/questions';



let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

//API V.1 Endpoint: links
app.use('/auth', authRoutes);
app.use('/api/v1/media', mediaRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/questions', questionRoutes);


//Middleware: Server static resources
app.use(express.static('public'));

//Serve index.html file (enable browser history)
app.get('*', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(3000);
