import "./exploreSection.css"

import { FaSearch } from "react-icons/fa";





function ExploreSection(props) {




return(
    <>
    <div className={props.isDark ? "exploreSection dark" : "exploreSection light" }>
        <div className="text-end">
            <img alt="" src="https://preprlabs.org/front/img/ic_round-clear.svg"></img>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-12 text-center">
                <h1>Explore Your Interests</h1>
                <p>
                    We'll recommend content based on your interests we've listed here.
                    <br/>
                    Feel free to add or remove topics to customize your experience !
                </p>
                <div className="row position-relative">
                    <div className="col-1">
                    <i><FaSearch></FaSearch></i>
                    </div>
                    <div className="col-11">
                    <input class="form-control" type="text" placeholder="Search Skills"/>
                    </div>
                </div>
                <h3>Click an interest to narrow your recommendations.</h3>
                <div className="explore-skills">
                    <div className="explore-skill">Techinical Recruiting</div>
                    <div className="explore-skill">Cloud Architecture</div>
                    <div className="explore-skill">International Intellectual Property</div>
                    <div className="explore-skill">WordPress</div>
                    <div className="explore-skill">Video Editing</div>
                    <div className="explore-skill">AMI</div>
                    <div className="explore-skill">UX Design</div>
                    <div className="explore-skill">NumPy</div>
                    <div className="explore-skill">Cloud Sercuity</div>
                    <div className="explore-skill">Customer Conversion</div>
                </div>
            </div>
        </div> 
    </div>
    
     </>
    
);

}

export default ExploreSection;