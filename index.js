const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

// HTML element
const storeItemListUL = document.querySelector(".store--item-list")
const cartItemListUL = document.querySelector(".cart--item-list")

function renderStoreItems() {

    state.items.forEach((item) => {
      let element = document.createElement('li')
      const htmlString = `
          <div class="store--item-icon">
            <img src="assets/icons/${item.id}.svg" alt="${item.name}" />
          </div>
          <button>Add to cart</button>
      `
      element.innerHTML = htmlString
      
      storeItemListUL.append(element)
    })
}

function rendercartItems() {

  state.cart.forEach((item) => {
    let element = document.createElement('li')
    const htmlString = `
        <img
          class="cart--item-icon"
          src="assets/icons/${item.id}.svg"
          alt="${item.name}"
        />
        <p>${item.name}</p>
        <button class="quantity-btn remove-btn center">-</button>
        <span class="quantity-text center">1</span>
        <button class="quantity-btn add-btn center">+</button>
    `
    element.innerHTML = htmlString
    
    storeItemListUL.append(element)
  })
}

// Initial render
function main() {
  renderStoreItems()
}

main()