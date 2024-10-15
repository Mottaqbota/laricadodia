
import "./carroussel.css"
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, } from 'swiper/modules';

export default function Carroussel(props) {
	console.log(props)
	return (
		<Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]}>
			{props?.data?.map((item) => (
				<SwiperSlide>
					<div className="carroussel">
						{/* <button className="btnControl"><i class="fa-solid fa-chevron-left"></i></button> */}
						<div className="containerRecipies">
							<div className="containerInfos">
							<img className="imageRecipie" src={item.link_imagem} alt="" />
								<h1 className="titleRecipie">{item.receita}</h1>
								<h4 className="subtitleRecipie">{item.tipo}</h4>
								<p className="descriptionRecipie">{item.modo_preparo}</p>
								<button className="btnRecipie"><i class="fa-solid fa-book-open"></i>Ver receita completa</button>
								<button className="btnRecipie secBtn"><i class="fa-solid fa-bookmark"></i>Guardar receita</button>
							</div>
						</div>
						{/* <button className="btnControl"><i class="fa-solid fa-chevron-right"></i></button> */}
						</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

{/* <div className="carroussel">
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
</div> */}