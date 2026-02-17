/*--- Products page ---*/


const loadProductsCategoryBtn = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then(res => res.json())
    .then(data => displayProductsCategoryBtn(data));
};

const displayProductsCategoryBtn = (btns) => {
  const categoryBtnDiv = document.getElementById("products-category-btns");

  btns.forEach(btn => {
    const safeId = btn.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const button = document.createElement("button");
    button.id = `category-btn-${safeId}-products`;
    button.className = "btn btn-outline rounded-full category-btn";
    button.textContent = btn.toUpperCase();

    button.addEventListener("click", () => {
      showProductsCategory(btn);
    });

    categoryBtnDiv.appendChild(button);
  });
};



const loadProducts = () => {
  manageProductsSpinner(true);
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then(res => res.json())
    .then(data => displayProducts(data));
};

const displayProducts = (products) => {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("border", "border-purple-200", "rounded-lg", "overflow-hidden", "flex", "flex-col", "bg-white");

    card.innerHTML = `
      <div class="bg-gray-100 py-5 px-10">
        <img class="mx-auto h-64 object-contain" src="${product.image}" />
      </div>

      <div class="space-y-5 p-5">
        <div class="flex justify-between">
          <p class="bg-[#e5e0ff] p-2 px-3 rounded-full text-sm text-[#4f39f6]">
            ${product.category}
          </p>
          <span>
            <i class="fa-solid fa-star text-[#FFD43B]"></i>
            ${product.rating.rate} (${product.rating.count})
          </span>
        </div>

        <div>
          <p class="truncate text-lg font-bold">${product.title}</p>
          <h3 class="text-[#553FF6] text-lg font-bold">$${product.price}</h3>
        </div>

        <div class="flex justify-between gap-5 mt-3">
          <button onclick='showProductDetail(${product.id})' class="bg-[#EDF0FE] btn rounded-xl flex-1 py-2">
            Details
          </button>
          <button class="bg-[#553FF6] hover:bg-[#553FF6] btn text-white rounded-xl flex-1 py-2">
            Add To Cart
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  manageProductsSpinner(false);
};

const showProductDetail = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayProductsModal(data));
};

const displayProductsModal = (product) => {
  const modal = document.getElementById("products-single-modal");
  modal.innerHTML = `
    <div class="modal-box max-w-3xl">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <img class="h-64 object-contain mx-auto" src="${product.image}" />
        <div class="space-y-4">
          <span class="bg-indigo-100 px-3 py-1 rounded-full text-indigo-600 text-sm">${product.category}</span>
          <h2 class="text-xl font-bold">${product.title}</h2>
          <p class="text-gray-600 text-sm">${product.description}</p>
          <p class="text-lg font-bold text-[#553FF6]">$${product.price}</p>
          <p class="text-sm"> <i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i> Rating: ${product.rating.rate} (${product.rating.count})</p>
          <button class="w-full bg-[#553FF6] text-white py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  modal.showModal();
};

const showProductsCategory = (category) => {
  manageProductsSpinner(true);

  const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      removeActiveProductsBtn();

      // FIXED REGEX HERE
      const safeId = category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      const clickedBtn = document.getElementById(
        `category-btn-${safeId}-products`
      );

      if (clickedBtn) {
        clickedBtn.classList.add("active-btn");
      }

      displayProducts(data);
    });
};


const manageProductsSpinner = (status) => {
  const spinner = document.getElementById("products-spinner");
  const grid = document.getElementById("products-grid");
  if (status) {
    spinner.classList.remove("hidden");
    grid.classList.add("hidden");
  } else {
    spinner.classList.add("hidden");
    grid.classList.remove("hidden");
  }
};


const removeActiveProductsBtn = () => {
  const btns = document.querySelectorAll("#products-category-btns .category-btn");
  btns.forEach(btn => btn.classList.remove("active-btn"));
};


window.addEventListener("DOMContentLoaded", () => {
  const allBtn = document.getElementById("category-btn-all-products");
  allBtn.classList.add("active-btn");
  loadProducts();
  loadProductsCategoryBtn();
});

const toggleAllProductsButton = () => {
  const allBtn = document.getElementById("category-btn-all-products");
  removeActiveProductsBtn();
  allBtn.classList.add("active-btn");
  loadProducts();
};
