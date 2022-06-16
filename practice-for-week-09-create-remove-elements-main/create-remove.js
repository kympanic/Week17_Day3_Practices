/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */

        const urlElements = url.split('/');
        const breed = urlElements[4];


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */

        const newImg = document.createElement('img');
        newImg.setAttribute('src', url);

        /* Add the new dog card as a child to the ul in the .gallery element */

        const unorderList = document.querySelector('ul');
        const newLI = document.createElement('li');
        newLI.innerHTML = `<figure><img src="${url}"></img><figcaption>${breed}</figcaption></figure>`
        unorderList.appendChild(newLI);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */

    const selectedList = document.querySelector('li');

    /*-------------------- Remove the first dog card --------------------- */

    selectedList.remove();

});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */

    const list = [...document.querySelectorAll('li')];
    const lastList = list.pop();

    /*-------------------- Remove the last dog card ----------------------- */

    lastList.remove();

});