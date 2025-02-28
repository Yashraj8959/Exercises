const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
// Multer configuration to save files in 'public' directory with unique filenames

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..','..', 'public'));
    },
    filename: (req, file, cb) => {
        // cb(null, Date.now() + '-' + file.originalname);
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null,new mongoose.Types.ObjectId().toString() + path.extname(file.originalname)  );
        // cb(null, file.originalname + Math.floor(Math.random() * 1000000) + path.extname(file.originalname)  );
    }
});

// console.log(path.extname(file.originalname))
const upload = multer({ storage : storage });

module.exports = upload;