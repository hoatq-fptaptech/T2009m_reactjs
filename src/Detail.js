import React from 'react';
import GoogleMap from 'google-map-react';
export default function Detail() {
    const center = {
        lat: 21.02898,
        lng: 105.7811
    }
    const zoom = 18;
    return (
        <section className="section main">
            <div className="container">
                <article className="content">
                    <div className="body-content">
                        <div style={{width:"1000px",height:"500px"}}>
                            <GoogleMap center={center} zoom={zoom}
                                       bootstrapURLKeys="AIzaSyCaj0mHlR-keu-9hsR6d-gB0L9BclG04rk"/>
                        </div>
                    </div>
                </article>
                <aside className="sidebar">
                    <div className="block black-block">
                        <p>Noi dung 1</p>
                        <p>Noi dung 2</p>
                        <p>Noi dung 3</p>
                        <p>Noi dung 4</p>
                    </div>
                    <div className="block">
                        <p>Noi dung 1</p>
                        <p>Noi dung 2</p>
                        <p>Noi dung 3</p>
                        <p>Noi dung 4</p>
                    </div>
                    <div className="block">
                        <p>Noi dung 1</p>
                        <p>Noi dung 2</p>
                        <p>Noi dung 3</p>
                        <p>Noi dung 4</p>
                    </div>
                </aside>
            </div>
        </section>

    )
}