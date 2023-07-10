let products = [];

function updateEmployeeInfo() {
  var employeeName = document.getElementById('employee-name').value;
  // aquí no vamos a hacer nada con el nombre del empleado, pero lo dejamos por si acaso para el futuro
}

function updateCustomerInfo() {
  var customerName = document.getElementById('customer-name').value;
  var customerPhone = document.getElementById('customer-phone').value;
  var customerPickup = new Date(document.getElementById('customer-pickup').value);
  
  var pickupDay = customerPickup.getDate();
  var pickupMonth = customerPickup.getMonth() + 1; // Los meses en JavaScript van de 0 (enero) a 11 (diciembre)
  var pickupYear = customerPickup.getFullYear();
  var pickupHour = customerPickup.getHours();
  var pickupMinute = customerPickup.getMinutes();

  // Asegurarse de que los valores de día, mes, hora y minuto siempre tengan dos dígitos
  if (pickupDay < 10) pickupDay = '0' + pickupDay;
  if (pickupMonth < 10) pickupMonth = '0' + pickupMonth;
  if (pickupHour < 10) pickupHour = '0' + pickupHour;
  if (pickupMinute < 10) pickupMinute = '0' + pickupMinute;

  var pickupFormatted = `${pickupDay}/${pickupMonth}/${pickupYear} ${pickupHour}:${pickupMinute}`;

  document.getElementById('ticket-customer').innerHTML = `<h3>Nom: ${customerName} <br> Nº Telf.: ${customerPhone} <br> Recollida: ${pickupFormatted}</h3><hr>`;
}


function productTypeChange() {
  var productType = document.getElementById('product-type').value;
  if (productType === 'generico') {
    document.getElementById('product-details').innerHTML = `
        <textarea id="product-description" placeholder="Escribe aquí la descripción del producto"></textarea>
        <button type="submit" onclick="addProduct('generico', event)">Añadir</button>
        `;
  } else if (productType === 'pastel') {
    document.getElementById('product-details').innerHTML = `
        <input type="text" id="product-name" placeholder="Tipo de pastel">
        <input type="text" id="product-weight" placeholder="Peso del pastel (g)">
        <input type="text" id="product-message" placeholder="Letrero del pastel">
        <textarea id="product-more-info" placeholder="Más información sobre la comanda"></textarea>
        <button type="submit" onclick="addProduct('pastel', event)">Añadir</button>
        `;
  } else {
    document.getElementById('product-details').innerHTML = '';
  }
}

function addProduct(type, e) {
  e.preventDefault();
  let productDescription, productName, productWeight, productMessage, productMoreInfo;
  if (type === 'generico') {
    productDescription = document.getElementById('product-description').value;
    products.push({
      type: 'GENÉRICO',
      details: [productDescription]
    });
  } else if (type === 'pastel') {
    productName = document.getElementById('product-name').value;
    productWeight = document.getElementById('product-weight').value;
    productMessage = document.getElementById('product-message').value;
    productMoreInfo = document.getElementById('product-more-info').value;
    products.push({
      type: 'PASTEL',
      details: [productName, productWeight + 'g', productMessage, productMoreInfo]
    });
  }
  updateTicket();
}

function updateTicket() {
  let ticketItems = document.getElementById('ticket-items');
  ticketItems.innerHTML = '<h3>Encarrecs:</h3><hr>';
  products.forEach((product, index) => {
    ticketItems.innerHTML += `<p>${product.type}:<br> - ${product.details.join('<br> - ')} <span onclick="removeProduct(${index})" class="remove-product">X</span></p><hr>`;
  });
}

function removeProduct(index) {
  products.splice(index, 1);
  updateTicket();
}

document.getElementById('print-btn').addEventListener('click', function() {
  window.print();
});


