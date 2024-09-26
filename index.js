const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35,
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35,
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35,
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35,
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35,
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35,
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35,
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35,
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35,
    },
  ],
  cart: [],
};

// HTML element
const storeItemListUL = document.querySelector(".store--item-list")
const cartItemListUL = document.querySelector(".cart--item-list")
const totalCostSpan = document.querySelector(".total-number")

// Add to cart
function addToCart(itemId) {
  let item = state.items.find((i) => i.id === itemId)
  let cartItem = state.cart.find((ci) => ci.id === itemId)

  // Increase quantity if item already exist in the cart, otherwise add new cartItem
  if (cartItem) {
    cartItem.quantity = cartItem.quantity + 1
  }
  else if (cartItem === undefined) {
    cartItem = {}
    cartItem.id = item.id
    cartItem.name = item.name
    cartItem.price = item.price
    cartItem.quantity = 1
    state.cart.push(cartItem);
  }
  // Check if the item exists in the store inventory  
  else if (!item) {
    console.log("Not a valid item")
    return false
  }
  renderCartItems();
}

// Increase quantity on item in cart
function increaseQuantity(cartItem) {
  cartItem.quantity = cartItem.quantity + 1
  renderCartItems();
}

// Decrease quantity on item in cart
function decreaseQuantity(cartItem) {

  cartItem.quantity = cartItem.quantity - 1
  if (cartItem.quantity === 0) {
    state.cart.splice(state.cart.indexOf(cartItem), 1)
  }
  renderCartItems();
}

function renderStoreItems() {
  // Reset items
  storeItemListUL.innerHTML = "";

  state.items.forEach((item) => {
    let element = document.createElement("li");
    const htmlString = `
          <div class="store--item-icon">
            <img src="assets/icons/${item.id}.svg" alt="${item.name}" />
          </div>
      `;
    element.innerHTML = htmlString;

    // <button ${onclick=addToCart()}>Add to cart</button>
    const button = document.createElement("button");
    button.innerText = "Add to cart";
    button.addEventListener("click", () => {
      addToCart(item.id);
    });
    element.append(button);

    storeItemListUL.append(element);
  });
}

function renderCartItems() {
  // Reset items
  cartItemListUL.innerHTML = "";

  // Total cost
  let total_cost = 0

  state.cart.forEach((item) => {

    let element = document.createElement("li");
    const htmlString = `
        <img
          class="cart--item-icon"
          src="assets/icons/${item.id}.svg"
          alt="${item.name}"
        />
        <p>${item.name}</p>
    `;
    element.innerHTML = htmlString;
    
    //  <button class="quantity-btn remove-btn center">-</button>
    const decreaseButton = document.createElement("button")
    decreaseButton.classList.add("quantity-btn", "remove-btn", "center")
    decreaseButton.innerText = "-"
    decreaseButton.addEventListener("click", () => {
      decreaseQuantity(item);
    })
    element.append(decreaseButton)

    // <span class="quantity-text center">1</span>
    const spanElement = document.createElement("span")
    spanElement.classList.add("quantity-text", "center")
    spanElement.innerText = item.quantity
    element.append(spanElement)

    // <button class="quantity-btn add-btn center">+</button>
    const increaseButton = document.createElement("button")
    increaseButton.classList.add("quantity-btn", "add-btn", "center")
    increaseButton.innerText = "+"
    increaseButton.addEventListener("click", () => {
      increaseQuantity(item);
    })
    element.append(increaseButton)
    cartItemListUL.append(element)

    // Add item price to total cost
    total_cost += item.price * item.quantity
    totalCostSpan.innerHTML = "£" + total_cost.toFixed(2)
  });
}

// Initial render
function main() {
  renderStoreItems();
}

main();
