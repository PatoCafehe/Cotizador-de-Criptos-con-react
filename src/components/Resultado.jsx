import styled from '@emotion/styled';

const Contenedor = styled.div`
	color: #fff;
	font-family: 'Lato', sans-serif;

	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 15px;
`;

const Texto = styled.p`
	font-size: 18px;
	justify-content: justify;
	span {
		font-weight: 700;
	}
`;

const Imagen = styled.img`
	display: block;
	width: 110px;
`;

const Precio = styled.p`
	font-size: 24px;
	span {
		font-weight: 700;
	}
`;

const Resultado = ({ resultado }) => {
	const {
		IMAGEURL,
		PRICE,
		HIGHDAY,
		LOWDAY,
		CHANGEPCT24HOUR,
		MKTCAP,
		LASTUPDATE,
	} = resultado;
	return (
		<Contenedor>
			<Imagen
				src={`https://cryptocompare.com/${IMAGEURL}`}
				alt="imagen cripto"
			/>
			<div>
				<Precio>
					El Precio es de: <span>{PRICE}</span>
				</Precio>
				<Texto>
					Precio más alto del día: <span>{HIGHDAY}</span>
				</Texto>
				<Texto>
					Precio más bajo del día: <span>{LOWDAY}</span>
				</Texto>
				<Texto>
					Variación en últimas 24hs: <span>%{CHANGEPCT24HOUR}</span>
				</Texto>
				<Texto>
					Capitalización actual: <span>{MKTCAP}</span>
				</Texto>
				<Texto>
					Actualizado por última vez: <span>{LASTUPDATE}</span>
				</Texto>
			</div>
		</Contenedor>
	);
};

export default Resultado;
