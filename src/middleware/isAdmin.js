import errors from 'http-errors'
const jwt = require('jsonwebtoken')
import userRole from '~constants/config/role'

const isAdmin = (req, res, next) => {
	if (typeof req.headers.authorization !== 'undefined') {
		let token = req.headers['authorization']
		console.log(token)
		jwt.verify(token, process.env.APP_SECRET, (err, user) => {
			if (err) {
				return res.send(errors.Unauthorized(err.toString()))
			}
			if (user.role == userRole.SUPPER_ADMIN) return next()
			else return res.send(errors.Unauthorized(err))
		})
	} else {
		return res.send(errors.Unauthorized())
	}
}
module.exports = isAdmin
