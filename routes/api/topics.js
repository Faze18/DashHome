const router = require( "express" ).Router();
const userController = require( "../../controllers/userController" );

router
    .route( "/find/:id" )
    .get( userController.findByTopic )

router
    .route( "/" )
    .get( userController.findTopics )
router
    .route( "/post" )
    // .get( userController.findTopics )
    .post( userController.postTopic )

module.exports = router;
