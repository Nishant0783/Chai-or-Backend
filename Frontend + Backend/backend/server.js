import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id:1,
            title: 'A Joke',
            content: 'Joke 1'
        },
        {
            id:2,
            title: 'B Joke',
            content: 'Joke 2'
        },
        {
            id:3,
            title: 'C Joke',
            content: 'Joke 3'
        },
        {
            id:4,
            title: 'D Joke',
            content: 'Joke 4'
        },
        {
            id:5,
            title: 'E Joke',
            content: 'Joke 5'
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server running on port ", port);
});