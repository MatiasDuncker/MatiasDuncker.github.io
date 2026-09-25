function Header(){
    return(
          <header className="header-profile text-center text-md-start mb-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
                    <img src="assets/images/homepage.jpg" alt="Foto de perfil" className="profile-img"/>
                </div>
                <div className="col-12 col-md-9">
                    <h1 className="fw-bold">Matias Alberto Duncker Jara</h1>
                    <p className="lead mb-2">Estudiante de Ingeneria Informática (Desarrollo de sofware)</p>
                    <div id="Contacto" className="d-flex flex-wrap align-items-center gap-2 mt-3">
                        <a href="mailto:ma.duncker@duocuc.cl"className="btn btn-sm btn-light fw-bold text-dark px-3 rounded-pill shadow-sm">Correo</a>
                        <span>-</span>
                        <a href="+56971064665"className="btn btn-sm btn-light fw-bold text-dark px-3 rounded-pill shadow-sm">Fono</a>
                        <span>-</span>
                        <a href="https://github.com/MatiasDuncker/"className="btn btn-sm btn-light fw-bold text-dark px-3 rounded-pill shadow-sm">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header