import TopBar from "./TopBar"

export function LastRegisters({lastRegisters}) {


  return (
    <div className="w-100">
      <TopBar/>
  <div className="row justify-content-center w-100">
  <div>
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
  </div>
  </div>
  </div>)
}