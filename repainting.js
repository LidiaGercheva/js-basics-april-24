function repainting(input) {
      let neededNylonCount = Number(input[0]);
      let neededPaintCount = Number(input[1]);
      let neededThinerCount = Number(input[2]);
      let workingHours = Number(input[3]);

      let moneyForRemont = 0;
      let bags = 0.40;

      let priceForPaint = (neededPaintCount + 1.1) * 14.50;
      let priceForNylon = (neededNylonCount + 2) * 1.50;
      let priceFotThiner = neededThinerCount * 5.0;

      let totalPriceForMaterial = priceForNylon + priceForPaint + priceFotThiner + bags;
      let priceForWorker = (totalPriceForMaterial * 0.30) * workingHours;


      let totalPriceForAll = totalPriceForMaterial + priceForWorker;
      console.log(priceForWorker);

}
repainting(["5" , "10" , "10" , "1"]);