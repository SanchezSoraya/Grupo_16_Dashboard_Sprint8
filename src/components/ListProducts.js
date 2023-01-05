export function ListProducts ({products}){

  return(
    <div class="table-responsive">
      <h2> Lista de Products</h2>

    <table class="table table-dark table-bordered" width="100%">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Color</th>
          <th scope="col">Size</th>
        </tr>
      </thead>
      <tbody>
        { 
          products.map((product)=>{
          return(
            <tr>
              <th> {product.id}</th>
              <th> {product.name}</th>
              <th> {product.description}</th>
              <th> {product.color}</th>
              <th> {product.size}</th>
            </tr>
          )
          }) 
        }
      </tbody>
    </table>      
  </div>)
}