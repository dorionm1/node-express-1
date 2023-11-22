const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', async (req, res, next) => {
  try {
    const results = await Promise.all(req.body.developers.map(async d => {
    let response = await axios.get(`https://api.github.com/users/${d}`);
      return { name: response.data.name, bio: response.data.bio };
    }));
    let out = results.map(r => ({ name: r.name, bio: r.bio }));
    return res.send(JSON.stringify(out));
  } catch(err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});