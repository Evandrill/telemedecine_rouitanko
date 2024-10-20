// zodValidation/signinSchema.js
const { z } = require('zod');

const signinSchema = z.object({
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Invalid password"})
})

module.exports = signinSchema;
