const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const sqlText = `SELECT "item"."id" AS "item_id", "item"."description", 
        "item"."image_url", "item"."user_id", "user"."username" FROM "item"
        JOIN "user" ON "user"."id" = "item"."user_id";`;

    pool.query(sqlText)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('Something went wrong getting items', error);
        });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `DELETE FROM "item" WHERE "item"."id" = $1`;
    pool.query(sqlText, [id])
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error deleting item:', error);
            res.sendStatus(500);
        })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;