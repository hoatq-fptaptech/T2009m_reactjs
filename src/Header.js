import {Link} from "react-router-dom";
import React from 'react';
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            menu:[]
        }
    }
    componentDidMount() {
        fetch("https://foodgroup.herokuapp.com/api/menu")
            .then(rs=>rs.json())
            .then(rs=>{
                this.setState({
                    menu:rs.data
                })
            })
    }

    render() {
        const menu = this.state.menu;
        return (
            <header className="section header">
                <div className="container">
                    <ul>
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        {
                            menu.map(function (e,i) {
                                return (
                                    <li><Link to="/">{e.name}</Link></li>
                                )
                            })
                        }
                        <li><Link to="/detail">Detail</Link></li>
                    </ul>
                </div>
            </header>
        )
    }
}
