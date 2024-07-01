const { z } = require("zod")

const signupschema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 char." })
        .max(25, { message: "Name must not be more than 25 char." }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .max(25, { message: "Email must not be more than 25 char." }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(3, { message: "Phone must be at least 10 char." }),
    // .max(25, { message: "Name must not be more than 25 char." }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "Password must be at least 7 char." })
        .max(15, { message: "Password must not be more than 15 char." }),
})

module.exports = signupschema;