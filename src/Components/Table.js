import React from 'react';
class Table extends React.Component{
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
    render(){
        const {items}=this.state;
        return (
            <div className="container-data">
                   <ul>
                    {items.map(item => (
                        <li key={item.id_app}>
                            Name: {item.nom }| Email: {item.email}
                        </li>
                    ))}
                </ul>

            </div>

        );
    }
}
export default Table;