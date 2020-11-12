import React from 'react';
export default function Detail() {
    return (
        <section className="section main">
            <div className="container">
                <article className="content">
                    <div className="body-content">
                        <h1>Đây là 1 bài báo hay</h1>
                        <img src="imgs/iphone_x_64gb_3.jpg" height={600} width={600} />
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