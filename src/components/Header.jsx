export default function Header(props) {
    return (
        <>
        {/* Page Header Start */}
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center py-5">
                <h1 className="display-4 text-white animated slideInDown mb-4">
                    {props.title}
                </h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a className="text-white" href="#">
                        Home
                        </a>
                    </li>
                    <li className="breadcrumb-item">
                        <a className="text-white" href="#">
                        Pages
                        </a>
                    </li>
                    <li
                        className="breadcrumb-item text-primary active"
                        aria-current="page"
                    >
                        {props.title}
                    </li>
                    </ol>
                </nav>
                </div>
            </div>
        {/* Page Header End */}
        </>
    );
}