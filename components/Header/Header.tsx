"use client";

import Menu from "./Menu";
import Searchbar from "./SearchBar";

export default function Header() {
  return (
    <>
      <header className="">
        <div>
          <p>here is header</p>
        </div>
        <div className="container">
          <div className="d-flex">
            <div>
              <h1>Casteria</h1>
            </div>
            <nav>
              <ul>
                <li>Home</li>
                <li>Food</li>
                <li>Drink</li>
                <li>お問い合わせ</li>
                <li>
                  <input type="search" className="search-box" />
                  <button>Search</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Menu />
        <Searchbar />
      </header>
    </>
  );
}
