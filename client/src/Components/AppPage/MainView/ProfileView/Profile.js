import React from "react";

const Profile = props => (
  <div>
    <div style={styles.container} className="card">
      <h1 style={styles.paragraphStyle}>Profile</h1>
    </div>

    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Home
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Pages
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>



      <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>

      </div>
    </nav>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">The Header</div>
              <div className="card-body">
                Lorem ipsum, you're the greatest thing that has ever been or ever will be. You're special. You're so very special. Decide where your cloud
                lives. Maybe he lives right in here. Now then, let's play. I'll
                go over the colors one more time that we use: Titanium white,
                Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson,
                Sap green, Cad yellow, and Permanent red. It's beautiful - and
                we haven't even done anything to it yet. You don't have to spend
                all your time thinking about what you're doing, you just let it
                happen. Let's do that again. You need the dark in order to show
                the light. Nice little clouds playing around in the sky. We
                don't really know where this goes - and I'm not sure we really
                care. Think about a cloud. Just float around and be there. If
                you've been in Alaska less than a year you're a Cheechako. Let's
                give him a friend too. Everybody needs a friend. This is an
                example of what you can do with just a few things, a little
                imagination and a happy dream in your heart. Let's go up in
                here, and start having some fun Don't forget to tell these
                special people in your life just how special they are to you.
                That's a son of a gun of a cloud. I really recommend you use
                odorless thinner or your spouse is gonna run you right out into
                the yard and you'll be working by yourself. Get tough with it,
                get strong.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

const styles = {
  container: {
    backgroundColor: "#282c34",
    display: "flex"
  },
  paragraphStyle: {
    padding: 10,
    color: "white"
  },
  wrapper: {
    display: "flex",
    alignItems: "stretch"
  }
};

export default Profile;
