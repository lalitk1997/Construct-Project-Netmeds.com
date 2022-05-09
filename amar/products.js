var cats = document.querySelectorAll("#category>ul>li>a")


cats.forEach(function (ele) {
    var dd_content = ele.nextElementSibling

    ele.addEventListener("click", function () {

        if (dd_content.style.display == "block") {
            dd_content.style.display = "none"
        }
        else {
            dd_content.style.display = "block"
        }


    })

})

var manufacturers = [
    'Dr. Roshanlal Aggarwal & Sons P. Ltd',
    'Dr.Willmar Schwabe India Pvt. Ltd',
    'Adelmar Pharma GMBH',
    'SBL Pvt. Ltd.',
    'Global India Enterprises',
    "Lord's Homeopathic Laboratory Pvt.Ltd",
    'LDD Bioscience Pvt. Ltd.',
    'Boiron Laboratories Pvt Ltd',
    'Dabur India Ltd',
    'Hahnemann Scientific Laboratory (India) Pvt. Ltd.',
    'Similia Homoeo Laboratory',
    'Axiom Ayurveda Private Limited',
    'The Himalaya Drug Company',
    'Kerala Ayurveda Ltd',
    'Patanjali Ayurved Ltd',
    'Nanak Laboratories Pvt Ltd',
    'Bjain Pharmaceuticals Pvt. Ltd',
    'Sriveda Sattva Pvt Ltd',
    'Adret Retail Pvt Ltd, (Kapiva)',
    'Wheezal Homeo Pharma',
    'Herbolab India Pvt Ltd',
    'Hahnemann Pure Drug Co.Pvt.Ltd',
    'Healwell International Limited',
    'Kairali Ayurvedic Products Pvt. Ltd',
    'Lama Pharmaceuticals',
    'Doliosis Homoeo Pharma Pvt. Ltd.',
    'Herbalify Global',
    'Innoveda Herbs Private Limited',
    'Emami Ltd',
    'Herbal Canada',
    'M/s. Allen Homeo & Herbal Products Ltd',
    'Kradha Enterprises',
    'Planet Ayurveda',
    'Swadeshi Ayurved',
    'Shree Baidyanath Ayurved Bhawan Pvt Ltd,Nagpur',
    'Charak Pharma Pvt Ltd',
    'Dr.Raj Homoeo Pharmacy',
    'Khadi Organique',
    'Renovision Exports Pvt.Ltd.',
    'Swadeshi',
    'Jiva Ayurvedic Pharmacy Ltd',
    'S A Herbal Bioactives LLP',
    'Medilife Impex Pvt. Ltd.',
    'Life Aveda',
    'Shree Baidyanath Ayurved Bhawan Pvt Ltd,Kolkata',
    'Raju Agarwal',
    'Skm Siddha And Ayurvedha Company India Pvt Ltd',
    'Nipco Homeopathic Products',
    'Medilexicon Pharmaceuticals Pvt. Ltd.',
    'Pravek Kalp Pvt Ltd'
]



display_manu(manufacturers)


function display_manu(data) {
    var i = 0;
    data.forEach(function (ele) {
        var input = document.createElement("input")
        input.setAttribute("id", i)
        input.setAttribute("type", "checkbox")
        input.setAttribute("class", "check")
        var label = document.createElement("label")
        label.setAttribute("for", i)
        label.innerText = ele
        i++;

        var div = document.createElement("div")
        div.setAttribute("class", "checkbox")
        div.append(input, label)

        document.querySelector("#manu-names").append(div)
    })
}








var allProd = [
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/821936/sbl_dibonil_liquid_30_ml_0_0.jpg",
        "product_name": "SBL Dibonil Liquid 30 ml",
        "manufacturer": "Mkt: SBL Pvt. Ltd.",
        "price_box": "Rs. 115.00",
        "category": "Homeopathy",
        "strikedoffprice": 1000,
        "price": 115
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/826075/dr_reckeweg_r73_spondarthrin_drops_22_ml_0_0.jpg",
        "product_name": "Dr. Reckeweg R73 Spondarthrin Drops 22 ml",
        "manufacturer": "Mkt: Dr. Roshanlal Aggarwal & Sons P. Ltd",
        "price_box": "Rs. 250.00",
        "category": "Homeopathy",
        "strikedoffprice": 1000,
        "price": 250
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/826136/dr_reckeweg_r9_jutussin_drops_22_ml_0.jpg",
        "product_name": "Dr. Reckeweg R9 Jutussin Drops 22 ml",
        "manufacturer": "Mkt: Dr. Roshanlal Aggarwal & Sons P. Ltd",
        "price_box": "Rs. 250.00",
        "category": "Homeopathy",
        "strikedoffprice": 1000,
        "price": 250
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/821954/sbl_b_trim_drops_30_ml_0.jpg",
        "product_name": "SBL B-TRIM DROPS 30 ml",
        "manufacturer": "Mkt: SBL Pvt. Ltd.",
        "price_box": "Rs. 165.00",
        "category": "Homeopathy",
        "strikedoffprice": 1000,
        "price": 165
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/821945/sbl_scalptone_tablet_25_gm_0.jpg",
        "product_name": "SBL Scalptone Tablet 25 gm",
        "manufacturer": "Mkt: SBL Pvt. Ltd.",
        "price_box": "Rs. 140.00",
        "category": "Homeopathy",
        "strikedoffprice": 1000,
        "price": 140
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/821951/sbl_vertefine_drops_30_ml_0.jpg",
        "product_name": "SBL Vertefine Drops 30 ml",
        "manufacturer": "Mkt: SBL Pvt. Ltd.",
        "price_box": "Rs. 110.00",
        "category": "Homeopathy",
        "strikedoffprice": 1000,
        "price": 110
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/821943/sbl_rite_hite_tablet_25_gm_0.jpg",
        "product_name": "SBL Rite-Hite Tablet 25 gm",
        "manufacturer": "Mkt: SBL Pvt. Ltd.",
        "price_box": "Rs. 140.00",
        "category": "Homeopathy",
        "strikedoffprice": 1000,
        "price": 140
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/826105/dr_reckeweg_r42_haemovenin_drops_22_ml_0.jpg",
        "product_name": "Dr. Reckeweg R42 Haemovenin Drops 22 ml",
        "manufacturer": "Mkt: Dr. Roshanlal Aggarwal & Sons P. Ltd",
        "price_box": "Rs. 250.00",
        "category": "Homeopathy",
        "strikedoffprice": 1000,
        "price": 250
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/15917/dabur_pudin_hara_pearls_capsule_10_s_0.jpg",
        "product_name": "Dabur Pudin Hara Pearls Capsule 10's",
        "manufacturer": "Mkt: Dabur India Ltd",
        "price_box": "Rs. 20.00",
        "save_badge": "",
        "price": "",
        "category": "Ayurvedic",
        "strikedoffprice": 1000,
        "price": 20
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/341494/liv_52_tablet_100_s_0.jpg",
        "product_name": "Himalaya Liv.52 Tablet 100's",
        "manufacturer": "Mkt: The Himalaya Drug Company",
        "price_box": "Rs. 101.40",
        "save_badge": "22% OFF",
        "price": "Rs. 130.00",
        "category": "Ayurvedic",
        "strikedoffprice": 1000,
        "price": 130
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/390287/galact_granules_200gm_0.jpg",
        "product_name": "Galact Granules - Elaichi Flavour 200gm",
        "manufacturer": "Mkt: Emcure Pharmaceuticals Ltd",
        "price_box": "Rs. 306.80",
        "save_badge": "20% OFF",
        "price": "Rs. 383.50",
        "category": "Ayurvedic",
        "strikedoffprice": 1000,
        "price": 306
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/303384/confido_tablet_60_s_0.jpg",
        "product_name": "Himalaya Confido Tablet 60's",
        "manufacturer": "Mkt: The Himalaya Drug Company",
        "price_box": "Rs. 137.95",
        "save_badge": "11% OFF",
        "price": "Rs. 155.00",
        "category": "Ayurvedic",
        "strikedoffprice": 1000,
        "price": 137
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/104243/liv_52_hb_capsule_10s_0_0.jpg",
        "product_name": "Himalaya Liv.52 HB Capsule 10's",
        "manufacturer": "Mkt: The Himalaya Drug Company",
        "price_box": "Rs. 124.60",
        "save_badge": "11% OFF",
        "price": "Rs. 140.00",
        "category": "Ayurvedic",
        "strikedoffprice": 1000,
        "price": 140
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/359873/septilin_tablet_60_s_0.jpg",
        "product_name": "Himalaya Septilin Tablet 60's",
        "manufacturer": "Mkt: The Himalaya Drug Company",
        "price_box": "Rs. 135.30",
        "save_badge": "18% OFF",
        "price": "Rs. 165.00",
        "category": "Ayurvedic",
        "strikedoffprice": 1000,
        "price": 165
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/12749/dabur_chyawanprash_awaleha_500_gm_0.jpg",
        "product_name": "Dabur Chyawanprash Awaleha 500 gm",
        "manufacturer": "Mkt: Dabur India Ltd",
        "price_box": "Rs. 210.00",
        "save_badge": "",
        "price": "",
        "category": "Ayurvedic",
        "strikedoffprice": 1000,
        "price": 210
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/814310/himalaya_wellness_ashvagandha_tablet_60_s_0.jpg",
        "product_name": "Himalaya Wellness Ashvagandha Tablet 60's",
        "manufacturer": "Mkt: The Himalaya Drug Company",
        "price_box": "Rs. 165.00",
        "save_badge": "",
        "price": "",
        "category": "Ayurvedic",
        "strikedoffprice": 1000,
        "price": 165
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/834545/hamdard_safi_syrup_100_ml_0.jpg",
        "product_name": "Hamdard Safi Syrup 100 ml",
        "manufacturer": "Mkt: Hamdard Laboratories India Pvt Ltd",
        "price_box": "Rs. 60.00",
        "category": "Unani",
        "strikedoffprice": 1000,
        "price": 60
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/834927/hamdard_joshina_syrup_200_ml_0.jpg",
        "product_name": "Hamdard Joshina Syrup 200 ml",
        "manufacturer": "Mkt: Hamdard Laboratories India Pvt Ltd",
        "price_box": "Rs. 120.00",
        "category": "Unani",
        "strikedoffprice": 1000,
        "price": 120
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/834537/hamdard_sualin_tab_60_s_0.jpg",
        "product_name": "Hamdard Sualin Tab 60's",
        "manufacturer": "Mkt: Hamdard Laboratories India Pvt Ltd",
        "price_box": "Rs. 65.00",
        "category": "Unani",
        "strikedoffprice": 1000,
        "price": 65
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/834544/hamdard_roghan_badam_shirin_100_ml_0.jpg",
        "product_name": "Hamdard Roghan Badam Shirin Oil 100 ml",
        "manufacturer": "Mkt: Hamdard Laboratories India Pvt Ltd",
        "price_box": "Rs. 425.00",
        "category": "Unani",
        "strikedoffprice": 1000,
        "price": 425
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/834542/hamdard_roghan_badam_shirin_25_ml_0.jpg",
        "product_name": "Hamdard Roghan Badam Shirin 25 ml",
        "manufacturer": "Mkt: Hamdard Laboratories India Pvt Ltd",
        "price_box": "Rs. 115.00",
        "category": "Unani",
        "strikedoffprice": 1000,
        "price": 115
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/834324/rex_jawarish_kamooni_125_gm_0.jpg",
        "product_name": "Rex Jawarish Kamooni 125 gm",
        "manufacturer": "Mkt: Rex Remedies Ltd",
        "price_box": "Rs. 85.00",
        "category": "Unani",
        "strikedoffprice": 1000,
        "price": 85
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/834543/hamdard_roghan_badam_shirin_50_ml_0.jpg",
        "product_name": "Hamdard Roghan Badam Shirin 50 ml",
        "manufacturer": "Mkt: Hamdard Laboratories India Pvt Ltd",
        "price_box": "Rs. 198.00",
        "category": "Unani",
        "strikedoffprice": 1000,
        "price": 198
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/316749/hamdard_safi_syrup_500_ml_0.jpg",
        "product_name": "Hamdard Safi Syrup 500 ml",
        "manufacturer": "Mkt: Hamdard Laboratories India Pvt Ltd",
        "price_box": "Rs. 220.00",
        "category": "Unani",
        "strikedoffprice": 1000,
        "price": 220
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/887242/dr_jrk_dano_anti_dandruff_oil_100_ml_0.jpg",
        "product_name": "Dr. JRK Dano Anti Dandruff Oil 100 ml",
        "manufacturer": "Mkt: Caredura Products",
        "price_box": "Rs. 250.00",
        "save_badge": "",
        "price ": "",
        "category": "Siddha",
        "strikedoffprice": 1000,
        "price": 250
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/887254/dr_jrk_pesin_500_mg_tablet_60_s_0.jpg",
        "product_name": "Dr. JRK Pesin 500 mg Tablet 60's",
        "manufacturer": "Mkt: Caredura Products",
        "price_box": "Rs. 654.00",
        "save_badge": "",
        "price ": "",
        "category": "Siddha",
        "strikedoffprice": 1000,
        "price": 654
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/851658/skm_kunkumadi_thaila_lepam_15_gm_0.jpg",
        "product_name": "SKM Kunkumadi Thaila Lepam 15 gm",
        "manufacturer": "Mkt: Skm Siddha And Ayurvedha Company India Pvt Ltd",
        "price_box": "Rs. 65.70",
        "save_badge": "10% OFF",
        "price ": "Rs. 73.00",
        "category": "Siddha",
        "strikedoffprice": 1000,
        "price": 73
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/840362/herbodaya_nilavembu_kudineer_chooranam_pack_of_20_x_5_gm_0_1.jpg",
        "product_name": "Herbodaya Nilavembu Kudineer Chooranam (Pack of 20 x 5 gm)",
        "manufacturer": "Mkt: Skm Siddha And Ayurvedha Company India Pvt Ltd",
        "price_box": "Rs. 180.00",
        "save_badge": "10% OFF",
        "price ": "Rs. 200.00",
        "category": "Siddha",
        "strikedoffprice": 1000,
        "price": 180
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/851644/skm_viigorwin_legiyam_200_gm_0.jpg",
        "product_name": "SKM Viigorwin Legiyam 200 gm",
        "manufacturer": "Mkt: Skm Siddha And Ayurvedha Company India Pvt Ltd",
        "price_box": "Rs. 468.00",
        "save_badge": "10% OFF",
        "price ": "Rs. 520.00",
        "category": "Siddha",
        "strikedoffprice": 1000,
        "price": 520
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/851652/skm_aswaganthy_legiyam_500_gm_0.jpg",
        "product_name": "SKM Aswaganthy Legiyam 500 gm",
        "manufacturer": "Mkt: Skm Siddha And Ayurvedha Company India Pvt Ltd",
        "price_box": "Rs. 354.60",
        "save_badge": "10% OFF",
        "price ": "Rs. 394.00",
        "category": "Siddha",
        "strikedoffprice": 1000,
        "price": 394
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/851651/skm_aswaganthy_legiyam_200_gm_0.jpg",
        "product_name": "SKM Aswaganthy Legiyam 200 gm",
        "manufacturer": "Mkt: Skm Siddha And Ayurvedha Company India Pvt Ltd",
        "price_box": "Rs. 148.50",
        "save_badge": "10% OFF",
        "price ": "Rs. 165.00",
        "category": "Siddha",
        "strikedoffprice": 1000,
        "price": 148
    },
    {
        "image_src": "https://www.netmeds.com/images/product-v1/150x150/851650/skm_nellikkai_legiyam_200_gm_0.jpg",
        "product_name": "SKM Nellikkai Legiyam 200 gm",
        "manufacturer": "Mkt: Skm Siddha And Ayurvedha Company India Pvt Ltd",
        "price_box": "Rs. 130.50",
        "save_badge": "10% OFF",
        "price ": "Rs. 145.00",
        "category": "Siddha",
        "strikedoffprice": 1000,
        "price": 130
    }
]

display_prod(allProd)


function display_prod(data) {
    document.querySelector("#products").innerHTML = ""

    var div = document.createElement("div")
    div.setAttribute("id", "prods")
    var h2 = document.createElement("h2")
    h2.innerText = "ALL PRODUCTS"
    document.querySelector("#products").append(h2)


    data.forEach(function (ele) {

        var box = document.createElement("div")
        var box2 = document.createElement("div")
        var box3 = document.createElement("div")
        box3.setAttribute("id", "cart")
        var image = document.createElement("img")
        image.src = ele.image_src
        var name = document.createElement("h3")
        name.innerText = ele.product_name
        var manufacturer = document.createElement("p")
        manufacturer.innerText = ele.manufacturer
        var span = document.createElement("span")
        span.innerText = "Best price*  "
        var price = document.createElement("p")
        price.innerText = ele.price_box
        var cart = document.createElement("button")
        cart.innerText = "ADD TO CART"
        cart.style.cursor = "pointer"
        cart.addEventListener("click", function handler() {
            cart.innerText = "ADDED TO CART"
            cart.style.backgroundColor = "#3f6a6b"

            // cart.classList.toggle("remvItem")
            cartfun(ele)
            cart.removeEventListener("click", handler)
            cart.addEventListener("click", function handler2() {
                cart.innerText = "ADD TO CART"
                cart.style.backgroundColor = "#24aeb1"

                remvfun(ele)
                

                cart.removeEventListener("click", handler2)
                cart.addEventListener("click", handler)
                alert("Removed from the cart")


            })


        })

        box2.append(image, name, manufacturer, span, price)
        box3.append(cart)
        box.append(box2, box3)
        div.append(box)
        document.querySelector("#products").append(div)

    })
}

var prCart = document.querySelector("#prods button")
console.log(prCart)






var cartArr = JSON.parse(localStorage.getItem("cartData")) || []

function cartfun(ele) {
    // console.log(ele)
    cartArr.push(ele)
    localStorage.setItem("cartData", JSON.stringify(cartArr))

}

function remvfun(ele) {
    var idx = cartArr.indexOf(ele)
    // console.log(idx)
    cartArr.splice(idx, 1)
    console.log(cartArr)
    localStorage.setItem("cartData", JSON.stringify(cartArr))

}





var cat = document.querySelectorAll("#category a+ul>li")
// console.log(cat)

cat.forEach(function (ele) {
    ele.addEventListener("click", func)
})

function func() {
    var filter = allProd.filter(function (el) {
        return el.category == event.target.innerText
    })

    display_prod(filter)

}


var mancheckarr = []


var man_check = document.querySelectorAll(".check")
// console.log(man_check)
man_check.forEach(function (ele) {
    // console.log(ele)
    ele.addEventListener("change", checkboxfun)

})

function checkboxfun() {
    // console.log(event.target)

    if (event.target.checked == true) {
        // console.log(event.target.nextElementSibling.innerText)
        mancheckarr.push(event.target.nextElementSibling.innerText)
        // console.log(mancheckarr)

        var manObjarr = allProd.filter(function (el) {
            return mancheckarr.includes(el.manufacturer.slice(5))
        })
        display_prod(manObjarr)
        // console.log(manObjarr)
    }

}


// var brandcheckarr = []


// var brand_check = document.querySelectorAll(".bcheck")
// // console.log(brand_check)
// brand_check.forEach(function (ele) {
//     // console.log(ele)
//     ele.addEventListener("change", bcheckboxfun)

// })

// function bcheckboxfun() {
//     // console.log(event.target)

//     if (event.target.checked == true) {
//         // console.log(event.target.nextElementSibling.innerText)
//         brandcheckarr.push(event.target.nextElementSibling.innerText)
//         // console.log(brandcheckarr)

//         var brandObjarr = allProd.filter(function (el) {
//             // return brandcheckarr.includes(el.manufacturer.slice(5))
//             return brandcheckarr.includes(el.product_name.slice(4))
//         })
//         // display_prod(brandObjarr)
//         console.log(brandObjarr)
//     }

// }

var popularity = document.querySelector("#sort-by>button")
// console.log(popularity)
popularity.style.cursor = "pointer"

popularity.addEventListener("click", popfun)

function popfun() {
    display_prod(allProd)
}

var htl = document.querySelector("#sort-by>button+button")
// console.log(htl)
htl.style.cursor = "pointer"

htl.addEventListener("click", htlfun)

function htlfun() {
    allProd.sort(function (a, b) {
        return Number(b.price_box.slice(4)) - Number(a.price_box.slice(4))
    })
    // console.log(allProd)
    display_prod(allProd)
}

var lth = document.querySelector("#sort-by>button+button+button")
// console.log(lth)
lth.style.cursor = "pointer"

lth.addEventListener("click", lthfun)

function lthfun() {
    allProd.sort(function (a, b) {
        return Number(a.price_box.slice(4)) - Number(b.price_box.slice(4))
    })
    // console.log(allProd)
    display_prod(allProd)

}


var btns = document.querySelectorAll("#sort-by button")
// console.log(btns)
btns.forEach(function (ele) {
    ele.addEventListener("click", function () {
        btns.forEach(function (el) {
            el.classList.remove("active")
        })
        this.classList.add("active")
    })
})
