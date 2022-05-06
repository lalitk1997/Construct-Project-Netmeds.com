var popularPro=[
    {
        poproImage:"https://www.netmeds.com/images/category/3055/thumb/covid_essentials_1.jpg",
        poproName:"Covid Essentials",
    },
    {
        poproImage:"https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg",
        poproName:"Sexual Wellness",
    },
    {
        poproImage:"https://www.netmeds.com/images/category/3222/thumb/vitamins_and_supplements_1.jpg",
        poproName:"Vitamins And Supplements",
    },
    {
        poproImage:"https://www.netmeds.com/images/category/491/thumb/homeopathy_1.jpg",
        poproName:"Homeopathy",
    },
    {
        poproImage:"https://www.netmeds.com/images/category/482/thumb/ayurvedic_1.jpg",
        poproName:"Ayurvedic",
    },
];

popularPro.forEach(function (popro){

    var box=document.createElement("div")

    var proImage=document.createElement("img")
    proImage.setAttribute("src",popro.poproImage)

    var proName=document.createElement("p")
    proName.innerText=popro.poproName

    // console.log(proImage,proName);
    box.append(proImage,proName);
    document.querySelector(".popular_Product").append(box)
});
/* <-----------------Mother's day special-----------------> */
var all_Product=[
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/409927/sirona_premium_applicator_tampons_mix_pack_8_s_0.jpg",
    pname:"Sirona Premium Applicator Tampons - (Mix pack) 8's",
    off:"51% OFF",
    dname:"Mkt: Sirona Hygiene Pvt Ltd",
     tag:"Best price*",
    price:"Rs. 171.50",
    pricrMrp:"MRP",
    mrp:" Rs. 350.00",
 },
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/805681/littles_soft_cleansing_baby_wipes_80s_0_3.jpg",
    pname:"Littles Soft Cleansing Baby Wipes 80's",
    off:"50% OFF",
    dname:"Mkt: Piramal Pharma Ltd",
     tag:"Best price*",
    price:"Rs. 95.00",
    pricrMrp:"MRP",
    mrp:" Rs. 190.00"
 },
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/802991/sirona_reusable_menstrual_cup_medium_0_1.jpg",
    pname:"Sirona Reusable Menstrual Cup - (Medium)",
    off:"44% OFF",
    dname:"Mkt: Sirona Hygiene Pvt Ltd",
     tag:"Best price*",
    price:"  Rs. 223.44",
    pricrMrp:"MRP",
    mrp:" Rs. 399.00"
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/827151/mothercare_all_we_know_fragranced_wipes_60_s_0.jpg",
    pname:"Mothercare All We Know Fragranced Baby Wipes - 60 Wipes",
    off:"35% OFF",
    dname:"Mkt: Mothercare",
     tag:"Best price*",
    price:"  Rs. 116.35",
    pricrMrp:"MRP",
    mrp:" Rs. 179.00"
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/38317/pro_pl_mother_s_health_drink_powder_cardamom_flavour_500_gm_pet_jar_0.jpg",
    pname:"Pro PL Mother's Health Drink Powder - Cardamom Flavour 500 gm (Pet Jar)",
    off:"5% OFF",
    dname:"Mkt: British Biologicals",
     tag:"Best price*",
    price:"Rs. 558.60",
    pricrMrp:"",
    mrp:""
 },

];

all_Product.forEach(function (pro){

var all=document.createElement("div");

var productImage=document.createElement("img")
productImage.setAttribute("src",pro.image);

var productName=document.createElement("h4");
productName.innerText=pro.pname;

var productDname=document.createElement("p");
productDname.innerText=pro.dname;

var productTag=document.createElement("p");
productTag.innerText=pro.tag;

var productPrice=document.createElement("p");
productPrice.innerText=pro.price;

var prodMrp=document.createElement("p");
prodMrp.innerText=pro.pricrMrp;

var productMrp=document.createElement("strike");
productMrp.innerText=pro.mrp;

var off=document.createElement("h5")
off.innerText=pro.off

var add=document.createElement("button")
add.innerText="ADD TO CART"


// console.log(productImage,productName,productDname,productTag,productPrice,prodMrp,productMrp,add ,off);s
all.append(productImage,productName,productDname,productTag,productPrice,prodMrp,productMrp,add ,off)
document.querySelector(".product").append(all);

});

/* <-----------------limited deal-----------------> */
var all2_Product=[
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/1004103/maxi_zoom_car_junior_toothbrush_buy_1_get_1_free_1s_0_0.jpg",
    pname:"Maxi Zoom Car Junior Toothbrush (Buy 1 Get 1 Free)",
    off:"50% OFF",
    dname:"Mkt: V1 Enterprises",
     tag:"Best price*",
    price:"Rs. 75.00",
    pricrMrp:"MRP",
    mrp:"Rs. 150.00",
 },
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/927520/prolixr_daily_essentials_bundle_0_0.jpg",
    pname:"Prolixr Daily Essential Bundle",
    off:"20% OFF",
    dname:"Mkt: Maxinique Solution Pvt Ltd",
     tag:"Best price*",
    price:"Rs. 1,837.60",
    pricrMrp:"MRP",
    mrp:"Rs. 2,297.00",
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/323943/abzorb_dusting_powder_100gm_0_1.jpg",
    pname:"Accu-Chek Instant Test Strips 50's",
    off:"15% OFF",
    dname:"Mkt: Roche Diabetes Care India",
     tag:"Best price*",
    price:"Rs. 828.75",
    pricrMrp:"MRP",
    mrp:"Rs. 975.00",
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/38061/b_protin_nutritional_powder_supplement_chocolate_500_gm_0.jpg",
    pname:"B-Protin Nutritional Powder Supplement - Chocolate 500 gm",
    off:"12% OFF",
    dname:"Mkt: British Biologicals",
     tag:"Best price*",
    price:"Rs. 462.00",
    pricrMrp:"MRP",
    mrp:"Rs. 525.00",
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/853021/ducray_anaphase_anti_hair_loss_complement_shampoo_100_ml_0_3.jpg",
    pname:"Ducray Anaphase+ Anti-Hair Loss Complement Shampoo 100 ml",
    off:"18% OFF",
    dname:"Mkt: Abbott Healthcare Pvt Ltd.",
     tag:"Best price*",
    price:"Rs.647.80",
    pricrMrp:"MRP",
    mrp:"Rs. 790.00",
 },
];


all2_Product.forEach(function (pro){

var all2=document.createElement("div");

var productImage=document.createElement("img")
productImage.setAttribute("src",pro.image);

var productName=document.createElement("h4");
productName.innerText=pro.pname;

var productDname=document.createElement("p");
productDname.innerText=pro.dname;

var productTag=document.createElement("p");
productTag.innerText=pro.tag;

var productPrice=document.createElement("p");
productPrice.innerText=pro.price;

var proMrp=document.createElement("p");
proMrp.innerText=pro.pricrMrp;

var productMrp=document.createElement("strike");
productMrp.innerText=pro.mrp;

var off=document.createElement("h5")
off.innerText=pro.off

var add=document.createElement("button")
add.innerText="ADD TO CART"

// console.log(productImage,productName,productDname,productPrice,productMrp,add);
all2.append(productImage,productName,productDname,productTag,productPrice,proMrp,productMrp,add ,off)
document.querySelector(".product1").append(all2);

});

/* <-----------------lCovid Essentials-----------------> */
var all3_Product=[
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/947142/patanjali_divya_swasari_coronil_kit_0_0.jpg",
    pname:"Patanjali Divya Swasari Coronil Kit",
    off:"",
    dname:"Mkt: Patanjali Ayurved Ltd",
    tag:"Best price*",
    price:"Rs. 545.00",
    pricrMrp:"",
    mrp:"",
 },
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/915649/accusure_pulse_oximeter_0_0.jpg",
    pname:"AccuSure Pulse Oximeter",
    off:"55% OFF",
    dname:"Mkt: Microgene Diagnostic Systems",
    tag:"Best price*",
    price:"Rs. 1,799.55",
    pricrMrp:"MRP",
    mrp:"Rs. 3,999.00",
 },
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/835057/dettol_antiseptic_liquid_550_ml_0.jpg",
    pname:"Dettol Antiseptic Liquid 550 ml",
    off:"",
    dname:"Mkt: Reckitt Benckiser India Ltd",
    tag:"Best price*",
    price:"194.60",
    pricrMrp:"",
    mrp:"",
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/948692/oxy5_refillable_portable_oxygen_can_6_litre_0_1.jpg",
    pname:"Oxy5 Refillable Portable Oxygen Can 6 Litre",
    off:"3.5% OFF",
    dname:"Mkt: Handylife",
    tag:"Best price*",
    price:"Rs. 562.25",
    pricrMrp:"MRP",
    mrp:"Rs. 650.00",
 },
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/839437/fast_up_charge_natural_vitamin_c_tablets_orange_flavour_20_s_0.jpg",
    pname:"Fast&Up Charge Natural Vitamin C & Zinc Tablets - Orange Flavour 20's",
    off:"23% OFF",
    dname:"Mkt: Aeronutrix Sports Products",
    tag:"Best price*",
    price:"Rs. 300.30",
    pricrMrp:"MRP",
    mrp:"Rs. 390.00",
 },
];


all3_Product.forEach(function (pro){

var all3=document.createElement("div");

var productImage=document.createElement("img")
productImage.setAttribute("src",pro.image);

var productName=document.createElement("h4");
productName.innerText=pro.pname;

var productDname=document.createElement("p");
productDname.innerText=pro.dname;

var productTag=document.createElement("p");
productTag.innerText=pro.tag;

var productPrice=document.createElement("p");
productPrice.innerText=pro.price;

var proMrp=document.createElement("p");
proMrp.innerText=pro.pricrMrp;

var productMrp=document.createElement("strike");
productMrp.innerText=pro.mrp;

var off=document.createElement("h5")
off.innerText=pro.off

var add=document.createElement("button")
add.innerText="ADD TO CART"

// console.log(productImage,productName,productDname,productPrice,productMrp,add);
all3.append(productImage,productName,productDname,productTag,productPrice,proMrp,productMrp,add ,off)
document.querySelector(".product2").append(all3);

});

/* <-----------------Best Seller on Netmeds-----------------> */
var all4_Product=[
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/15580/accu_chek_active_test_strips_50s_0_1.jpg",
    pname:"Accu-Chek Active Test Strips 50's",
    off:"14% OFF",
    dname:"Mkt: Roche Diabetes Care India",
     tag:"Best price*",
    price:"Rs. 838.50",
     pricrMrp:"MRP",
    mrp:"Rs. 975.00"
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/354458/accu_chek_active_test_strip_100_s_0.jpg",
    pname:"Accu-Chek Active Test Strip 100's",
    off:"8% OFF",
    dname:"Mkt: Mylab Discovery Solutions ",
     tag:"Best price*",
    price:"Rs. 1,587.00",
     pricrMrp:"MRP",
    mrp:"Rs. 1725.00"
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/835774/accu_chek_instant_test_strips_50_s_0.jpg",
    pname:"Accu-Chek Instant Test Strips 50's",
    off:"50% OFF",
    dname:"Mkt: Beurer India Pvt. Ltd.",
     tag:"Best price*",
    price:"Rs. 828.75",
     pricrMrp:"MRP",
    mrp:"Rs. 975.00"
 },
 {
    image:"	https://www.netmeds.com/images/product-v1/150x150/950142/mylab_coviself_covid_19_rapid_antigen_self_test_kit_0_1.jpg",
    pname:"Mylab Coviself Covid-19 Rapid Antigen Self Test Kit",
    off:"50% OFF",
    dname:"Mkt: Mylab Discovery Solutions",
     tag:"Best price*",
    price:"Rs. 200.00",
     pricrMrp:"MRP",
    mrp:"Rs. 150.00"
 },
 {
    image:"https://www.netmeds.com/images/product-v1/150x150/383204/onetouch_select_test_strip_50s_0_4.jpg",
    pname:"Onetouch Select Test Strip 50's",
    off:"50% OFF",
    dname:"Mkt: Lifescan Medical Device India",
     tag:"Best price*",
    price:"Rs. 1,145.00",
     pricrMrp:"",
    mrp:""
 },
];

all4_Product.forEach(function (pro){

var all4=document.createElement("div");

var productImage=document.createElement("img")
productImage.setAttribute("src",pro.image);

var productName=document.createElement("h4");
productName.innerText=pro.pname;

var productDname=document.createElement("p");
productDname.innerText=pro.dname;

var productTag=document.createElement("p");
productTag.innerText=pro.tag;

var productPrice=document.createElement("p");
productPrice.innerText=pro.price;

var proMrp=document.createElement("p");
proMrp.innerText=pro.pricrMrp;

var productMrp=document.createElement("strike");
productMrp.innerText=pro.mrp;

var off=document.createElement("h5")
off.innerText=pro.off

var add=document.createElement("button")
add.innerText="ADD TO CART"

// console.log(productImage,productName,productDname,productPrice,productMrp,add);
all4.append(productImage,productName,productDname,productTag,productPrice,proMrp,productMrp,add ,off)
document.querySelector(".product3").append(all4);

});


var popularPro2=[
    {
        poproImage:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/diabetic-care.jpg?v=1",
        poproName:"Covid Essentials",
    },
    {
        poproImage:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/de-addiction.jpg?v=1",
        poproName:"De-Addiction",
    },
    {
        poproImage:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1",
        poproName:"Lung Care",
    },
    {
        poproImage:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1",
        poproName:"Weight Care",
    },
    {
        poproImage:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1",
        poproName:"Women's Care",
    },
];

popularPro2.forEach(function (popro){

var box=document.createElement("div")

var proImage=document.createElement("img")
proImage.setAttribute("src",popro.poproImage)

var proName=document.createElement("p")
proName.innerText=popro.poproName

// console.log(proImage,proName);
box.append(proImage,proName);
document.querySelector(".popular_Product2").append(box)
});