import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item">
                        <Link to="/" className="nav-link px-2 text-muted">
                            Home
                        </Link>
                    </li>
                </ul>
                <p class="text-center text-muted">© 2022 Company, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;
