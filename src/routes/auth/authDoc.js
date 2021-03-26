/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login to your account. If your phone is not verify, push verificationCode from your email to request body
 *     tags:
 *       - AUTH
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         properties:
 *           email:
 *             type: number
 *           password:
 *             type: string
 *         example: {
 *           "email": "user1@gmail.com",
 *           "password": "111111"
 *         }
 *     responses:
 *       200:
 *         name: body
 *         in: body
 *         required: true
 *         description: Your account info
 *         schema:
 *           type: object
 *           properties:
 *             $ref: '#/definitions/User'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - AUTH
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         properties:
 *           firstName:
 *             type: number
 *           lastName:
 *             type: string
 *           email:
 *             type: string
 *           password:
 *             type: string
 *           address:
 *             type: string
 *         example: {
 *           "email": "user2@gmail.com",
 *           "password": "111111",
 *           "firstName":"nguyen",
 *           "lastName":"van A",
 *           "passsword":"111111",
 *           "address":"HCM"
 *         }
 *     responses:
 *       200:
 *         name: body
 *         in: body
 *         required: true
 *         description: Your account info
 *         schema:
 *           type: object
 *           properties:
 *             $ref: '#/definitions/User'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */
/**
* @swagger
* /auth/profile:
*   get:
*     tags:
*       - AUTH
*     summary: Get user from database
*     responses:
*       401:
*         description: When got server exception
*         schema:
*           type: string
*           example: "Unauthorized"
*       200:
*         description: get order info
*         schema:
*           type: object
*           properties:
*             message:
*               type: string
*             data:
*               type: string
*           example: {
*             'message': "success",
*             'data': {}
*           }
*       500:
*         description: When got server exception
*         schema:
*           type: string
*           example: "Internal server error"
*/