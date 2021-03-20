import errors from 'http-errors'
const jwt = require('jsonwebtoken')

const isLogin = (req, res, next) => {
	if (typeof req.headers.authorization !== 'undefined') {
		let token = req.headers['authorization']
		jwt.verify(token, process.env.APP_SECRET, (err, user) => {
			if (err) {
				return res.send(errors.Unauthorized(err.toString()))
			}
			req.user = user
			return next()
			if (user.role ==1) return next()
			// else return res.send(errors.Unauthorized(err))
		})
	} else {
		return res.send(errors.Unauthorized())
	}
}
module.exports = isLogin
