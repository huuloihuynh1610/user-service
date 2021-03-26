/**
* @swagger
* /payment:
*   get:
*     tags:
*       - Payment
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
*             'data': []
*           }
*       500:
*         description: When got server exception
*         schema:
*           type: string
*           example: "Internal server error"
*/


/**
 * @swagger
 * /payment:
 *   post:
 *     tags:
 *       - Payment
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         properties:
 *           name:
 *             type: string
 *           type:
 *             type: string
 *         example: {
 *           "name": "chuyen khoan",
 *           "type": "1"
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
 *             $ref: '#/definitions/Payment'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */

 /**
 * @swagger
 * /payment/{id}:
 *   put:
 *     tags:
 *       - Payment
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *       - name: body
 *         in: body
 *         required: true
 *         properties:
 *           name:
 *             type: string
 *           type:
 *             type: string
 *         example: {
 *           "name": "chuyen khoan",
 *           "type": "1"
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
 *             $ref: '#/definitions/Payment'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */