import "./header.css"
import Logo from '../../logo_full_horizontal.svg';


export default function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Logo Larica do dia posicionada com o Icone em formato de sorriso com a língua para fora, do lado esquerdo, e na direita do icone está a tipografia Larica do dia - Receitas culinárias." className="logo" />
            <button>Ver receita completa</button>
            <nav className="navigationLinks">
                <a href="#" className="navLink"><i class="fa-solid fa-house"></i>Início</a>
                <a href="#" className="navLink"><i class="fa-solid fa-book-open"></i>Receitas</a>
                <a href="#" className="navLink"><i class="fa-solid fa-drumstick-bite"></i>Suas Receitas</a>
            </nav>
        </header>
    )
}