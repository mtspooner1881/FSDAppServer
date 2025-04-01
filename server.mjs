import express from "express";

const app = express();
const port = 8888;

app.get('/', (req, res) => {
  res.send('Welcome to the FSD App server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});