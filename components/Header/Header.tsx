"use client"

import Menu from "./Menu"
import Searchbar from "./SearchBar"

export default function Header() {
    return (
        <>
          <header className="">
            <div>
              <p>here is header</p>
            </div>
            <Menu/>
            <Searchbar/>
           </header>
        </>

    )
}
