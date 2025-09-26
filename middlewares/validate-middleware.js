const validate = (schema) => async (req, res, next) =>{
    try {
        
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        
        const status = 422; 
        const message ="Fill details properly";
        const extraError = err.errors[0].message;
        
        const error ={
            status,
            message,
            extraError,
        };

        console.log(error);
        // res.status(400).json({msg: message})
        next(error);
    }
}

const loginValidate = (schema) => async (req, res, next) =>{
    try {
        
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        
        const status = 422; 
        const message ="Fill login details properly";
        const extraError = err.errors[0].message;
        
        const error ={
            status,
            message,
            extraError,
        };

        console.log(error);
        next(error);
    }
}

module.exports = {validate, loginValidate};