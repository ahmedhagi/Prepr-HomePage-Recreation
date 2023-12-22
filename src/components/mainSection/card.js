import "./card.css"

function Card(props) {
    return (
        <div className="col-12 my-2">
            <div className={props.isDark ? "myCard dark" : "myCard light"}>
                <div className="d-flex row">
                    <div className="col-xl-3 col-lg-5 col-md-5 col-12 col-xs-12 p-2">
                        <div className="cover-image img-thumbnail">Cover Image</div>
                        <p className="p-text mt-3"> Hosted by <b>Prepr</b></p>         
                    </div>
                    <div className="col-lg-7 col-md-7 col-xl-9 col-12 p-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <a href="#link">
                                    <h3 class="card-title">{props.json.card_title}</h3>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div>
                               <img alt="" class="card-icon" src={props.json.card_pic}></img> 
                            </div>
                            <div>
                                <p className="p-text mb-0"> 
                                    <b>Status: Open</b> Duration: <b>None</b> Level: <b>None</b>
                                </p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="mx-1 my-4 card-ds">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien neque, lobortis quis ex sit amet, bibendum iaculis leo. Maecenas euismod et nunc et laoreet. Suspendisse lorem risus, suscipit vel leo a, auctor commodo orci. Suspendisse potenti. Etiam finibus laoreet dui vitae ornare.Etiam vitae feugiat diam, quis convallis velit. Suspendisse auctor odio quis ipsum lobortis, a efficitur leo mollis. Cras a ultrices dolor. Aliquam sed enim turpis. Etiam iaculis cursus elit, a iaculis erat rhoncus vitae.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Card;