 //  --------------->All product box----------------->
 var all_Product=[
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/323943/abzorb_dusting_powder_100gm_0_1.jpg",
       pname:"Abzorb Dusting Powder 100gm",
       dname:"Mkt: Sun Pharmaceutical",
       tag:"Best price*",
       price:"Rs. 114.75",
       pricrMrp:"MRP",
       mrp:"135.00",
    },
   {
       image:"	https://www.netmeds.com/images/product-v1/150x150/15114/dettol_antiseptic_liquid_60_ml_0_1.jpg",
       pname:"Mkt: Reckitt Benckiser ",
       dname:"Mkt: L'Oreal India Pvt, Ltd",
        tag:"Best price*",
       price:"Rs. 33.27",
       pricrMrp:"",
       mrp:"",
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/110947/tetmosol_medicated_soap_100_gm_0_1.jpg",
       pname:"Tetmosol Medicated Soap 100 gm",
       dname:"Mkt: Piramal Healthcare Ltd",
        tag:"Best price*",
       price:"Rs. 81.40",
       pricrMrp:"MRP",
       mrp:"88.00",
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/835057/dettol_antiseptic_liquid_550_ml_0.jpg",
       pname:"Dettol Antiseptic Liquid 550 ml",
       dname:"Mkt: Reckitt Benckiser India Ltd",
        tag:"Best price*",
       price:"Rs. 194.60",
       pricrMrp:"",
       mrp:"",
    },
    {
       image:"https://www.netmeds.com/images/product-v1/150x150/363064/i_know_ovulation_strip_0_1.jpg",
       pname:"I Know Ovulation Strip",
       dname:"Mkt: Reckitt Benckiser India Ltd",
        tag:"Best price*",
       price:"Rs. 494.10",
       pricrMrp:"MRP",
       mrp:"549.00",
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/102099/dettol_antiseptic_liquid_1_ltr_0_1.jpg",
       pname:"Dettol Antiseptic Liquid 1 ltr",
       dname:"Mkt: Patanjali Ayurved Ltd",
       tag:"Best price*",
       price:" Rs. 331.41",
       pricrMrp:"",
       mrp:"",
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/413967/patanjali_dant_kanti_tooth_paste_natural_200_gm_0.jpg",
       pname:"Patanjali Dant Kanti Tooth Paste - Natural",
       dname:"Mkt: Glenmark Pharmaceuticals Ltd",
        tag:"Best price*",
       price:"Rs. 95.00",
       pricrMrp:"",
       mrp:"",
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/414294/d_acne_soft_face_wash_100gm_0.jpg",
       pname:"D Acne Soft Face Wash 100gm",
       dname:"Mkt: Reckitt Benckiser India Ltd",
        tag:"Best price*",
       price:" Rs. 399.00",
       pricrMrp:"",
       mrp:"",
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

   var proMrp=document.createElement("p");
   proMrp.innerText=pro.pricrMrp;

   var productMrp=document.createElement("strike");
   productMrp.innerText=pro.mrp;

   var add=document.createElement("button")
   add.innerText="ADD TO CART"

   console.log(productImage,productName,productDname,productTag,productPrice,proMrp,productMrp,add);
   all.append(productImage,productName,productDname,productTag,productPrice,proMrp,productMrp,add)
   document.querySelector(".product").append(all);

});

//  --------------->All product box 2----------------->
var all2_Product=[
    {
     image:"https://www.netmeds.com/images/product-v1/150x150/816329/v_wash_plus_expert_hygiene_wash_20_ml_0.jpg",
       pname:"V Wash Plus Expert Hygiene",
       dname:"Mkt: Reckitt Benckiser India Ltd.",
       tag:"Best price*",
       price:"Rs. 40.50",
       pricrMrp:"MRP",
       mrp:" Rs. 45.00"
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/410284/dettol_soap_original_125_gm_0_6.jpg",
       pname:"Dettol Soap - Original 125 gm",
       dname:"Mkt: Karnataka Soaps & Detergents",
       tag:"Best price*",
       price:"Rs. 58.00",
       pricrMrp:"",
       mrp:""
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/15132/dettol_soap_original_75_gm_0_7.jpg",
       pname:"Dettol Soap - Original 75 gm",
       dname:"Mkt: Reckitt Benckiser India Ltd",
       tag:"Best price*",
       price:"Rs. 38.00",
       pricrMrp:"",
       mrp:""
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/105503/mysore_sandal_soap_75_gm_0.jpg",
       pname:"Mysore Sandal Soap 75 gm",
       dname:"Mkt: Sun Pharmaceutical Industries",
       tag:"Best price*",
       price:"Rs. 40.00",
       pricrMrp:"",
       mrp:""
    },
    {
       image:"https://www.netmeds.com/images/product-v1/150x150/15131/dettol_soap_intense_cool_75_gm_0_7.jpg",
       pname:"Dettol Soap - Intense Cool 75 gm",
       dname:"Mkt: Reckitt Benckiser India Ltd",
       tag:"Best price*",
       price:"Rs. 38.00",
       pricrMrp:"",
       mrp:""
    },
    {
       image:"	https://www.netmeds.com/images/product-v1/150x150/827720/abzorb_dusting_powder_50gm_0_1.jpg",
       pname:"Abzorb Dusting Powder 50gm",
       dname:"Mkt: Hindustan Unilever Ltd",
       tag:"Best price*",
       price:"Rs. 68.00",
       pricrMrp:"MRP",
       mrp:" Rs. 80.00"
    },
    {
       image:"https://www.netmeds.com/images/product-v1/150x150/886988/dettol_antiseptic_liquid_disinfectant_250_ml_0_1.jpg",
       pname:"Dettol Antiseptic Liquid Disinfectant 250 ml",
       dname:"Mkt: Bausch & Lomb India Private",
       tag:"Best price*",
       price:"Rs. 116.16",
       pricrMrp:"",
       mrp:""
    },
    {
       image:"https://www.netmeds.com/images/product-v1/150x150/100411/lifebuoy_total_10_germ_protection_soap_bar_125_gm_0.jpg",
       pname:"Lifebuoy Total 10 Germ Protection Soap Bar 125 gm",
       dname:"Mkt: Karnataka Soaps & Detergents",
       tag:"Best price*",
       price:" Rs. 33.00",
       pricrMrp:"",
       mrp:""
    }
]

all2_Product.forEach(function (pro2){

   var all2=document.createElement("div");

   var productImage=document.createElement("img")
   productImage.setAttribute("src",pro2.image);

   var productName=document.createElement("h4");
   productName.innerText=pro2.pname;

   var productDname=document.createElement("p");
   productDname.innerText=pro2.dname;

   var productTag=document.createElement("p");
   productTag.innerText=pro2.tag;
   
   var productPrice=document.createElement("p");
   productPrice.innerText=pro2.price;

   var proMrp=document.createElement("p");
   proMrp.innerText=pro2.pricrMrp;

   var productMrp=document.createElement("strike");
   productMrp.innerText=pro2.mrp;

   var add=document.createElement("button")
   add.innerText="ADD TO CART"

   // console.log(productImage,productName,productDname,productPrice,productMrp,add);
   all2.append(productImage,productName,productDname,productTag,productPrice,proMrp,productMrp,add)
   document.querySelector(".product2").append(all2);

});
