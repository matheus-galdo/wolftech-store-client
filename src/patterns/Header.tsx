import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './header.scss';
import HeaderButtons from './HeaderButtons';

export default function Header() {

    return <header className="store-header">
        <div className="main-header">
            <div className="logo-container">

                <Link className="logo" to={``}>
                    <img className="" src="/assets/img/wolftech-side.png" alt="logotipo" />
                </Link>
            </div>

            <div className="search-bar-container">
                <input type="text" placeholder="Buscar por produtos" name="pesquisar" id="pesquisar" />
                <button className="search-btn"><span className="material-icons">search</span></button>
            </div>

            <HeaderButtons />
        </div>


        <nav className='categories'>
            <ul className="menu">
                <li id="dropdownBtn">
                    Categorias
                    <MdKeyboardArrowDown />

                    <ul className="dropdown-menu">
                        <li>Gabinete</li>
                        <li>Placa Mãe</li>
                        <li>Placa de Vídeo</li>
                        <li>Processador</li>
                        <li>Memória RAM</li>
                        <li>Fonte</li>
                        <li>HD</li>
                        <li>SSD</li>
                        <li>Mouse</li>
                        <li>Teclado</li>
                    </ul>
                </li>

                <li>Monte seu PC</li>
            </ul>
        </nav>
    </header >;
}