const express = require("express");
const homePageController = require("../controllers/homePageController");
const registerController = require("../controllers/registerController");
const imgController = require("../controllers/imageController");
const auth = require("../validation/authValidation");
const passport = require("passport");


const router = express.Router();

const initWebRoutes = (app) => {

     router.get("/",  homePageController.handleHelloWorld);
     router.get("/register", registerController.getPageRegister);
     router.post("/register", auth.validateRegister, registerController.createNewUser);
     router.get("/img",  imgController.imageControl);
    return app.use("/", router);
};

module.exports = initWebRoutes;