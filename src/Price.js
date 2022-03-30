function Pricechart(props)
{
    return(
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.array.plan}</h5>
            <h6 class="card-price text-center">${props.array.rs}<span class="period">/{props.array.dur}</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              {
             props.array.features.map((e)=>
             {
             return <li class= {`${e.mute?"text-muted":""}${e.bold?"fw-bolder":""}`} ><span class="fa-li"><i class={`${e.check?"fa fa-check":"fa fa-times"}`}></i></span><strong>{e.na}</strong> {e.name}</li>
             })
             }
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">{props.array.btn}</a>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Pricechart;