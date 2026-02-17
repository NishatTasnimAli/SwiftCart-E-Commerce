
/*--- Trading Product Fetch ---*/

const loadTrendingProducts = () => {
  const url = "https://fakestoreapi.com/products";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTrendingProducts(data));
};

const displayTrendingProducts = (products) => {
  const container = document.getElementById("home-trending-grid");
  container.innerHTML = "";

  const topRated = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);

  topRated.forEach((product) => {
    const card = document.createElement("div");

    card.classList.add(
      "border",
      "border-purple-200",
      "rounded-lg",
      "overflow-hidden",
      "flex",
      "flex-col",
      "bg-white",
      "shadow-sm"
    );

    card.innerHTML = `
      <div class="bg-gray-100 py-6 px-10">
        <img class="mx-auto h-56 object-contain" src="${product.image}" />
      </div>

      <div class="space-y-4 p-5">
        <div class="flex justify-between text-sm">
          <span class="bg-indigo-100 px-3 py-1 rounded-full text-indigo-600">
            ${product.category}
          </span>
          <span>
            <i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i> ${product.rating.rate} (${product.rating.count})
          </span>
        </div>

        <h3 class="truncate text-lg font-bold">
          ${product.title}
        </h3>

        <h4 class="text-lg font-bold text-[#553FF6]">
          $${product.price}
        </h4>

        <div class="flex gap-3 mt-4">
          <button 
            onclick="openProductModal(${product.id})"
            class="flex-1 bg-[#e5e0ff] hover:bg-[#D4DDFA] py-2 rounded text-sm">
            <i class="fa-regular fa-eye"></i>  View Details
          </button>

          <button class="flex-1 bg-[#553FF6] text-white py-2 rounded text-sm">
            <i class="fa-solid fa-cart-arrow-down"></i> Add To Cart
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
};

/*--- Product detail modal ---*/

const openProductModal = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductModal(data));
};

const displayProductModal = (product) => {
  const modal = document.getElementById("single-product-modal");

  modal.innerHTML = `
    <div class="modal-box max-w-3xl">
      <form method="dialog">
        <button 
          class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>

      <div class="grid md:grid-cols-2 gap-8 mt-4">
        <img class="h-72 object-contain mx-auto"
             src="${product.image}" />

        <div class="space-y-4">
          <span class="bg-[#e5e0ff] px-3 py-1 rounded-full text-indigo-600 text-sm">
            ${product.category}
          </span>

          <h2 class="text-xl font-bold">
            ${product.title}
          </h2>

          <p class="text-gray-600 text-sm">
            ${product.description}
          </p>

          <p class="text-lg font-bold text-indigo-600">
            $${product.price}
          </p>

          <p class="text-sm">
           <i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i> Rating: ${product.rating.rate} (${product.rating.count})
          </p>

          <button class="w-full bg-[#553FF6] text-white py-1 rounded">
            <i class="fa-solid fa-cart-arrow-down"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;

  modal.showModal();
};


loadTrendingProducts();

