const express = require('express');
const router = express.Router();

const { people_get, poeple_post, people_post_postman, people_put, people_delete } = require('../controllers/people');

//we can have seperate routes like this or we can chain by url

/*//seperate method of routing
router.get('/', people_get);
router.post('/', poeple_post);
router.post('/postman', people_post_postman);
router.put('/:id', people_put);
router.delete('/:id', people_delete);
*/

//routes through chaining
router.route('/').get(people_get).post(poeple_post);
router.route('/postman').post(people_post_postman);
router.route('/:id').delete(people_delete);

module.exports = router;
