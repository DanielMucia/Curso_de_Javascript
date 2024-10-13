class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addProduct(product) {
       const productList = document.getElementById('product-list');
       const element = document.createElement('div');
       element.innerHTML=`
       <div class="card text-center mb-4">
         <div class="card-body">
         <strong>Product Name</strong>: ${product.name}
          <strong>Product Price</strong>: ${product.price}
           <strong>Product Year</strong>: ${product.year}
           <a href="#" class="btn btn-danger" name="delete">Delete</a>
         </div>
       </div>
       `;
       productList.appendChild(element);


    }
    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProducto(element) {
      if(element.name === 'delete') {
        element.parentElement.parentElement.parentElement.remove();
        this.showMessage('producto borrado', 'danger');
      }
    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        //showing in dom

        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();

        }, 3000);
    }
}

//eventos de DOM
document.getElementById('product-form')
.addEventListener('submit', function(e) {
    const name  = document.getElementById('name').value;
    const price  = document.getElementById('price').value;
    const year  = document.getElementById('year').value;
    const product =new Product(name, price, year);

    const ui = new UI();

    if(name === '' || price === '' || year === ''){
        return ui.showMessage('Porfavor complete los campos', 'danger');
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Producto agregado', 'success');


    e.preventDefault();

});

document.getElementById('product-list').addEventListener('click', function(e) {
    const ui =new UI();
    ui.deleteProducto(e.target);
});