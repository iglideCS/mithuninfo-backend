const { z } = require("zod");


const loginSchema = z.object({
    email:z
        .string({required_error: "Email is required"})
        .trim()
        .email({required_error: "Invaild email address"})
        .min(3, {message: "Email is too short"})
        .max(100,{message: "Email is to long"}),
         
    password: z
        .string({required_error: "Password is empty"})
        .trim()
        .min(5, {message: "Too short password"})
        .max(15, {message: "Too long password"}),
});

const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Username is empty" })
        .trim()
        .min(2,{message: "Username too short!"})
        .max(15, {message: "Username too long!"}),
});



module.exports = {signupSchema, loginSchema};