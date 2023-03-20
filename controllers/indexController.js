
const MernOn = require('../models/MernOnsModel');



module.exports = {

    findData: (req, res) => {
       //console.log(req.query)
        MernOn.find(req.query)
        .lean()
        .exec((err, findData) => {
                if (err) {
                    res.send("Błąd wyszukania");
                }
        res.json(findData)
     //   console.log(findData)
            });
    },

    allUsers: (req, res) => {
        //console.log(req.query)
        MernOn.find(req.query)
            .lean()
            .exec((err, allUser) => {
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
        res.json(allUser)
            });
    },
 
    filtrNameUp: (req, res) => {
        //console.log(req.query)
        MernOn.find(req.query).sort({ "name": 1 })
            .lean()
            .exec((err, filtrNameUp) => {
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
        res.json(filtrNameUp)
            });
    },
    filtrNameDown: (req, res) => {
        //console.log(req.query)
        MernOn.find(req.query).sort({ "name":-1 })
            .lean()
            .exec((err, filtrNameDown) => {
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
        res.json(filtrNameDown)
            });
    },
    filtrCityUp: (req, res) => {
        //console.log(req.query)
        MernOn.find(req.query).sort({ "city": 1 })
            .lean()
            .exec((err, filtrCityUp) => {
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
        res.json(filtrCityUp)
            });
    },
    filtrCityDown: (req, res) => {
        //console.log(req.query)
        MernOn.find(req.query).sort({ "city":-1 })
            .lean()
            .exec((err, filtrCityDown) => {
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
        res.json(filtrCityDown)
            });
    },
    filtrCourseUp: (req, res) => {
        //console.log(req.query)
        MernOn.find(req.query).sort({ "course": 1 })
            .lean()
            .exec((err, filtrCourseUp) => {
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
        res.json(filtrCourseUp)
            });
    },
    filtrCourseDown: (req, res) => {
        //console.log(req.query)
        MernOn.find(req.query).sort({ "course":-1 })
            .lean()
            .exec((err, filtrCourseDown) => {
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
        res.json(filtrCourseDown)
            });
    },

    create: (req, res) => {
        let newUser = new MernOn(req.body);
        newUser.save();
        res.json(newUser)
    },



    delete: (req, res) => {
        MernOn.findByIdAndDelete(req.params.id).exec((err) => {
            if (err) {
                res.send("Błąd usuwania uzytkownika");
            }

           res.json({deleted:true})
         
        })
    },

    update: (req, res) => {
                MernOn.findByIdAndUpdate(req.params.id, req.body).exec((err, updateUser) => {
         
            if (err) {
                res.send("Błąd aktualizacji");
            }
            res.json(updateUser);
          
        })
    },



}