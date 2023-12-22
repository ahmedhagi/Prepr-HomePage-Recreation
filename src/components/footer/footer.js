
import "./footer.css"

function Footer (props) {
    return (
        <footer class={ props.isDark ? "footer-section dark footer" : "footer-section light footer"  }>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <label className="footer-item float-start">v24.0.11</label>
                        <a href="#link">Privacy policy</a>
                        <a href="#link">Terms of use</a>
                        <a href="#link">Help Center</a>
                        <label className="footer-right float-end">
                            Powered by<a href="#link">LearnLab.ai</a>
                        </label>
                    </div>

                </div>
            </div> 
        </footer>
    )

}

export default Footer;