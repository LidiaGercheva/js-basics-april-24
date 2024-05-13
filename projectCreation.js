function projectCreation(input) {
    let architectName = input[0];
    let allProectCount = Number(input[1]);

    let totalProectsTime = allProectCount * 3;

    console.log('The architect ' + architectName + ' will need ' + totalProectsTime + ' hours to complete ' + allProectCount + ' project/s.');
}
projectCreation(["George " , "4 "]);
