
import { Router } from "express";
import { executePolicies } from "../middleware/auth.js";
import viewsController from "../controllers/views.controller.js";

const router = Router();

// ------------------------------------------------

router.get('/productos', viewsController.productos);

router.post('/productos', viewsController.productosSave);

// ------------------------------------------------

router.get('/', viewsController.login);

router.get('/register', viewsController.register );

router.get('/profile', executePolicies(["AUTHENTICATED"]), viewsController.profile);

router.get('/home', viewsController.home);

router.get('/chat', viewsController.chat);

router.get('/logout', viewsController.logOut);

router.get('/info', viewsController.info);

export default router;