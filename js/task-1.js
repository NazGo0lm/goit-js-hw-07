const theUlData = document.querySelector("#categories");


const theLiData = document.querySelectorAll(".item")


console.log(theUlData);



console.log(`Number of Categories: ${theLiData.length}`);


theLiData.forEach(item => {
    const nameOfCategory = item.querySelector("h2").textContent;
    const elementsName = item.querySelectorAll("li").length;
    console.log(`Category: ${nameOfCategory}`);
    console.log(`Elements: ${elementsName}`);
})








//console.log("hi")