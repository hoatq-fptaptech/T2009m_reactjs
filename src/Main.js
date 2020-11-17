import React from 'react'

export default function Main(props) {
    const products = props.productlist;
    return (
        <section className="section main">
            <div className="container">
                <h1 className="grid-title">Grid</h1>
                <div className="row">
                    {
                        // can chay vong lap de in ra sp
                        products.map(function (e,i) {
                            // tra ve 1 sp
                            // e <=> products[i]
                            return (
                                <div className="col-md-4">
                                    <div className="item text-center">
                                        <img className="product-image" src={e.image} height="700"
                                             width="700"/>
                                        <h2 className="product-name">{e.productName}</h2>
                                        <div className="star">
                                            <div className="star-box">
                                                <div className="star-rate" style={{width:e.star/5*100+"%"}}></div>
                                            </div>
                                        </div>
                                        <p className="price">${e.price}</p>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}