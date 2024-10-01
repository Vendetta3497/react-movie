import Body from '../../components/Body/Body';
import styles from './CardPages.module.css';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import { useContext, useState } from 'react';
import { MovieContext } from '../../context/MovieContext.jsx';


function CardPages() {
	const location = useLocation();
	const { infoMovie } = location.state || {};
	console.log(infoMovie);
	const [valueOfButton, setValueOfButton] = useState('Favorite');

	const { addMovie } = useContext(MovieContext);


	function actionWitnItem() {
		addMovie(infoMovie);
		setValueOfButton('Added!');
		
	}
	

	return (
		<Body>
			<div className={styles['info-wrapper']}>
				<div className={styles['info']}>
					<img src={infoMovie.Poster} alt="movie" />
					<div className={styles['info__content']}>
						<h2 className={styles['info__content__item']}>{infoMovie.Title}</h2>
						<div className={styles['info__content__item']}>
						type - {infoMovie.Type}
						</div>
						<div className={styles['info__content__item']}>
						Year - {infoMovie.Year}
						</div>
						<Button onClick ={actionWitnItem}>{valueOfButton}</Button>
					</div>
				</div>
				<div className={styles['info__description']}>
					<h3 className={styles['description-title']}>Description:</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ratione qui distinctio fuga exercitationem quisquam, nostrum perspiciatis numquam quae nisi minima ad consequuntur quis sint? Inventore, incidunt nemo nobis voluptate praesentium earum velit blanditiis labore neque hic, sapiente natus officia laboriosam alias suscipit provident exercitationem! Ratione esse voluptatum alias consectetur excepturi, non, tempora soluta porro ad eos beatae aperiam veritatis facilis velit quos debitis eum odit vitae maiores aliquid quaerat voluptatibus sint! Repudiandae architecto consequatur adipisci culpa eius molestiae cupiditate magnam quas, doloribus corrupti! Impedit mollitia delectus dignissimos sequi modi ullam reiciendis eveniet! Temporibus ipsa ex repudiandae, minima quidem voluptatum reiciendis perferendis incidunt sit eveniet id asperiores eos! Aut mollitia accusantium, adipisci impedit quod laboriosam eum dolores? Ad ducimus consequuntur fugit rerum minima fuga. Sunt amet beatae error ut magni explicabo doloremque aliquam perspiciatis? Illum rerum ea odit at cupiditate numquam iusto quis cum itaque est illo tenetur minima consequatur deleniti impedit magnam expedita, ratione, ab omnis labore! Exercitationem tenetur ullam reprehenderit hic at. Laborum quaerat ut ad cum dolore enim earum optio beatae fugit fuga, itaque odio ipsa quo voluptatibus. Aliquid vero facilis totam cupiditate ex, ducimus nam repellendus, mollitia voluptatem commodi eveniet, est deleniti aspernatur ad doloremque ipsa adipisci ipsum nesciunt corrupti maiores odit. Necessitatibus quis est blanditiis architecto dolor! Iusto harum aspernatur enim atque, earum, quas, ad accusantium quibusdam beatae et vel impedit voluptatum odit velit deserunt suscipit laudantium eum excepturi similique veniam cumque minima cupiditate? Nihil, quis delectus similique minus pariatur maiores ipsa repellendus itaque totam quia explicabo iste aliquid enim, eligendi adipisci dolores expedita, quod tempora quo cumque molestiae quae fugiat a eum. Tenetur repudiandae, obcaecati eius voluptatum id sequi impedit? Dignissimos dolorum, eius soluta rerum voluptatem corporis ex, neque aliquid eos fugit dolore reiciendis. Minus voluptatum, enim assumenda impedit est velit placeat consectetur ipsum.</p>
				</div>
			</div>
		</Body>

	);
}

export default CardPages;