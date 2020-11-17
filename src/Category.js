import React from 'react';
import Main from "./Main";
export default class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }
    componentDidMount() {
        fetch("https://foodgroup.herokuapp.com/api/category/3")
            .then(rs=>rs.json())
            .then(rs=>{
                this.setState({
                    products:rs.data.foods
                })
            })
    }

    render() {
        var products= this.state.products;
        return (
            <div>
                <h1>Category</h1>
                <Main productlist={products}/>
            </div>


        )
    }
}