const express = require("express");
const router = express.Router();
const cors = require("cors");


const indexViewController = require('../controllers/indexController'); //import kontrolera

router.get('/findData/?', indexViewController.findData);
router.post('/addUser', indexViewController.create); //dodaje usera
router.delete('/delete/:id', indexViewController.delete);
//router.get('/:id', indexViewController.user); //wyświetla pojedynczego uzytkownika
router.get('/', indexViewController.allUsers); // wyświetla wszystkich użytkowników 
router.put('/edit/:id', indexViewController.update);
router.get('/sortUp', indexViewController.filtrNameUp);
router.get('/sortDown', indexViewController.filtrNameDown);
router.get('/sortCityUp', indexViewController.filtrCityUp);
router.get('/sortCityDown', indexViewController.filtrCityDown);
router.get('/sortCourseUp', indexViewController.filtrCourseUp);
router.get('/sortCourseDown', indexViewController.filtrCourseDown);



module.exports = router; // eksport całości