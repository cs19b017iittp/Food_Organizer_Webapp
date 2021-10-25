import React from 'react'

export default function Navbar() {
    return (
        <>
        {/* <Navbar/> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="./carousel">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="./home">Home</a>
                <a className="nav-link" href="./profile">Profile</a>
                <a className="nav-link" href="./calorie">Calorie</a>
                <a className="nav-link disabled" href="/">Disabled</a>
                
              </div>
            </div>
          </div>
        </nav>
      </>
    )
}
