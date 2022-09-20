import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((link) => {
    let linkEntries = Object.entries({ link });
    console.log(linkEntries)
    let crunchLink = "#" + linkEntries[0][1];
    return <a href={crunchLink} >{link}</a>
  })

  return <nav>
    {/* display an <a> tag for each link here */}
    {navLinks}

  </nav>;
}

export default NavBar;
