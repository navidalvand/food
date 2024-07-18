/**
 * @swagger
 * tags:
 *  name: Restaurant
 *  description : Restaurant Actions
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      send-otp:
 *          type: object
 *          properties:
 *              phone:
 *                  type: string
 *                  required: true
 *                  description: users phone number
 *          required:
 *            - phone
 *      check-otp:
 *          type: object
 *          properties:
 *              phone:
 *                  type: string
 *                  required: true
 *                  description: users phone number
 *              code:
 *                  type: number
 *                  required : true
 *                  description: one time password
 *          required:
 *            - phone
 *            - code
 */

/**
 * @swagger
 * paths:
 *  /restaurant:
 *      post:
 *          summary: create a restaurant
 *          tags : [Restaurant]
 *          description: only if you have an account and you are logged in you can create a restaurant
 *          responses:
 *              200:
 *                  description: user profile
 */
