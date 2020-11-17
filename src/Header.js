import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="section header">
            <div className="container">
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/category">Category</Link></li>
                    <li>... danh sach category lay tu api menu </li>
                    <li><Link to="/detail">Detail</Link></li>
                </ul>
            </div>
        </header>
    )
}
