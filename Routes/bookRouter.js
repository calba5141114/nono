const express = require('express');
const bookRouter = express.Router();

bookRouter
.get('api/books', (req, res) => {
    res.json([
        {
            id: 1,
            title: 'Harry Bopper',
            author: 'Leroy Jenkins'
        },
        {
            id: 2,
            title: 'Joy to the IRS',
            author: 'Bernie Sanders'
        }
    ]);
})
.get('/api/books/2', (req,res)=>{
    res.json(
            {
                id: 2,
                title: "Einstein's Dreams",
                author: "Alan Lightman"
            }
    )
});

export default bookRouter;