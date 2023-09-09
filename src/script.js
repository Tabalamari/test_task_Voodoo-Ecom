async function fetchData() {
    try {
        const data = await fetch("https://voodoo-sandbox.myshopify.com/products.json?limit=24");
        const result = await data.json();
        return result;
    }
    catch (error) {
        console.error(error)
    }
}

async function showProducts() {
    const data = await fetchData();
    const product = data.products[0];

    console.log(product)

    const productContainer = document.getElementById("productContainer");

    const divNewProduct = getProductElement(product);
    productContainer.appendChild(divNewProduct);
}

function getProductElement(product) {


    const divNewProduct = document.createElement('div');

    const divUsed = document.createElement("div");
    divNewProduct.appendChild(divUsed);
    divUsed.classList.add("w-72", "h-72", "border-2", "border-black")

    const imgProduct = document.createElement("img");
    imgProduct.src = product.images[0].src;
    divUsed.appendChild(imgProduct);

    const pUsed = document.createElement("p");
    divUsed.appendChild(pUsed);
    pUsed.classList.add("bg-black", "text-white", "w-12", "text-xs", "rounded", "mt-2", "ml-2", "p-2")
    pUsed.innerText = "USED1";


    const divDetails = document.createElement("div");
    divNewProduct.appendChild(divDetails);
    divDetails.classList.add("mt-2", "mb-2");

    const divNameAndCondition = document.createElement("div");
    divDetails.appendChild(divNameAndCondition);
    divNameAndCondition.classList.add("flex", "justify-between");

    const pName = document.createElement("p");
    divNameAndCondition.appendChild(pName);
    pName.classList.add("font-bold");
    pName.innerText = product.title;

    const pCondition = document.createElement("p");
    divNameAndCondition.appendChild(pCondition);
    pCondition.innerText = "Condition";

    const divProductNameAndCondition = document.createElement("div");
    divDetails.appendChild(divProductNameAndCondition);
    divProductNameAndCondition.classList.add("flex", "justify-between");

    const pProductName = document.createElement("p");
    divProductNameAndCondition.appendChild(pProductName);
    pProductName.classList.add("font-bold")
    pProductName.innerText = "000 KR.";

    const pProductCondition = document.createElement("p");
    divProductNameAndCondition.appendChild(pProductCondition);
    pProductCondition.innerText = "Slightly used"



    const buttonAddToCard = document.createElement("button");
    divNewProduct.appendChild(buttonAddToCard);
    buttonAddToCard.classList.add("bg-black", "text-white", "w-72", "h-10", "rounded", "font-sans", "text-sm", "mb-14")
    buttonAddToCard.innerText = "ADD TO CARD";

    return divNewProduct;
}

showProducts();