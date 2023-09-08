exports.checkNameProvided = (req, res, next) => {
    if (!req.body.name) {
        res.status(403).send("Please provide a name!");
    } else {
        next();
    }
}