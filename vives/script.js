let total = 0;
let products = [];

function updateCustomerInfo() {
  var customerName = document.getElementById('customer-name').value;
  var customerPhone = document.getElementById('customer-phone').value;
  document.getElementById('ticket-customer').innerHTML = `<h3> ${customerName}  ${customerPhone}</h3>`;
}

function productTypeChange() {
  var productType = document.getElementById('product-type').value;
  if (productType === 'generico') {
    document.getElementById('product-details').innerHTML = `
        <textarea id="product-description" placeholder="Escribe aquí la descripción del producto"></textarea>
        <input type="text" id="product-price" placeholder="Precio del producto (€)">
        <button type="submit" onclick="addProduct('generico', event)">Añadir</button>
        `;
  } else if (productType === 'pastel') {
    document.getElementById('product-details').innerHTML = `
        <input type="text" id="product-name" placeholder="Tipo de pastel">
        <input type="text" id="product-weight" placeholder="Peso del pastel (g)">
        <input type="text" id="product-message" placeholder="Título del pastel">
        <input type="text" id="product-price" placeholder="Precio del pastel (€)">
        <button type="submit" onclick="addProduct('pastel', event)">Añadir</button>
        `;
  } else {
    document.getElementById('product-details').innerHTML = '';
  }
}

function addProduct(type, e) {
  e.preventDefault();
  let productDescription, productName, productWeight, productMessage, productPrice;
  if (type === 'generico') {
    productDescription = document.getElementById('product-description').value;
    productPrice = parseFloat(document.getElementById('product-price').value);
    products.push({
      description: productDescription,
      price: productPrice
    });
  } else if (type === 'pastel') {
    productName = document.getElementById('product-name').value;
    productWeight = document.getElementById('product-weight').value;
    productMessage = document.getElementById('product-message').value;
    productPrice = parseFloat(document.getElementById('product-price').value);
    products.push({
      name: productName,
      weight: productWeight,
      message: productMessage,
      price: productPrice
    });
  }
  updateTicket();
}

function updateTicket() {
  let ticketItems = document.getElementById('ticket-items');
  ticketItems.innerHTML = '<h3>Productos</h3><hr>';
  total = 0;
  products.forEach((product, index) => {
    if (product.description) {
      ticketItems.innerHTML += `<p>GENÉRICO - ${product.description}: ${product.price}€ <span onclick="removeProduct(${index})" class="remove-product">X</span></p>`;
    } else if (product.name) {
      ticketItems.innerHTML += `<p>PASTEL - ${product.name} - ${product.weight}g - ${product.message}: ${product.price}€ <span onclick="removeProduct(${index})" class="remove-product">X</span></p>`;
    }
    total += product.price;
  });
  ticketItems.innerHTML += `<hr><p><strong>Total: ${total.toFixed(2)}€</strong></p>`;
}


function removeProduct(index) {
  products.splice(index, 1);
  updateTicket();
}

document.getElementById('print-btn').addEventListener('click', function() {
  window.print();
});
