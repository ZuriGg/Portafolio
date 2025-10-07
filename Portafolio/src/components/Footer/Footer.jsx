import "./Footer.css";

function Footer() {
    return (
        <footer>
            <p>
                Programado con: <span> Vite (React y JavaScript) y CSS</span>.
            </p>
            <p>
                Codificado en: <span> Visual Studio Code</span>.
            </p>
            <p>
                Desplegado en: <span>Vercel</span>.
            </p>
            <p>
                Texto estilizado con: <span>SUSE y</span>
                <span className="cascadiaType"> Cascadia Code</span>.
            </p>
        </footer>
    );
}

export default Footer;
