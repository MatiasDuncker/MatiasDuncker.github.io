function Main(){
    return(
         <main className="container">

        <div className="row">
            <div className="col-12 col-md-4">

                <section id="Sobre mi"className="card card-custom p-3">
                    <h2 className="h5 section-title">Sobre mí</h2>
                    <p>Me defino como una persona que no se rinde facil, alegre y la verdad un poco ansioso pero estoy trabajando en eso, soy estudiante de la carrera de ingenieria en informatica en el DUOC UC de San Juaquin,
                        mis gustos son los videojuegos, el anime y escuchar musica.</p>
                </section>

                <section id="Lenguajes" className="card card-custom p-3">
                    <h2 className="h5 section-title">Habilidades Técnicas</h2>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2"><strong>Lenguajes:</strong> Python, Java. </li>
                        <li className="mb-2"><strong>Bases de Datos:</strong> SQL, MySQL, Oracle</li>
                        <li className="mb-2"><strong>Herramientas:</strong> Git, Visual Studio Code, Canva</li>
                        <li><strong>Frameworks/CSS:</strong> Bootstrap, Spring Bot</li>
                    </ul>
                </section>
            </div>

            <div className="col-12 col-md-8">

                <section id="Educación" className="card card-custom p-3">
                    <h2 className="h5 section-title">Educación</h2>
                    <div>
                        <h3 className="h6 fw-bold mb-1">Colegio San Fernando | 2010 - 2018</h3>
                        <p className="mb-o">Enseñanza Basica</p>
                    </div>
                    <div>
                        <h3 className="h6 fw-bold mb-1"> Centro Particular de Ñuñoa | 2019 -2022</h3>
                        <p className="mb-0">Enseñaza Media (Tecnico en nivel medio en electronica)</p>
                    </div>
                    <hr className="my-3 text-dark opacity-75 border border-2"/>
                    <div>
                        <h3 className="h6 fw-bold mb-1">Instituto profesional DuocUc | 2025 - En curso</h3>
                        <p v="mb-0">Ingeniería en Informática (Desarrollo de Software).</p>
                    </div>
                </section>

                <section id="Proyectos"className="card card-custom p-3">
                   
                    <div>
                        <h3 className="h6 fw-bold mb-1"> Cat-alog / Fullstack 1</h3>
                        <p className="text-muted small mb-1">Java / Spring boot</p>
                        <p className="mb-0">Cat-alog es un trabajo actualmente en desarrollo para una página, este fue realizado en SpringBoot, (En primera instancia solo Backend) la cual tiene por objetivo poder realizar busqueda de gatos especificando edad, raza, personalidad y tambien te permite adoptar a estos gatos.</p>
                    </div>
                </section>

            </div>

        </div>
    </main>
    )
}
export default Main