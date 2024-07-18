/**
 * @swagger
 * tags:
 *  name: User
 *  description : User Actions
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
 *  /user/auth/send-code:
 *      post:
 *          summary: send one time password to user's phone
 *          tags : [User]
 *          description: takes a phone number and sends a OTP code to it
 *          requestBody:
 *              description: request body
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/send-otp"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/send-otp"
 *          responses:
 *              200:
 *                  description: user profile
 */

/**
 * @swagger
 * paths:
 *  /user/auth/check-code:
 *      post:
 *          summary: send one time password
 *          tags : [User]
 *          description: takes a phone number and sends a OTP code to it
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/check-otp"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/check-otp"
 *          responses:
 *              200:
 *                  description: success
 */

/**
 * @swagger
 * paths:
 *  /user/auth/logout:
 *      post:
 *          summary: logout
 *          tags : [User]
 *          description: log out api just clears your token cookie
 *          responses:
 *              200:
 *                  description: success
 */
