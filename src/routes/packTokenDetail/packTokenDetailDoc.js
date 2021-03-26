/**
* @swagger
* /packTokenDetail:
*   get:
*     tags:
*       - PackTokenDetail
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
 * /packTokenDetail:
 *   post:
 *     tags:
 *       - PackTokenDetail
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         properties:
 *           packTokenId:
 *             type: string
 *           packApiId:
 *             type: string
 *         example: {
 *           "packApiId": "string",
 *           "packTokenId": "string"
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
 *             $ref: '#/definitions/PackTokenDetails'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */

 /**
 * @swagger
 * /packTokenDetail/{id}:
 *   put:
 *     tags:
 *       - PackTokenDetail
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *       - name: body
 *         in: body
 *         required: true
 *         properties:
 *           packTokenId:
 *             type: string
 *           packApiId:
 *             type: string
 *         example: {
 *           "packApiId": "string",
 *           "packTokenId": "string"
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
 *             $ref: '#/definitions/PackTokenDetails'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /packTokenDetail/{id}:
 *   delete:
 *     tags:
 *       - PackTokenDetail
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
 *             $ref: '#/definitions/PackTokenDetails'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */
