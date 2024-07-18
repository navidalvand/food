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
 *      create-restaurant:
 *          type: object
 *          properties:
 *              restaurantName:
 *                  type: string
 *                  required: true
 *                  description: what do you call youre restaurant
 *          required:
 *            - restaurantName
 */

/**
 * @swagger
 * paths:
 *  /restaurant:
 *      post:
 *          summary: create a restaurant
 *          tags : [Restaurant]
 *          description: only if you have an account and you are logged in you can create a restaurant
 *          requestBody:
 *              description: request body
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/create-restaurant"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/create-restaurant"
 *          responses:
 *              201:
 *                  description: restaurant created
 */
