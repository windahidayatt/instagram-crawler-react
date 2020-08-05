import React, { Component } from 'react';
import './css/footer-style.css'

class Footer extends Component {
    render() {
        return (
            <div className="site-footer">
                <div className="row mb-3 text-center">
                    <div className="col-md-12">
                        <p>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        Copyright &copy; Necis 2020 <script>document.write(new Date().getFullYear());</script> 
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;