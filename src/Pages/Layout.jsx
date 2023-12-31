import { Outlet,Link } from "react-router-dom";

function Layout(){

    return(

         <>
      <main className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold text-white" to="/">React Routing</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link to="/" className="navbar-brand text-white" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="navbar-brand  text-white" to="about"> About </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand  text-white" to="contact"> Contact </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand  text-white" to="service"> Service</Link>
                        </li>
                    </ul>
                 </div>
                </div>
             </nav>
            <div className="container p-5">

              <Outlet></Outlet>
 
            </div>
             <footer className="bg-light p-3 text-center footer mt-auto">
                <p className="fw-bold bg-dark text-white">This is the Footer.</p>
            </footer>
           </main>
      </>
    )
}

export default Layout;