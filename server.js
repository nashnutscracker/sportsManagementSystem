var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var express = require('express');
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded
    ({ extended: false });
var app = express();
var count = 0;
const url = 'mongodb://localhost:27017';
const dbName = 'sportsmanagementsystem';

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/viewStudents', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        } else {
            console.log("Connected to database");
            var db = client.db(dbName);
            db.collection("students").find().toArray(function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                    res.json(result);
                }
            });
            client.close();
        }
    });
});

// app.get('/showMumbai', function (req, res) {
//     mongoClient.connect(url, function (err, client) {
//         if (err) {
//             console.log("error connecting to database :" + err);
//         } else {
//             console.log("Connected to database");
//             var db = client.db(dbName);
//             db.collection("mumbaiPlaces").find().toArray(function (err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(result);
//                     res.json(result);
//                 }
//             });
//             client.close();
//         }
//     });
// });


//---------------------Add Event-----------------------------------
app.get('/getDataEvents/:eventName', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        }
        else {
            console.log("Connected to database");
            var db = client.db(dbName);
            db.collection("events").count({ 'eventName': req.params.eventName }, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    if (result > 0) {
                        console.log("Event exists");
                        mes = "Event exists";
                        res.json({ mes: mes });
                    }
                    else {
                        console.log("Event doesn't exist");
                        mes = "Event doesn't exist";
                        res.json({ mes: mes });
                    }
                    console.log(result);
                }
            })
            client.close();
        }
    });
});

app.post('/addEvent', urlencodedParser, function (req, res) {
    // this.count = this.count + 1;
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        }
        else {
            console.log("Connected to database");
            var data = req.body;
            console.log(data);
            var db = client.db(dbName);
            db.collection("events").insert(data, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                    res.json(result);
                }
            });
            client.close();
        }
    });
});


//---------------------Add Student-----------------------------------
app.get('/getDataStudents/:studentNumber', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        }
        else {
            console.log("Connected to database");
            var db = client.db(dbName);
            db.collection("students").count({ 'studentNumber': req.params.studentNumber }, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    if (result > 0) {
                        console.log("Student exists");
                        mes = "Student exists";
                        res.json({ mes: mes });
                    }
                    else {
                        console.log("Student doesn't exist");
                        mes = "Student doesn't exist";
                        res.json({ mes: mes });
                    }
                    console.log(result);
                }
            })
            client.close();
        }
    });
});

app.post('/addStudent', urlencodedParser, function (req, res) {
    // this.count = this.count + 1;
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        }
        else {
            console.log("Connected to database");
            var data = req.body;
            console.log(data);
            var db = client.db(dbName);
            db.collection("students").insert(data, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                    res.json(result);
                }
            });
            client.close();
        }
    });
});


//---------------------Add Teacher-----------------------------------
app.get('/getDataTeachers/:teacherNumber', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        }
        else {
            console.log("Connected to database");
            var db = client.db(dbName);
            db.collection("teachers").count({ 'teacherNumber': req.params.teacherNumber }, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    if (result > 0) {
                        console.log("Teacher exists");
                        mes = "Teacher exists";
                        res.json({ mes: mes });
                    }
                    else {
                        console.log("Teacher doesn't exist");
                        mes = "Teacher doesn't exist";
                        res.json({ mes: mes });
                    }
                    console.log(result);
                }
            })
            client.close();
        }
    });
});

app.post('/addTeacher', urlencodedParser, function (req, res) {
    // this.count = this.count + 1;
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        }
        else {
            console.log("Connected to database");
            var data = req.body;
            console.log(data);
            var db = client.db(dbName);
            db.collection("teachers").insert(data, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                    res.json(result);
                }
            });
            client.close();
        }
    });
});


//---------------------Admin Login-----------------------------------
app.get('/getData/:username', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        }
        else {
            console.log("Connected to database");
            var db = client.db(dbName);
            db.collection("admin").count({ 'username': req.params.username }, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    if (result > 0) {
                        console.log("Admin exists");
                        mes = "Admin exists";
                        res.json({ mes: mes });
                    }
                    else {
                        console.log("Admin doesn't exist");
                        mes = "Admin doesn't exist";
                        res.json({ mes: mes });
                    }
                    console.log(result);
                }
            })
            client.close();
        }
    });
});



//---------------------Teacher Login-----------------------------------
app.get('/getDataTeacherLogin/:teacherUsername', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error connecting to database :" + err);
        }
        else {
            console.log("Connected to database");
            var db = client.db(dbName);
            db.collection("teachers").count({ 'teacherUsername': req.params.teacherUsername }, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    if (result > 0) {
                        console.log("Teacher exists");
                        mes = "Teacher exists";
                        res.json({ mes: mes });
                    }
                    else {
                        console.log("Teacher doesn't exist");
                        mes = "Teacher doesn't exist";
                        res.json({ mes: mes });
                    }
                    console.log(result);
                }
            })
            client.close();
        }
    });
});

app.listen(2000, () => console.log("Server Connecting"));