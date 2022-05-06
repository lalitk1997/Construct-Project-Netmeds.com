var coupens = [
    {
        img : "https://www.netmeds.com/images/cms/offers/1651498329_Mobile_home-full100-kareena.jpg",
        coupen : "FULL 100"  ,
        txt : "From 26th March to 31st May 2022, get Flat 25% OFF* (max discount: Rs 5000) on Your First Pre-Paid/COD Medicine order, AND upon delivery, a 100% NMS SuperCash* (max cashback: Rs. 3000) on ‘pre-paid’ medicine order. *No min. order required. *T&C apply.",
        date : "VALID TILL 31 MAY 2022" 
    },
    {
        img : "https://www.netmeds.com/images/cms/offers/1651337752_Mobile_Home_Banner12.jpg",
        coupen : "DUO 100"  ,
        txt : "From 26th March to 31st May 2022, get Flat 20% OFF* (max. discount: Rs. 5000) on PrePaid/COD medicine orders & 100% NMS SuperCash* (max. cashback: Rs. 3000) on ‘PrePaid’ medicine orders. *Minimum order (along with ANY other products) required: Rs 999. *T&C",
        date : "VALID TILL 31 MAY 2022" 
    },
    {
        img : "https://www.netmeds.com/images/cms/offers/1651333244_Mobile_Pushdsfgsdgdsfgdfgfdbbbb.jpg",
        coupen : "BOWL 100",
        txt : "From 26th March to 31st May 2022, get Flat 15% OFF* (max. discount: Rs. 5000) on Your Pre-Paid/COD Medicine order, AND upon order delivery, a 100% NMS SuperCash* (max. cashback: Rs. 3000) on ‘pre-paid’ medicine order. *No minimum order required.*T&C",
        date : "VALID TILL 31 MAY 2022"
    },
    {
        img : "https://www.netmeds.com/images/cms/offers/1648216862_ipl_free_shipping.jpg",
        coupen : "MED 100",
        txt : "Get FREE Shipping* on pre-paid/COD orders of ANY products. get Flat 15% OFF* (max. discount: Rs. 5000) on Your Pre-Paid/COD Medicine order .No minimum order is required to get FREE Shipping. Offer period: 01st to 31st May 2022. *No minimum order required. . *T&C apply.",
        date : "VALID TILL 31 MAY 2022"
    },
    {
        img : "https://www.netmeds.com/images/cms/offers/1651336964_mobile_home_banner.jpg",
        coupen : "MOB 100",
        txt : "Get “Assured MobiKwik Cashback” between max. Rs. 600 and min. Rs. 20 on a minimum purchase of ANY products worth Rs. 750, when you pay via the MobiKwik wallet on Netmeds website or app. Offer validity: 01st to 31st May 2022. *T&C apply.",
        date : "VALID TILL 31 MAY 2022"
    },
    {
        img : "https://www.netmeds.com/images/cms/offers/1651337387_Mobile_Home_Bannerdfg.jpg",
        coupen : "SIM 40",
        txt : "From 1st t o 31st May 2022, get up to Rs. 500 Simpl Cashback* (8%) on your payment via Simpl towards ANY purchases* worth ANY value on Netmeds.com/app. Simpl cashback will be credited to the customer's  Simpl pay later bill. *T&C",
        date : "VALID TILL 31 MAY 2022"
    }
]
var append_coupen_data = document.querySelector("#selection-coupen");
display(coupens);
function display(arrObj){
    arrObj.forEach(function (ele){
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src", ele.img);
        var p1Tag = document.createElement("p");
        p1Tag.innerText = ele.coupen;
        var p2Tag = document.createElement("p");
        p2Tag.innerText = ele.txt;
        var p3Tag = document.createElement("p");
        p3Tag.innerText = ele.date;
        var card = document.createElement("div");
        card.setAttribute("class", "card")
        card.append(imgTag, p1Tag, p2Tag, p3Tag);
        console.log(card);
        append_coupen_data.append(card);
    });
}