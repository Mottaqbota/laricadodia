import "./carroussel.css"

export default function Carroussel() {
	return (
		<div className="carroussel">
			<button className="btnControl"><i class="fa-solid fa-chevron-left"></i></button>
			<div className="containerInfos">
				<h1 className="titleRecipie">PF Simples</h1>
				<h4 className="subtitleRecipie">Pratos brasileiros</h4>
				<p className="descriptionRecipie">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum nostrum provident! Vero placeat, iusto molestiae sit non porro ad inventore rerum architecto fugiat ducimus quia possimus ab incidunt tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ex sed. Et fugiat eaque nam perspiciatis tenetur. Architecto esse iste vero quas cumque, eveniet magnam dicta rem ipsam dolorum expedita.</p>
				<button className="btnRecipie"><i class="fa-solid fa-book-open"></i>Ver receita completa</button>
				<button className="btnRecipie secBtn"><i class="fa-solid fa-bookmark"></i>Guardar receita</button>
			</div>
			<div className="containerImages">
				<img src="https://img.freepik.com/fotos-premium/um-prato-de-comida-com-um-prato-de-comida-acompanhado-de-arroz-e-feijao_662214-13839.jpg" alt="" />
			</div>
			<button className="btnControl"><i class="fa-solid fa-chevron-right"></i></button>
		</div>
	)
}