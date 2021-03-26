/**
* @swagger
* /api:
*   get:
*     tags:
*       - API
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
* /api/{id}:
*   get:
*     tags:
*       - API
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
 * /api:
 *   post:
 *     tags:
 *       - API
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         properties:
 *           name:
 *             type: string
 *           params:
 *             type: object
 *           link:
 *             type: string
 *         example: {
 *           "name": "nhan dien khuon mat",
 *           "params": {},
 *           "link":"https://fb.com",
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
 *             $ref: '#/definitions/API'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */

 /**
 * @swagger
 * /api/{id}:
 *   put:
 *     tags:
 *       - API
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
 *           params:
 *             type: object
 *           link:
 *             type: string
 *         example: {
 *           "name": "nhan dien khuon mat",
 *           "params": {},
 *           "link":"https://fb.com",
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
 *             $ref: '#/definitions/API'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */
/**
 * @swagger
 * /api/{id}:
 *   delete:
 *     tags:
 *       - API
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
 *             $ref: '#/definitions/API'
 *       500:
 *         description: When got server exception
 *         schema:
 *           type: string
 */
