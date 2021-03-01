
exports.hello = (req, res, next) => {
    res.status(201).send(`<html>
    <body>
            <div style="text-align:center">
            <h1> Seja bem vindo </h1>

            <p>Esta é uma api desenvolvido em nodejs, hospedada no  <a target="_blank" href="https://www.heroku.com/">Heroku.</a> </p>
            <p>Esta api alimenta uma interface criada com components Vuejs (<a target="_blank" href="https://sistemahuges.000webhostapp.com/">Freendly</a> ),</p>
            <p>Hospedada no Free Web Hosting <a target="_blank" href="https://www.000webhost.com/">Hostiger.</a> </p>

            <p>Author : <a target="_blank" href="https://www.linkedin.com/in/elvis-huges-41043897/">Elvis Huges</a> </p>

    </div>
    </body>
    </html>`);
};





