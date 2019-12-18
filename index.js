const express = require('express')
const app = express()
const util = require('util')
const port = process.env.PORT || 8080;
// const port = 8080;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('*', (req, res) => {
  console.log(req.ip);
  console.log(req.originalUrl);
  console.log(util.inspect(req.body, {showHidden: false, depth: null}));
  res.send("OK")
})

app.post('*', (req,res) => {
  console.log(req.ip);
  console.log(req.originalUrl);
  console.log(util.inspect(req.body, {showHidden: false, depth: null}));
  if(req.originalUrl = "/refresh") {
    res.json({
      access_token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXR0aGV3LmFsbGVuQGJsdWV3b2xmZ3JvdXAuY29tIiwic3ViIjoiU0ZEQyB0ZWFtIC0gYmx1ZSB3b2xmICAiLCJqdGkiOiJVTklRVUVJRC1tYXR0aGV3LmFsbGVuIiwic2NvcGUiOlsic2VsZiIsImFkbWlucyJdLCJpYXQiOjE1MjIyNzU4NzYsImV4cCI6MTUzODA4NzA3Nn0.lWBLx0rptkGDNHiSuXoPKClwFvPGgG4GBQAOtSldQyo",
      token_type: "Bearer",
      expires_in: 300,
      scope: "offline_access",
      refresh_token: "test_Refresh_token"
    })
  } else {
    res.json({status:"ok"})
  }

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
