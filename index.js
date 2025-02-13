const app = require('express')();
const multer = require('multer');

// const upload = multer({dest: 'uploads/'});

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        return cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({storage});
app.post('/upload', upload.single('gingka'), (req, res)=>{
    res.status(201).json({"bingo":"file uploaded successfullyyy...."});
});

app.listen(4000, ()=>{ console.log("server up and running on PORT:4000")});
