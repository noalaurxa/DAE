import logo from "../../../assets/images/logo-cine.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav nav--scroll">
        <div className="container d-flex a-items-center">
          <div className="f-1 d-flex j-content-start">
            <a href="#" className="link d-flex a-items-center g-2">
              <img src={logo} alt="Cine SpoilerS Logo" className="img img--logo" />
              <h2 className="interactive interactive--lg c-primary">Cine SpoilerS</h2>
            </a>
          </div>

          <div className="off-canvas off-canvas--right off-canvas--mobile" id="menu">
            <a href="#" className="off-canvas__backdrop"></a>
            <div className="off-canvas__child">
              <ul className="f-2 list flexbox flexbox--center flexbox--responsive g-8">
                <li><a href="#now-showing" className="link interactive"><i className="bi bi-film"></i> Movies</a></li>
                <li><a href="#cinemas" className="link interactive"><i className="bi bi-buildings"></i> Cinemas</a></li>
                <li><a href="#promotions" className="link interactive"><i className="bi bi-gift"></i> Promotions</a></li>
                <li><a href="#tickets" className="link interactive"><i className="bi bi-ticket-detailed"></i> My Tickets</a></li>
                <li><a href="#ar" className="link interactive"><i className="bi bi-file-post"></i> AR Posters</a></li>
              </ul>
            </div>
          </div>

          <div className="f-1 d-flex a-items-center j-content-end g-2">
            <a href="#signin" className="button button--primary interactive interactive--sm">Sign In</a>
            <a href="#menu" className="link interactive interactive--2xl md:d-none">☰</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;