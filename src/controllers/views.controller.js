
import { productsService } from "../dao/index.js";


const productos = async (req, res) => {
    const prod = productsService.getAll();
    res.render('productos', { prod })
};

const productosSave = async (req, res) => {
    let prod = req.body
    await productsService.save(prod)
    res.redirect('/home')
};

const login = (req, res) => {
    res.render('login');
};

const register = (req, res) => {
    res.render('register');
};

const profile =  (req, res) => {
    res.render('profile', { user: req.session.user });
};

const home = async (req, res) => {
    res.render('home', { user: req.session.user });
};

const chat = async (req, res, next) => {
    res.render('chat', {})
}

const logOut = (req, res) => {
    res.render('logout', { user: req.session.user });
    req.session.destroy();
    console.log('Sesion finalizada');
};

const info = (req, res) => {
    res.json({
        server: {
            name: process.title,
            nodeVersion: process.version,
            pid: process.pid,
            uptime: process.uptime(),
            memoryUsage: process.memoryUsage(),
            platform: process.platform,
            architecture: process.arch
        }
    })
};

export default {
    productos,
    productosSave,
    login,
    register,
    profile,
    home, 
    chat,
    logOut,
    info
}