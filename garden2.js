function grass(input) {
     
    let priceM = 7.61;
    let discountM = 18 / 100;

    let allPriceM = (input [0] * priceM);
    let allDiscountM = (allPriceM * discountM);

    let finalPriceM = (allPriceM - allDiscountM);

    console.log(allPriceM);
    console.log(allDiscountM);

    console.log("The final price is: " + allPriceM + " lv.");
    console.log ("The discount is: " + allDiscountM + " lv.");

}
grass(["150"]);
