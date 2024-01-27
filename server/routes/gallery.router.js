const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const dbQuery=`UPDATE "gallery" SET "likes"="likes"+1 WHERE "id"=$1;`;
  const queryArgs=[parseInt(req.params.id)]
  console.log('Received Data:', req.body);

  pool
    .query(dbQuery,queryArgs)
    .then((result)=>{
      res.sendStatus(200);
    })
    .catch((err)=>{
      console.log('error:', err);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const dbQuery = 'SELECT * FROM "gallery";';

  pool
    .query(dbQuery)
    .then((result)=>{
      res.send(result.rows)
    })
    .catch((err)=>{
      console.log(('error:', err));
      res.sendStatus(500);
    });
});

module.exports = router;
