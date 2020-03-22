import React from 'react';
import Sidebar from '../Components/Sidebar';
class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    componentDidMount() {

        fetch('http://127.0.0.1:8000/api/app')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    render (){
        return(
            <div>
            <Sidebar/>
            <div className="container-table">
               <table class="table">
                <thead class="thead-dark">   
                <tr> <th scope="col">Application Detail</th> </tr>
               </thead>
             <tbody>
     
              </tbody>
              </table>
            </div>
            </div>
        );
    }
}
export default Detail;