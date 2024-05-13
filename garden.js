function garden(input){

    let price = 7.61;
    let discount = 18 / 100;

    let allPrice = (input[0] * price);
    let allDiscount = (discount * allPrice);

     let finalPrice = (allPrice - allDiscount);

     console.log(finalPrice);
     console.log(allDiscount);

     console.log("The final price is: " + finalPrice + " lv.");
     console.log("The discount is: " + allDiscount + " lv.");
}
garden(["550"]);
