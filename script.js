const productsDiv = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded shadow";

      card.innerHTML = `
        <img src="${product.image}" class="h-40 mx-auto mb-4">
        <h3 class="font-semibold text-sm">${product.title}</h3>
        <p class="text-blue-600 font-bold mt-2">$${product.price}</p>
      `;

      productsDiv.appendChild(card);
    });
  })
  .catch(error => {
    productsDiv.innerHTML = "Failed to load products.";
    console.error(error);
  });
