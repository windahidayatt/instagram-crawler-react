import React, { Component } from 'react';
import './css/home-style.css'
import { Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hashtag : ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div className="container-fluid container-form">
                <div className="row mt-5">
                    <div className="col-lg-12 margin-content">
                        <div className="card card-login mt-4 mb-4">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Cari</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="text" name="hashtag" className="form-control" placeholder="Hashtag yang ingin dicari..." value={this.state.hashtag} onChange={this.handleChange}></input>
                                    </div>
                                    {/* <button type="submit" className="btn btn-secondary btn-lg mt-2 mb-2">Cari</button> */}
                                    <Link to={{pathname: "/table-location", hashtag: this.state.hashtag}} className='btn btn-secondary btn-lg mt-2 mb-2'>Cari</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>    
        );
    }
}

export default Home;