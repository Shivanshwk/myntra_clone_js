let bagItems;
onRender();

function onRender() {
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayUI();
displayBagIconCount();
}

function addToBag(itemId) {
 bagItems.push(itemId);
 localStorage.setItem('bagItems', JSON.stringify(bagItems)); // stringyfying the array to store in local storage, we can only store string not array or object in local storage
 displayBagIconCount();

}

function displayBagIconCount() {
  let bagItemCount = document.querySelector('.bag-item-count');
  if (!bagItemCount) {
    return;
  }
  if(bagItems.length > 0) {
    bagItemCount.style.visibility = 'visible';
    bagItemCount.innerText = bagItems.length;
  } else {
    bagItemCount.style.visibility = 'hidden';
  }
  
}

function displayUI() {
 let itemssContainer = document.querySelector('.itemss-container');
 if (!itemssContainer) {
  return;
 }

// let item = {
//   item_image: 'images/1.jpg', 
//   rating: {
//     stars: 4.5,
//     reviews: 1400
//   },
//   company_name: 'Carton London',
//   item_name: 'Rhodium-Plated CZ Floral Studs',
//   current_price: '₹606',
//   original_price: '₹1045',
//   discount: '(42% off)'
// }

let innerHTML = '';
items.forEach(item => {

  innerHTML += `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
     ${item.rating.stars}★|${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price">${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% off)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
})

 
itemssContainer.innerHTML = innerHTML
}
