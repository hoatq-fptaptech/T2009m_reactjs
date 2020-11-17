import Header from "./Header";
import Main from "./Main";
import Category from "./Category";
import Detail from "./Detail";
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import React from 'react';
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }
    componentDidMount() {
        // tim cach lay du lieu tu api ve
        fetch("https://foodgroup.herokuapp.com/api/today-special")
            .then(rs=>rs.json()) // JSON.parse(rs)
            .then(rs=>{
               // rs chinh la du lieu JSON nhan duoc tu api
                this.setState({
                    products:rs.data // nap du lieu tu rs.data vao products trong state
                })
            });
    }

    render() {
        const products = this.state.products;
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <Main productlist={products}/>
                        </Route>
                        <Route exact path="/category">
                            <Category/>
                        </Route>
                        <Route exact path="/detail">
                            <Detail/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
