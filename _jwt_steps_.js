/**
 * ----------------------------
 *           JWT
 * ----------------------------
 *
 * install jsonwebtoken cookie-parser
 * set cookieParser as middleware
 *
 * 1. create a token
 *
 * jwt.sign(data, secret, { expiresIn: '5h' })
 *
 * set token to the cookie of res.cookie('token', token, {
 *      httpOnly: true,
 *      secure: false,
 * }).send({ seccess: true})
 *
 * cors({
 *  origin: [''],
 *  credentials: true
 * })
 *
 * client: {
 *  withCredentials: true
 * }
 *
 * 2. send the token to the client side. make sure token is in the cookies(application)
 *
 * 3.
 *
 */
