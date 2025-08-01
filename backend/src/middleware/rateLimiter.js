import ratelimit from '../config/upstash.js'

const rateLimiter = async (req, res, next) => {
  try {
    // Use IP address for per-user rate limiting instead of global key
    const identifier = req.ip || req.connection.remoteAddress || 'anonymous'
    const { success, limit, remaining, reset } = await ratelimit.limit(
      identifier
    )

    if (!success) {
      return res.status(429).json({
        message: 'Too many requests, please try again later',
        limit,
        remaining,
        resetTime: new Date(reset),
      })
    }
    next()
  } catch (error) {
    console.log('Rate limit error', error)
    next()
  }
}

export default rateLimiter
