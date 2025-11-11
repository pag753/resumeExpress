var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.post('/telegram', async function (req, res, next) {
  let body = req.body;
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let ipInfo = await axios.get(`https://ipinfo.io/${ip}/json`);
  ipInfo = JSON.parse(JSON.stringify(ipInfo.data));
  ipInfo.device = body.device;
  switch (body.tipo) {
    case 1:
      ipInfo.message = 'Compa, vieron tu CV: Inglés';
      break;
    case 2:
      ipInfo.message = 'Compa, vieron tu CV: Español';
      break;
    case 3:
      ipInfo.message = 'Compa, vieron tu CV: PDF Inglés';
      break;
    case 4:
      ipInfo.message = 'Compa, vieron tu CV: PDF Español';
      break;
  }
  let tkn = process.env.tkn;
  let chatID = process.env.chatID;
  let url = `https://api.telegram.org/bot${tkn}/sendMessage`;
  res.message = await axios.get(url, {
    params: {
      chat_id: chatID,
      text: JSON.stringify(ipInfo, undefined, 2)
    }
  });
  res.status(200);
  return res; 
});

module.exports = router;
