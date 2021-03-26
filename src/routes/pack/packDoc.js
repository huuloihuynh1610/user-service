/**
* @swagger
* /pack:
*   get:
*     tags:
*       - Pack
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
* /pack/{id}:
*   get:
*     tags:
*       - Pack
*     summary: Get user from database
*     parameters:
*       - name: id
*         in: path
*         required: true
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
 * /pack:
 *   post:
 *     tags:
 *       - Pack
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         properties:
 *           name:
 *             type: string
 *           price:
 *             type: number
 *           amount:
 *             type: string
 *           type:
 *             type: string
 *         example: {
 *           "name": "chuyen khoan",
 *           "type": "1",
 *           "price":110000,
 *           "amount":"100000"
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
 *             $ref: '#/definitions/Pack'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */

 /**
 * @swagger
 * /pack/{id}:
 *   put:
 *     tags:
 *       - Pack
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
 *           price:
 *             type: number
 *           amount:
 *             type: string
 *           type:
 *             type: string
 *         example: {
 *           "name": "chuyen khoan",
 *           "type": "1",
 *           "price":110000,
 *           "amount":"100000"
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
 *             $ref: '#/definitions/Pack'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /pack/{id}:
 *   delete:
 *     tags:
 *       - Pack
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         name: body
 *         in: body
 *         required: true
 *         description: Your account info
 *         schema:
 *           type: object
 *           properties:
 *             $ref: '#/definitions/Pack'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */
