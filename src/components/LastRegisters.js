export function LastRegisters({lastRegisters}) {


  return (
  <div class="table-responsive">
    <h3>Ultimos registros de tablas</h3>
    <table class="table table-dark table-bordered" width="100%">
      <thead>
      <tr>
         <th scope="col">NameTable</th>
         <th scope="col">#</th>
         <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
    {
      lastRegisters.map((lastRegister)=>{
        return (
          <tr>
          <th>{ lastRegister.nameTable }</th>
          <th>{ lastRegister.id }</th>
          <th>{ lastRegister.name }</th>
          </tr>
        )
      })
    }
  </tbody>
</table>   
  </div>)
}