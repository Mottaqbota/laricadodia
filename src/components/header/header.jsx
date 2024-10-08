import "./header.css"

export default function Header() {
    return (
        <header>
            <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTwmGmPbJzpDBmP6tkwVqdOTWackE-i8Ytc-MACtUVE5icHW8Xi0uzzUm_GnSTlmu1KlXdYL2ELKWA971PKCg&s=19" alt="" className="logo" />
            <nav>
                <a href="#"><i class="fa-solid fa-house"></i>Início</a>
                <a href="#"><i class="fa-solid fa-book-open"></i>Receitas</a>
                <a href="#"><i class="fa-solid fa-drumstick-bite"></i>Suas Receitas</a>
            </nav>
        </header>
    )
}