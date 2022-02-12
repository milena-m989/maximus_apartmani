var express = require('express');
var router = express.Router();

function feature(name, __) {
    switch(name) {
        case "fen": return {
            title: __('hair_dryer'),
            icon: "https://img.icons8.com/ios/50/000000/hair-dryer.png"
        };
        case "tv": return {
            title: __('tv'),
            icon: "https://img.icons8.com/ios/50/000000/tv.png"
        };
        case "wifi": return {
            title: __('wifi'),
            icon: "https://img.icons8.com/ios/50/000000/wifi.png"
        };
        case "klima": return {
            title: __('air_con'),
            icon: "https://img.icons8.com/ios/50/000000/air-conditioner.png"
        };
        case "kuhinja": return {
            title: __('kitchen'),
            icon: "https://img.icons8.com/ios/50/000000/kitchen-room.png"
        };
        case "pegla": return {
            title: __('iron'),
            icon: "https://img.icons8.com/ios/50/000000/iron.png"
        };
        case "pet": return {
            title: __('pet_friendly'),
            icon: "https://img.icons8.com/ios/50/000000/pet.png"
        };
        case "krevetac": return {
            title: __('crib'),
            icon: "https://img.icons8.com/ios/50/000000/crib.png"
        };
    }
}
function bathroom(name, __) {
    switch(name) {
        case "wc-papir": return {
            title: __('toilet_paper'),
            icon: "https://img.icons8.com/ios/50/000000/toilet-paper.png"
        };
        case "sampon": return {
            title: __('shampoo'),
            icon: "https://img.icons8.com/ios/50/000000/shampoo.png"
        };
        case "sapun": return {
            title: __('soap'),
            icon: "https://img.icons8.com/ios/50/000000/soap-dispenser.png"
        };
        case "tus": return {
            title: __('shower'),
            icon: "https://img.icons8.com/ios/50/000000/shower.png"
        };
        case "peskiri": return {
            title: __('towels'),
            icon: "https://img.icons8.com/ios/50/000000/towel.png"
        };    
    }
}
function kitchen(name, __) {
    switch(name) {
        case "ploca": return {
            title: __('electric_stove'),
            icon: "https://img.icons8.com/ios/50/000000/electric-stovetop.png"
        };
        case "frizider": return {
            title: __('fridge'),
            icon: "https://img.icons8.com/ios/50/000000/fridge.png"
        };
        case "posudje": return {
            title: __('dishes'),
            icon: "https://img.icons8.com/ios/50/000000/kitchen--v1.png"
        };
        case "kuvalo": return {
            title: __('electric_teapot'),
            icon: "https://img.icons8.com/ios/50/000000/electric-teapot.png"
        };
        case "case": return {
            title: __('glasses'),
            icon: "https://img.icons8.com/ios/50/000000/guinness-beer--v1.png"
        };
        case "escajg": return {
            title: __('cutlery'),
            icon: "https://img.icons8.com/ios/50/000000/cutlery.png"
        };
        case "solje": return {
            title: __('cups'),
            icon: "https://img.icons8.com/ios/50/000000/tea-cup.png"
        };    
    }
}
/* GET home page. */
router.get('/:lang/apartmani/1', function(req, res, next) {
    res.setLocale(req.params.lang);
    const config = { 
        name: 'Apartman 1', 
        features: [
            feature("tv", res.__),
            feature("wifi", res.__),
            feature("klima", res.__),
            feature("kuhinja", res.__),
            feature("pegla", res.__),
            feature("fen", res.__),
            feature("pet", res.__),
        ],
        bathroom: [
            bathroom("peskiri", res.__), 
            bathroom("tus", res.__),
            bathroom("sapun", res.__),
            bathroom("sampon", res.__),
            bathroom("wc-papir", res.__),
        ],
        kitchen: [
            kitchen("ploca", res.__), 
            kitchen("frizider", res.__),
            kitchen("posudje", res.__),
            kitchen("kuvalo", res.__),
            kitchen("case", res.__),
            kitchen("escajg", res.__),
            kitchen("solje", res.__),
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

router.get('/:lang/apartmani/2', function(req, res, next) {
    res.setLocale(req.params.lang);
    const config = {
        name: 'Apartman 2',
        features: [
            feature("tv", res.__),
            feature("wifi", res.__),
            feature("klima", res.__),
            feature("pegla", res.__),
            feature("fen", res.__),
            feature("pet", res.__),
        ],
        bathroom: [
            bathroom("peskiri", res.__), 
            bathroom("tus", res.__),
            bathroom("sapun", res.__),
            bathroom("sampon", res.__),
            bathroom("wc-papir", res.__),
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

router.get('/:lang/apartmani/3', function(req, res, next) {
    res.setLocale(req.params.lang);
    const config = { 
        name: 'Apartman 3', 
        features: [
            feature("tv", res.__),
            feature("wifi", res.__),
            feature("klima", res.__),
            feature("kuhinja", res.__),
            feature("pegla", res.__),
            feature("fen", res.__),
            feature("pet", res.__),
            feature("krevetac", res.__),
        ],
        bathroom: [
            bathroom("peskiri", res.__), 
            bathroom("tus", res.__),
            bathroom("sapun", res.__),
            bathroom("sampon", res.__),
            bathroom("wc-papir", res.__),
        ],
        kitchen: [
            kitchen("ploca", res.__), 
            kitchen("frizider", res.__),
            kitchen("posudje", res.__),
            kitchen("kuvalo", res.__),
            kitchen("case", res.__),
            kitchen("escajg", res.__),
            kitchen("solje", res.__),
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

router.get('/:lang/apartmani/4', function(req, res, next) {
    res.setLocale(req.params.lang);
    const config = { 
        name: 'Apartman 4', 
        features: [
            feature("tv", res.__),
            feature("wifi", res.__),
            feature("klima", res.__),
            feature("kuhinja", res.__),
            feature("pegla", res.__),
            feature("fen", res.__),
            feature("pet", res.__),
            feature("krevetac", res.__),
        ],
        bathroom: [
            bathroom("peskiri", res.__), 
            bathroom("tus", res.__),
            bathroom("sapun", res.__),
            bathroom("sampon", res.__),
            bathroom("wc-papir", res.__),
        ],
        kitchen: [
            kitchen("ploca", res.__), 
            kitchen("frizider", res.__),
            kitchen("posudje", res.__),
            kitchen("kuvalo", res.__),
            kitchen("case", res.__),
            kitchen("escajg", res.__),
            kitchen("solje", res.__),
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
