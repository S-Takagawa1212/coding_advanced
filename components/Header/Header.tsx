"use client";

export default function Header() {
  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg pt-0">
          <div className="container-fluid p-0 ps-md-2">
            <a className="navbar-brand fs-1 fw-bold" href="#">
              Casteria
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Food
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">
                    Drink
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    お問い合わせ
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-none text-black bg-light"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
