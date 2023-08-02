import express from 'express';


const port = 8000;
const app = express();



app.route('/books')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })




app.listen(port, () => {
	console.log(`Server startted on http://localhost:${port}`);
});


