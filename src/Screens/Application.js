import React from 'react';
import Sidebar from '../Components/Sidebar';
class Application extends React.Component{
    render(){
        return(
            <div>
                <Sidebar/>
               
                  <div className="container">
                      <div className="container-inner">
                          <form>
                              <h3> Application Form</h3>
                              
                                <div className="form-group">
                                 <label>Family Name</label>
                                 <input type="text" className="form-control" placeholder="Enter here " />
                                 </div>
                                 <div className="form-group">
                                 <label>First Name</label>
                                 <input type="text" className="form-control" placeholder="Enter here " />
                                 </div>
                                 <div className="form-group">
                                 <label>Email address</label>
                                 <input type="email" className="form-control" placeholder="Enter here "  />
                                 </div>
                                 <div className="form-group">
                                 <label>T-shirt size</label>
                                 <input type="text" className="form-control" placeholder="Enter here "  />
                                 </div>
                                 <div className="form-group">
                                 <label>Tell us about yourself !</label>
                                 <input type="text" className="form-control" placeholder="Enter here "  />
                                 </div>
                                 <div className="form-group">
                                 <label>Why would you attend Algiers'up competition ?</label>
                                 <input type="text" className="form-control" placeholder="Enter here "  />
                                 </div>
                                 <div className="form-group">
                                 <label>Do you have a team ? </label>
                                 <input type="text" className="form-control" placeholder="Enter here "  />
                                 </div>
                                 <div className="form-group">
                                 <label> Attach your CV here  </label>
                                 <input type="text" className="form-control" placeholder="Enter here " />
                                 </div>
                                 <div className="form-group">
                                 <label>Link to your Github</label>
                                 <input type="text" className="form-control" placeholder="Enter here "  />
                                 </div>
                                 <div className="form-group">
                                 <label>Link to your Linkedin</label>
                                 <input type="text" className="form-control" placeholder="Enter here "  />
                                 </div>
                                 <div className="form-group">
                                 <label>Any comments ?</label>
                                 <input type="text" className="form-control" placeholder="Enter here "  />
                                 </div>

                          </form>

                      </div>

                  </div>
            
            </div>
          
        );
    }
}
export default Application ;