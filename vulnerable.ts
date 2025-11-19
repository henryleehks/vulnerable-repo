// VULN: stored XSS (do NOT run)
import express from 'express';
const app = express();

app.post('/comment', (req, res) => {
  const comment = req.body.comment; // attacker-supplied HTML
  // BAD: store raw comment and later render it into pages
  saveCommentToDb({ text: comment });
  res.send('ok');
});
