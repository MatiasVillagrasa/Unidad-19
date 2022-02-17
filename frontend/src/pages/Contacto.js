import React from 'react';
import '../styles/components/pages/Contacto.css';

const ContactoPage = (props) => {
    return (
        <main className="mContacto">
            <div className="contenedorContacto">
                <h3>Formulario de Contacto</h3>
                <form action="">
                    <p>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" placeholder="Ingresar Nombre" />
                    </p>
                    <p>
                        <label htmlFor="apellido">Apellido: </label>
                        <input type="text" placeholder="Ingresar Apellido" />
                    </p>
                    <p>
                        <label htmlFor="email">Email: </label>
                        <input type="text" placeholder="Ingresar Email" />
                    </p>
                    <p>
                        <label htmlFor="telefono">Telefono: </label>
                        <input type="text" placeholder="Cod. Area - Numero" />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje: </label>
                        <textarea placeholder="Mensaje"></textarea>
                    </p>
                    <p className="boton">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
        </main>
    );
}

export default ContactoPage;