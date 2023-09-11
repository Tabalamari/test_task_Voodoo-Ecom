async function fetchData() {
    try {
        const data = await fetch("https://voodoo-sandbox.myshopify.com/products.json?limit=24");
        console.log(data)
        const result = await data.json();
        return result;
    }
    catch (error) {
        console.error(error)
    }
}

async function showProducts() {
    const data = await fetchData();
    const productContainer = document.getElementById("productContainer");
    for (let i = 0; i < data.products.length; i++) {
        const product = data.products[i];
        console.log(product)
        const divNewProduct = getProductElement(product);
        productContainer.appendChild(divNewProduct);
    }
}

function getProductElement(product) {


    const divNewProduct = document.createElement('div');
    divNewProduct.classList.add("w-full", "text-center")


    const divUsed = document.createElement("div");
    divNewProduct.appendChild(divUsed);
    divUsed.classList.add("border-2", "border-black", "rounded");


    const imgProduct = document.createElement("img");
    console.log(product)
    if (product.images.length > 0) {
        imgProduct.src = product.images[0].src
    }
    divUsed.appendChild(imgProduct);
    imgProduct.classList.add("relative");


    const pUsed = document.createElement("div");
    divUsed.appendChild(pUsed);
    pUsed.classList.add("bg-black", "text-white", "w-10", "h-6", "absolute", "text-xs", "rounded", "mt-2", "ml-2");
    pUsed.innerText = "USED";


    const divDetails = document.createElement("div");
    divNewProduct.appendChild(divDetails);
    divDetails.classList.add("mt-2", "mb-2");

    const divNameAndCondition = document.createElement("div");
    divDetails.appendChild(divNameAndCondition);
    divNameAndCondition.classList.add("flex", "justify-between");

    const pName = document.createElement("p");
    divNameAndCondition.appendChild(pName);
    pName.classList.add("font-bold", "w-12", "overflow-hidden", "whitespace-nowrap", "text-ellipsis");
    pName.innerText = product.title;

    const pCondition = document.createElement("p");
    divNameAndCondition.appendChild(pCondition);
    pCondition.innerText = "Condition";

    const divProductNameAndCondition = document.createElement("div");
    divDetails.appendChild(divProductNameAndCondition);
    divProductNameAndCondition.classList.add("flex", "justify-between");

    const pProductName = document.createElement("p");
    divProductNameAndCondition.appendChild(pProductName);
    pProductName.classList.add("font-bold");
    pProductName.innerText = "000 KR.";

    const pProductCondition = document.createElement("p");
    divProductNameAndCondition.appendChild(pProductCondition);
    pProductCondition.innerText = "Slightly used"



    const buttonAddToCard = document.createElement("button");
    divNewProduct.appendChild(buttonAddToCard);
    buttonAddToCard.classList.add("bg-black", "text-white", "h-10", "rounded", "font-sans", "text-sm", "mb-10", "w-full");
    buttonAddToCard.innerText = "ADD TO CARD";

    return divNewProduct;
}

showProducts();