var express = require('express');
var router = express.Router();

const features = {
    "fen": {
        title: "Fen za kosu",
        icon: "https://img.icons8.com/ios/50/000000/hair-dryer.png"
    },
    "tv": {
        title: "TV",
        icon: "https://img.icons8.com/ios/50/000000/tv.png"
    },
    "wifi": {
        title: "Wi-Fi",
        icon: "https://img.icons8.com/ios/50/000000/wifi.png"
    },
    "klima": {
        title: "Klima",
        icon: "https://img.icons8.com/ios/50/000000/air-conditioner.png"
    },
    "peskiri": {
        title: "Peškiri",
        icon: "https://img.icons8.com/ios/50/000000/towel.png"
    },
    "kuhinja": {
        title: "Kuhinja",
        icon: "https://img.icons8.com/ios/50/000000/kitchen-room.png"
    },
    "pegla": {
        title: "Pegla na upit",
        icon: "https://img.icons8.com/ios/50/000000/iron.png"
    },
    "pet": {
        title: "Pet friendly",
        icon: "https://img.icons8.com/ios/50/000000/pet.png"
    },
    "krevetac": {
        title: "Krevetac na upit",
        icon: "https://img.icons8.com/ios/50/000000/crib.png"
    },
    "wc-papir": {
        title: "Wc papir",
        icon: "https://img.icons8.com/ios/50/000000/toilet-paper.png"
    },
    "sampon": {
        title: "Šampon",
        icon: "https://img.icons8.com/ios/50/000000/shampoo.png"
    },
    "sapun": {
        title: "Sapun",
        icon: "https://img.icons8.com/ios/50/000000/soap-dispenser.png"
    },
    "tus": {
        title: "Tuš kabina",
        icon: "https://img.icons8.com/ios/50/000000/shower.png"
    }
    

}

/* GET home page. */
router.get('/1', function(req, res, next) {
    const config = { 
        name: 'Apartman 1', 
        features: [
            features["fen"], 
            features["tv"], 
            features["wifi"], 
            features["klima"], 
            features["peskiri"], 
            features["kuhinja"], 
            features["pegla"], 
            features["pet"],
        ],
        images: [
            { 
                src :"/images/apartman1/IMG_4520.jpg",
                active: true
            },
            {
                src :"/images/apartman1/IMG_4521.jpg",
                active: false
            },
            {
                src :"/images/apartman1/IMG_4525.jpg",
                active: false
            },
            {
                src :"/images/apartman1/IMG_4528.jpg",
                active: false
            }
        ]
    }
    res.render('apartman', config);
});

router.get('/2', function(req, res, next) {
    const config = {
        name: 'Apartman 2',
        features: [
            features["fen"], 
            features["tv"], 
            features["wifi"], 
            features["klima"], 
            features["peskiri"],  
            features["pegla"], 
            features["pet"],    
        ],  
        images: [
            { 
                src :"/images/apartman2/IMG_4459.jpg",
                active: true
            },
            {
                src :"/images/apartman2/IMG_4460.jpg",
                active: false
            },
            {
                src :"/images/apartman2/IMG_4465.jpg",
                active: false
            }
        ]  

    }
    res.render('apartman', config);
});

router.get('/3', function(req, res, next) {
    const config = { 
        name: 'Apartman 3', 
        features: [
            features["fen"], 
            features["tv"], 
            features["wifi"], 
            features["klima"], 
            features["peskiri"], 
            features["kuhinja"], 
            features["pegla"], 
            features["pet"],
            features["krevetac"],
        ],
        images: [
            { 
                src :"/images/apartman3/IMG_4478.jpg",
                active: true
            },
            {
                src :"/images/apartman3/IMG_4479.jpg",
                active: false
            },
            {
                src :"/images/apartman3/IMG_4481.jpg",
                active: false
            },
            {
                src :"/images/apartman3/IMG_4485.jpg",
                active: false
            }
        ]
    }
    res.render('apartman', config);
});

router.get('/4', function(req, res, next) {
    const config = { 
        name: 'Apartman 4', 
        features: [
            features["fen"], 
            features["tv"], 
            features["wifi"], 
            features["klima"], 
            features["peskiri"], 
            features["kuhinja"], 
            features["pegla"], 
            features["pet"],
            features["krevetac"],
        ],
        images: [
            { 
                src :"/images/apartman4/IMG_4539.jpg",
                active: true
            },
            {
                src: "/images/apartman4/IMG_4541.jpg",
                active: false
            },
            {
                src: "/images/apartman4/IMG_4542.jpg",
                active: false
            },
            {
                src: "/images/apartman4/IMG_4551.jpg",
                active: false
            },
            {
                src: "/images/apartman4/IMG_4554.jpg",
                active: false
            }
        ]
    }
    res.render('apartman', config);
});

module.exports = router;
