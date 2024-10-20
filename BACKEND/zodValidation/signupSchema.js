const zod = require("zod");

const signupSchema = zod.object({

    fullName: zod.string().min(1, { message: "Full name is required" }).max(100, { message: "Full name can't exceed 100 characters" }),
    email: zod.string().email({message: "Invalid email address"}),
    password: zod.string().min(6, {message: "Must be 6 or more characters long"}),
    rePassword: zod.string().min(6, {message: "Must be 6 or more characters long"}),

}).refine(data => data.password === data.rePassword, {
    message: "Passwords doesn't match",
    path: ['rePassword'], // specify the field which will receive the error message
});


module.exports = signupSchema;

