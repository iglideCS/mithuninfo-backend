const adminMiddleware = async (req, res, next) =>{

    try {
        
        const adminAccess = req.user.isAdmin;

        if(!adminAccess){

            return res
            .status(403)
            .json({message: "Access denied!"});

        }
        next();

    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;   