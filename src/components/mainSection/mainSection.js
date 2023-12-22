import { useState } from "react";
import { FaSearch, FaChevronRight, FaChevronDown } from "react-icons/fa";
import "./mainSection.css"
import tabData from "../../assets/mainSection/mainSection.json"
import Card from "./card"



function MainSection(props) {


const [currentTab, setCurrentTab] = useState(0); 

const [tabJSON, setTabJSON] = useState(tabData[0]);

const toggleTab = (data) => {
    setCurrentTab(data);
    setTabJSON(tabData[data]);
    
}

const [dd_1,setDD_1] = useState(false);
const [dd_2,setDD_2] = useState(false);
const [dd_3,setDD_3] = useState(false);
const [dd_4,setDD_4] = useState(false);
const [dd_5,setDD_5] = useState(false);

    return(
    
    <div className={props.isDark ? "mainSection container dark" : "mainSection container light" }>
        <div className="mainTabs d-flex align-items-center my-3">
            <div className={`mainTab w-25 py-1 redge ${currentTab === 0 ? "active" : ""}`} onClick={() => toggleTab(0)}><h2 className="text-center">Labs</h2></div>
            <div className={`mainTab w-25 py-1  ${currentTab === 1 ? "active" : ""}`} onClick={() => toggleTab(1)}><h2 className="text-center">Challenges</h2></div>
            <div className={`mainTab w-25 py-1 ${currentTab === 2 ? "active" : ""}`} onClick={() => toggleTab(2)}><h2 className="text-center">Resources</h2></div>
            <div className={`mainTab w-25 py-1 ledge ${currentTab === 3 ? "active" : ""}`} onClick={() => toggleTab(3)}><h2 className="text-center">Projects</h2></div>
        </div>
        <div className="row">
            <div className="col-md-2 my-2  main-filters">
                <div class="filter-tabs">
                    { tabJSON.filter_boxes.length > 0 ? tabJSON.filter_boxes.map( (title,index) => 
                        { return <div className={index === 0 ? "filter-box active py-2 ps-1" : "filter-box py-2 ps-1" }>
                                        {title}
                                </div>})
                    : null
                    }
                </div>
                
                <div className="filter-content pt-2 mt-3">
                    <div className="pt-2 pb-2">
                        <h5 className="d-inline mx-2">Filters</h5>
                        <a href="#filter" className="clear-filter">Clear all</a>
                    </div>
                    {
                        tabJSON.filter_dd ? (
                            <>
                        <div className="filter-dd">
                            <div className="filter-heading px-2" onClick={() => setDD_1(!dd_1)}>
                                {!dd_1 ?  <FaChevronRight className="me-2"/> : <FaChevronDown className="me-2"/>}
                                Duration
                            </div>
                            <div className={dd_1 ? "px-3 py-3 d-block" : "px-3 py-3 d-none" }>
                                <label className="filter-checkbox">
                                    Less than 2 hours
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label className="filter-checkbox">
                                    2 - 4 Hours
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label className="filter-checkbox">
                                    4 - 8 Hours
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label className="filter-checkbox">
                                    1 - 2 Days
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label className="filter-checkbox">
                                    3 - 5 Days
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label className="filter-checkbox">
                                    5 + Days
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="filter-dd">
                        <div className="filter-heading px-2" onClick={() => setDD_2(!dd_2)}>
                            {!dd_2 ?  <FaChevronRight className="me-2"/> : <FaChevronDown className="me-2"/>}
                            Level
                        </div>
                        <div className={dd_2 ? "px-3 py-3 d-block" : "px-3 py-3 d-none" }>
                            <label className="filter-checkbox">
                                Beginner
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label className="filter-checkbox">
                                Intermediate
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label className="filter-checkbox">
                                Advanced
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label className="filter-checkbox">
                                Mixed
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>

                        </div>
                    </div>
                    <div className="filter-dd">
                        <div className="filter-heading px-2" onClick={() => setDD_3(!dd_3)}>
                            {!dd_3 ?  <FaChevronRight className="me-2"/> : <FaChevronDown className="me-2"/>}
                            Organizations
                        </div>
                        <div className={dd_3 ? "px-3 py-3 d-block" : "px-3 py-3 d-none" }>
                            <label className="filter-checkbox">
                                Prepr
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label className="filter-checkbox">
                                Linux Foundations
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label className="filter-checkbox">
                                Magnet
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label className="filter-checkbox">
                                CertNexus
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label className="filter-checkbox">
                                Ontario Chamber of Commerce
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label className="filter-checkbox">
                                Youth Boost
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>

                        </div>
                    </div>
                    <div className="filter-dd">
                        <div className="filter-heading px-2" onClick={() => setDD_4(!dd_4)}>
                            {!dd_4 ?  <FaChevronRight className="me-2"/> : <FaChevronDown className="me-2"/>}
                            Skills
                        </div>
                        <div className={dd_4 ? "px-3 py-3 d-block" : "px-3 py-3 d-none" }>    
                            <input class="search-skills" type="text" placeholder="Search skills"/>
                        </div>
                    </div>
                    </>
                        ) 
                        : 
                        (
                            <div className="filter-dd">
                            <div className="filter-heading px-2" onClick={() => setDD_5(!dd_5)}>
                                {!dd_5 ?  <FaChevronRight className="me-2"/> : <FaChevronDown className="me-2"/>}
                                Status
                            </div> 
                            <div className={dd_5 ? "px-3 py-3 d-block" : "px-3 py-3 d-none" }>
                                <label className="filter-checkbox">
                                    Open
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label className="filter-checkbox">
                                    Closed
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label className="filter-checkbox">
                                    In Progress
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label className="filter-checkbox">
                                    Submitted
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
    
                            </div>
                        </div>

                        )
                    }
                </div>
                 
            </div>
           
            <div className="col-md-10 main-content">
                <div className="row">
                    <div className="col-12 my-2 main-filter-box">
                        
                        <div className="row">
                            <div className="col-12 col-xs-12 col-md-5 col-lg-5 col-xl-6">
                                <div className="d-flex align-items-center p-2">
                                    <div className="position-relative">
                                    <FaSearch className="search-icon"></FaSearch>
                                    <input class="form-control" type="text" placeholder="Search"/>
                                    </div>
                                    <div>
                                    <button class="btn search-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xl-6 col-12">
                                <div className="d-flex align-items-center float-end p-2">
                                        <div>
                                            <small>Sort By</small>
                                        </div>
                                        <div className="ps-1">
                                            <select className="form-select">
                                                <option>Recently added</option>
                                                <option>Most Popular</option>
                                            </select>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 my-2 main-cards">
                        <div className="row">
                        <div className="col-12">
                            <nav >
                                <ul className="pagination float-end">
                                    <li className="page-item active"><span className="page-link">1</span></li>
                                    <li className="page-item"><span className="page-link">2</span></li>
                                    <li className="page-item"><span className="page-link">3</span></li>
                                    <li className="page-item"><span className="page-link">4</span></li>
                                    <li className="page-item"><span className="page-link">5</span></li>
                                    <li className="page-item"><span className="page-link">...</span></li>
                                    <li className="page-item"><span className="page-link">{tabJSON.p_num}</span></li>
                                </ul>
                            </nav>
                        </div>     
                    </div>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <Card isDark={props.isDark} json= {tabJSON}></Card>
                    <div className="col-md-12">
                        <div className="sep"></div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <nav >
                                <ul className="pagination float-end">
                                    <li className="page-item active"><span className="page-link">1</span></li>
                                    <li className="page-item"><span className="page-link">2</span></li>
                                    <li className="page-item"><span className="page-link">3</span></li>
                                    <li className="page-item"><span className="page-link">4</span></li>
                                    <li className="page-item"><span className="page-link">5</span></li>
                                    <li className="page-item"><span className="page-link">...</span></li>
                                    <li className="page-item"><span className="page-link">{tabJSON.p_num}</span></li>
                                </ul>
                            </nav>
                        </div>     
                    </div>          
            </div>
        </div>

    </div>
)
        

}

export default MainSection;